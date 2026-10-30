/*
 * Stockage local : tout reste sur l'appareil de l'élève.
 * Aucune donnée n'est envoyée sur internet.
 */
(function () {
  var PREFIX = "capauto:";
  var memoire = {}; // secours si le navigateur bloque le stockage

  function ok() {
    try {
      var k = PREFIX + "__test";
      localStorage.setItem(k, "1");
      localStorage.removeItem(k);
      return true;
    } catch (e) { return false; }
  }
  var disponible = ok();

  var Store = {
    disponible: disponible,
    get: function (cle, defaut) {
      try {
        var v = disponible ? localStorage.getItem(PREFIX + cle) : memoire[cle];
        return v == null ? defaut : JSON.parse(v);
      } catch (e) { return defaut; }
    },
    set: function (cle, valeur) {
      var s = JSON.stringify(valeur);
      try {
        if (disponible) localStorage.setItem(PREFIX + cle, s);
        else memoire[cle] = s;
      } catch (e) { memoire[cle] = s; }
    },
    remove: function (cle) {
      try { if (disponible) localStorage.removeItem(PREFIX + cle); } catch (e) {}
      delete memoire[cle];
    },
    cles: function () {
      var out = [];
      try {
        if (disponible) {
          for (var i = 0; i < localStorage.length; i++) {
            var k = localStorage.key(i);
            if (k && k.indexOf(PREFIX) === 0) out.push(k.slice(PREFIX.length));
          }
        } else out = Object.keys(memoire);
      } catch (e) {}
      return out;
    },
    exporter: function () {
      var data = {};
      Store.cles().forEach(function (k) { data[k] = Store.get(k); });
      return { application: "Cap'Autonomie", version: 1, date: new Date().toISOString(), donnees: data };
    },
    importer: function (obj) {
      if (!obj || obj.application !== "Cap'Autonomie" || !obj.donnees) throw new Error("Fichier non reconnu");
      Object.keys(obj.donnees).forEach(function (k) { Store.set(k, obj.donnees[k]); });
    },
    toutEffacer: function () {
      Store.cles().forEach(function (k) { Store.remove(k); });
    }
  };
  window.Store = Store;
})();
