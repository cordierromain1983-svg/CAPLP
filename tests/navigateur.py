"""
VÉRIFICATION DANS UN NAVIGATEUR
Lancer depuis la racine du dépôt :  python3 tests/navigateur.py
(Il faut Python 3 et Playwright :  pip install playwright  puis  playwright install chromium)

Ouvre l'application dans un navigateur invisible, trois fois (sans filière, en CIEL, en Métiers de la
sécurité), affiche chaque séance, chaque outil et chaque fiche, et joue rapidement les activités
(tris, scénarios, reformulations, choix). Signale toute erreur JavaScript. Ne modifie aucun fichier.
"""
import functools, http.server, os, socketserver, sys, threading
from playwright.sync_api import sync_playwright

RACINE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PORT = 8799

class Calme(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

def serveur():
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(("127.0.0.1", PORT), functools.partial(Calme, directory=RACINE))
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd

def clic(el):
    try:
        if el and el.is_visible() and el.is_enabled():
            el.click(timeout=1500); return True
    except Exception:
        pass
    return False

def jouer(page):
    """Joue rapidement les activités visibles de la page."""
    for _ in range(40):  # tris en tas
        if not clic(page.query_selector("[aria-label='Dans quel tas ?'] button")): break
        page.wait_for_timeout(10)
    for _ in range(3):  # scénarios
        cas = page.query_selector_all("button.option:has(span.lettre)")
        if not cas or not clic(cas[0]): break
        page.wait_for_timeout(40)
        for _ in range(8):
            opts = [o for o in page.query_selector_all("[role=group] button.option") if o.is_enabled()]
            if not opts or not clic(opts[0]): break
            page.wait_for_timeout(30)
        clic(page.query_selector("button:has-text('Toutes les situations')")); page.wait_for_timeout(30)
    clic(page.query_selector("button:has-text('Le faire ici maintenant')")); page.wait_for_timeout(50)
    for c in page.query_selector_all(".carte-select")[:3]:
        clic(c); page.wait_for_timeout(15)
    for _ in range(6):  # reformulations
        champs = page.query_selector_all("input[id^='ref-']")
        if not champs: break
        for c in champs: c.fill("je ne sais jamais, mais je vais demander")
        if not clic(page.query_selector("button.btn.pilier.petit")): break
        page.wait_for_timeout(20)

def main():
    httpd = serveur()
    base = "http://127.0.0.1:%d/index.html" % PORT
    erreurs = []
    with sync_playwright() as p:
        try:
            nav = p.chromium.launch()
        except Exception:
            nav = p.chromium.launch(channel="chrome")
        for fil in ["", "ciel", "securite"]:
            nom = fil or "sans filière"
            ctx = nav.new_context(viewport={"width": 420, "height": 900}, service_workers="block")
            page = ctx.new_page()
            page.on("pageerror", lambda e, n=nom: erreurs.append("%s · erreur JavaScript : %s" % (n, e)))
            page.goto(base)
            page.evaluate("f => { localStorage.clear(); if (f) localStorage.setItem('capauto:filiere', JSON.stringify(f)); }", fil)
            ids = page.evaluate("CAP_SEANCES.filter(s => CAP_PILIERS.some(p => p.id === s.pilier && p.actif)).map(s => s.id)")
            for sid in ids:
                page.goto(base + "#/seance/" + sid); page.wait_for_timeout(80)
                if not page.query_selector("h1.titre-page"): erreurs.append("%s · la séance %s ne s'affiche pas" % (nom, sid))
                jouer(page)
                page.goto(base + "#/fiche/" + sid); page.wait_for_timeout(40)
            page.goto(base + "#/outils"); page.wait_for_timeout(100)
            for vue in ["Par situation", "Par niveau", "Par pilier"]:
                clic(page.query_selector("button.puce:has-text('%s')" % vue)); page.wait_for_timeout(60)
                for b in page.query_selector_all("[aria-label='Situations'] button"):
                    clic(b); page.wait_for_timeout(30)
            liens = page.evaluate("""CAP_SEANCES.filter(s => CAP_PILIERS.some(p => p.id === s.pilier && p.actif))
              .flatMap(s => (s.activites || []).concat(s.traces || [])).filter(a => a.outil).map(a => '#/outil/' + a.outil.id)""")
            for o in sorted(set(liens)):
                page.goto(base + o); page.wait_for_timeout(50)
                if not page.query_selector("h1.titre-page"): erreurs.append("%s · l'outil %s ne s'affiche pas" % (nom, o))
            for route in ["#/", "#/espace", "#/aide"] + ["#/pilier/%s/%s" % (pi, ni) for pi in page.evaluate("CAP_PILIERS.filter(p=>p.actif).map(p=>p.id)") for ni in ["2nde", "1re", "tle"]]:
                page.goto(base + route); page.wait_for_timeout(40)
            print("%s : %d séances, %d outils" % (nom, len(ids), len(set(liens))))
            ctx.close()
        nav.close()
    httpd.shutdown()
    for e in erreurs: print("  ERREUR : " + e)
    print("%d erreur(s)." % len(erreurs) if erreurs else "Aucune erreur.")
    sys.exit(1 if erreurs else 0)

if __name__ == "__main__":
    main()
