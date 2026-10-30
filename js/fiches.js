/*
 * FICHES RESSOURCES imprimables (une par séance) et ROUE DES ÉMOTIONS.
 * Une fiche est décrite dans les données par une liste de « blocs » :
 *   { type: "texte",   titre, texte }
 *   { type: "liste",   titre, items: [...] }
 *   { type: "etapes",  titre, items: [...] }            -> étapes numérotées reliées par des flèches
 *   { type: "tableau", titre, colonnes: [...], lignes: [[...], ...] }
 *   { type: "roue",    titre, emotions: [{ nom, couleur, clair, nuances: [faible, moyen, fort] }] }
 */
(function () {
  var NS = "http://www.w3.org/2000/svg";
  function s(tag, attrs, texte) {
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    if (texte != null) el.textContent = texte;
    return el;
  }
  function polaire(cx, cy, r, deg) {
    var a = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }
  function secteur(cx, cy, r1, r2, a1, a2) {
    var p1 = polaire(cx, cy, r2, a1), p2 = polaire(cx, cy, r2, a2), p3 = polaire(cx, cy, r1, a2), p4 = polaire(cx, cy, r1, a1);
    var grand = a2 - a1 > 180 ? 1 : 0;
    return "M" + p1[0] + " " + p1[1] + " A" + r2 + " " + r2 + " 0 " + grand + " 1 " + p2[0] + " " + p2[1] +
      " L" + p3[0] + " " + p3[1] + " A" + r1 + " " + r1 + " 0 " + grand + " 0 " + p4[0] + " " + p4[1] + " Z";
  }
  // Texte placé le long du rayon, toujours lisible (jamais à l'envers)
  function texteRadial(g, cx, cy, r, deg, contenu, taille, gras) {
    var p = polaire(cx, cy, r, deg);
    var rot = deg - 90, gauche = deg > 180;
    if (gauche) rot += 180;
    g.appendChild(s("text", {
      x: p[0], y: p[1], "text-anchor": "middle", "dominant-baseline": "central",
      transform: "rotate(" + rot + " " + p[0] + " " + p[1] + ")",
      "font-size": taille, "font-weight": gras ? "700" : "400", fill: "#1B1F24",
      "font-family": "Atkinson Hyperlegible, system-ui, sans-serif"
    }, contenu));
  }

  function roue(bloc) {
    var W = 640, c = W / 2;
    var svg = s("svg", { viewBox: "0 0 " + W + " " + W, role: "img", "aria-label": "Roue des émotions : " +
      bloc.emotions.map(function (e) { return e.nom + " (" + e.nuances.join(", ") + ")"; }).join(" ; "), class: "roue" });
    var n = bloc.emotions.length, part = 360 / n;
    var R0 = 58, R1 = 166, R2 = 314;
    var g = s("g", {});
    bloc.emotions.forEach(function (e, i) {
      var a1 = i * part, a2 = a1 + part;
      // anneau central : l'émotion de base
      g.appendChild(s("path", { d: secteur(c, c, R0, R1, a1, a2), fill: e.couleur, stroke: "#FFFFFF", "stroke-width": 3 }));
      texteRadial(g, c, c, (R0 + R1) / 2, a1 + part / 2, e.nom, 19, true);
      // anneau extérieur : trois nuances, de la plus faible (près du centre) à la plus forte (au bord)
      var sous = part / 3;
      e.nuances.forEach(function (mot, j) {
        var b1 = a1 + j * sous, b2 = b1 + sous;
        var opacite = [0.45, 0.7, 1][j];
        g.appendChild(s("path", { d: secteur(c, c, R1, R2, b1, b2), fill: e.clair, "fill-opacity": opacite, stroke: "#FFFFFF", "stroke-width": 2 }));
        texteRadial(g, c, c, (R1 + R2) / 2 + 6, b1 + sous / 2, mot, 21, false);
      });
    });
    g.appendChild(s("circle", { cx: c, cy: c, r: R0, fill: "#FFFFFF", stroke: "#CFCFC8", "stroke-width": 2 }));
    g.appendChild(s("text", { x: c, y: c - 9, "text-anchor": "middle", "font-size": 15, "font-weight": "700", fill: "#1B1F24", "font-family": "Atkinson Hyperlegible, system-ui, sans-serif" }, "Ce que"));
    g.appendChild(s("text", { x: c, y: c + 11, "text-anchor": "middle", "font-size": 15, "font-weight": "700", fill: "#1B1F24", "font-family": "Atkinson Hyperlegible, system-ui, sans-serif" }, "je ressens"));
    svg.appendChild(g);
    return h("figure", { class: "roue-fig" }, svg,
      h("figcaption", { class: "note", text: "Au centre, l'émotion de base. Autour, ses nuances : plus la couleur est foncée, plus l'émotion est forte." }));
  }

  function rendreBloc(b) {
    var titre = b.titre ? h("h3", { class: "fiche-titre", text: b.titre }) : null;
    if (b.type === "texte") return h("div", { class: "fiche-bloc" }, titre, h("p", { text: b.texte }));
    if (b.type === "liste") return h("div", { class: "fiche-bloc" }, titre,
      h("ul", { class: "fiche-liste" }, b.items.map(function (x) { return h("li", { text: x }); })));
    if (b.type === "etapes") return h("div", { class: "fiche-bloc" }, titre,
      h("ol", { class: "fiche-etapes" }, b.items.map(function (x, i) {
        return h("li", null, h("span", { class: "ordre-rang", text: String(i + 1) }), h("span", { text: x }));
      })));
    if (b.type === "tableau") return h("div", { class: "fiche-bloc" }, titre,
      h("div", { class: "tableau-defile" },
        h("table", { class: "fiche-table" },
          h("thead", null, h("tr", null, b.colonnes.map(function (c) { return h("th", { scope: "col", text: c }); }))),
          h("tbody", null, b.lignes.map(function (l) {
            return h("tr", null, l.map(function (c, k) { return k === 0 ? h("th", { scope: "row", text: c }) : h("td", { text: c, "data-label": b.colonnes[k] }); }));
          })))));
    if (b.type === "roue") return h("div", { class: "fiche-bloc" }, titre, roue(b));
    return null;
  }

  function fiche(f) {
    var corps = h("div", { class: "fiche-corps-ressource" });
    if (f.intro) corps.appendChild(h("p", { class: "texte-doux", text: f.intro }));
    f.blocs.forEach(function (b) { var r = rendreBloc(b); if (r) corps.appendChild(r); });
    return corps;
  }

  window.Fiches = { fiche: fiche };
})();
