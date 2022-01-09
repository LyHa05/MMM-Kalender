Module.register("MMM-Kalender",
  {
    // Default module config.
    defaults: {
      updateInterval: 0, // aktuelle Daten vom Kalender abrufen
      headline: "Küchenkalender"

    },
    // Override dom generator.
    getDom: function() {
      var wrapper = document.createElement("div");
      wrapper.innerHTML = this.config.text;
      return wrapper;
    },

    getStyles: function () {
      return ['css/MMM-Kalender.css',];
    },

    getScripts: function () {
      return [];
    },



  }
)
