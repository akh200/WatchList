(function () {

  "use strict";

  const profilesEl = document.getElementById("profiles");
  const overallPctEl = document.getElementById("overallPct");
  const overallCountEl = document.getElementById("overallCount");
  const profileCountEl = document.getElementById("profileCount");

  const STORAGE_KEY = "watchlist-progress";

  let state = {};

  try {
    state = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );
  } catch (error) {
    state = {};
  }


  function allItems() {

    return UNIVERSES.flatMap(function (universe) {

      return universe.groups.flatMap(function (group) {

        return group.items;

      });

    });

  }


  function getUniverseProgress(universe) {

    const items = universe.groups.flatMap(function (group) {

      return group.items;

    });


    const watched = items.filter(function (item) {

      return state[item.id] === "watched";

    }).length;


    const halfway = items.filter(function (item) {

      return state[item.id] === "halfway";

    }).length;


    const total = items.length;


    const percentage = total
      ? Math.round((watched / total) * 100)
      : 0;


    return {
      watched: watched,
      halfway: halfway,
      total: total,
      percentage: percentage
    };

  }


  const ICONS = {

    bolt:
      '<svg viewBox="0 0 24 24">' +
      '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>' +
      '</svg>',

    shield:
      '<svg viewBox="0 0 24 24">' +
      '<path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"/>' +
      '</svg>',

    wand:
      '<svg viewBox="0 0 24 24">' +
      '<path d="M3 21 15 9" stroke="currentColor" stroke-width="1.8"/>' +
      '<path d="M17 3l1.5 3.5L22 8l-3.5 1.5L17 13l-1.5-3.5L12 8l3.5-1.5L17 3Z"/>' +
      '</svg>',

    star:
      '<svg viewBox="0 0 24 24">' +
      '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/>' +
      '</svg>'

  };


  function createProfile(universe) {

    const progress = getUniverseProgress(universe);

    const card = document.createElement("button");

    card.className = "profile-card";

    card.type = "button";

    card.style.setProperty(
      "--accent",
      universe.accent
    );

    card.style.setProperty(
      "--accent-2",
      universe.accent2
    );


    card.addEventListener("click", function () {

      localStorage.setItem(
        "selected-universe",
        universe.id
      );

      window.location.href = "universe.html";

    });


    const icon =
      ICONS[universe.icon] || ICONS.star;


    let halfwayText = "";

    if (progress.halfway > 0) {

      halfwayText =
        "<span>" +
        progress.halfway +
        " halfway</span>";

    }


    card.innerHTML =

      '<div class="profile-background"></div>' +

      '<div class="profile-content">' +

        '<div class="profile-icon">' +
          icon +
        '</div>' +

        '<div class="profile-info">' +

          '<h3>' +
            universe.name +
          '</h3>' +

          '<p>' +
            universe.tagline +
          '</p>' +

        '</div>' +

        '<div class="profile-stats">' +

          '<div class="profile-progress">' +

            '<div class="profile-progress-fill" ' +
              'style="width:' +
              progress.percentage +
              '%">' +
            '</div>' +

          '</div>' +

          '<div class="profile-numbers">' +

            '<span>' +
              progress.watched +
              "/" +
              progress.total +
              " watched" +
            '</span>' +

            halfwayText +

          '</div>' +

        '</div>' +

        '<div class="profile-arrow">→</div>' +

      '</div>';


    return card;

  }


  function renderProfiles() {

    profilesEl.innerHTML = "";


    UNIVERSES.forEach(function (universe) {

      profilesEl.appendChild(
        createProfile(universe)
      );

    });


    profileCountEl.textContent =
      UNIVERSES.length + " universes";

  }


  function updateOverallProgress() {

    const items = allItems();


    const watched = items.filter(function (item) {

      return state[item.id] === "watched";

    }).length;


    const total = items.length;


    const percentage = total
      ? Math.round((watched / total) * 100)
      : 0;


    overallPctEl.textContent =
      percentage + "%";


    overallCountEl.textContent =
      watched + " / " + total;

  }


  document
    .getElementById("resetAll")
    .addEventListener("click", function () {

      const confirmed =
        window.confirm(
          "Reset all WatchList progress?"
        );


      if (!confirmed) {
        return;
      }


      state = {};


      localStorage.removeItem(
        STORAGE_KEY
      );


      renderProfiles();

      updateOverallProgress();

    });


  renderProfiles();

  updateOverallProgress();

})();