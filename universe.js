(function () {

  "use strict";

  var STORAGE_KEY = "watchlist-progress";

  var universeId =
    localStorage.getItem("selected-universe");

  var universe =
    UNIVERSES.find(function (item) {
      return item.id === universeId;
    });


  if (!universe) {

    window.location.href = "index.html";

    return;

  }


  /* =========================================
     LOAD SAVED DATA
  ========================================= */

  var state = {};

  try {

    state = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

  } catch (error) {

    state = {};

  }


  /* =========================================
     ELEMENTS
  ========================================= */

  var page =
    document.getElementById("universePage");

  var title =
    document.getElementById("universeTitle");

  var tagline =
    document.getElementById("universeTagline");

  var progressFill =
    document.getElementById("universeProgressFill");

  var progressText =
    document.getElementById("universeProgressText");

  var movieGroups =
    document.getElementById("movieGroups");

  var backButton =
    document.getElementById("backButton");


  /* =========================================
     COLORS
  ========================================= */

  page.style.setProperty(
    "--accent",
    universe.accent
  );

  page.style.setProperty(
    "--accent-2",
    universe.accent2
  );


  /* =========================================
     HEADER
  ========================================= */

  title.textContent =
    universe.name;

  tagline.textContent =
    universe.tagline;


  /* =========================================
     CURRENT ORDER
  ========================================= */

  var currentOrder = "release";


  /* =========================================
     GET ALL ITEMS
  ========================================= */

  function getAllItems() {

    var items = [];

    universe.groups.forEach(function (group) {

      group.items.forEach(function (item) {

        items.push(item);

      });

    });

    return items;

  }


  /* =========================================
     RELEASE ORDER
  ========================================= */

  function getReleaseGroups() {

    return universe.groups;

  }


  /* =========================================
     CHRONOLOGICAL ORDER
     
     For now this uses the year stored
     in data.js.

     Later we can create a proper MCU
     story timeline manually.
  ========================================= */

  function getChronologicalItems() {

    var items =
      getAllItems();


    items.sort(function (a, b) {

      var yearA =
        Number(a.year) || 9999;

      var yearB =
        Number(b.year) || 9999;


      return yearA - yearB;

    });


    return items;

  }


  /* =========================================
     SAVE
  ========================================= */

  function saveState() {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  }


  /* =========================================
     PROGRESS
  ========================================= */

  function updateProgress() {

    var items =
      getAllItems();


    var watched =
      items.filter(function (item) {

        return state[item.id] === "watched";

      }).length;


    var halfway =
      items.filter(function (item) {

        return state[item.id] === "halfway";

      }).length;


    var total =
      items.length;


    var remaining =
      total -
      watched -
      halfway;


    progressText.textContent =
      watched +
      " watched · " +
      halfway +
      " halfway · " +
      remaining +
      " remaining";


    var percentage =
      total
        ? Math.round(
            (watched / total) * 100
          )
        : 0;


    progressFill.style.width =
      percentage + "%";

  }


  /* =========================================
     STATUS
  ========================================= */

  function getStatus(item) {

    return (
      state[item.id] ||
      "not-watched"
    );

  }


  function getStatusText(status) {

    if (status === "watched") {

      return "✓ Watched";

    }


    if (status === "halfway") {

      return "◐ Halfway";

    }


    return "○ Not Watched";

  }


  function getNextStatus(status) {

    if (status === "not-watched") {

      return "halfway";

    }


    if (status === "halfway") {

      return "watched";

    }


    return "not-watched";

  }


  /* =========================================
     RATING
  ========================================= */

  function getRating(item) {

    return (
      state[item.id + "-rating"] ||
      0
    );

  }


  function createStars(
    item,
    container
  ) {

    container.innerHTML = "";


    var currentRating =
      getRating(item);


    for (
      var i = 1;
      i <= 5;
      i++
    ) {

      var star =
        document.createElement("button");


      star.type = "button";

      star.className =
        "rating-star";


      star.textContent =
        i <= currentRating
          ? "★"
          : "☆";


      star.dataset.rating =
        String(i);


      star.title =
        "Rate " +
        i +
        " out of 5";


      star.addEventListener(
        "click",
        function (event) {

          var value =
            Number(
              event.currentTarget
                .dataset
                .rating
            );


          state[
            item.id + "-rating"
          ] = value;


          saveState();


          createStars(
            item,
            container
          );

        }
      );


      container.appendChild(
        star
      );

    }

  }


  /* =========================================
     TRAILER
  ========================================= */

  function openTrailer(item) {

    var query =
      encodeURIComponent(
        item.title +
        " official trailer"
      );


    var url =
      "https://www.youtube.com/results?search_query=" +
      query;


    window.open(
      url,
      "_blank"
    );

  }


  /* =========================================
     CREATE MOVIE CARD
  ========================================= */

  function createMovieCard(
    item,
    number
  ) {

    var card =
      document.createElement("article");


    card.className =
      "movie-card";


    /* NUMBER */

    var numberEl =
      document.createElement("div");


    numberEl.className =
      "movie-number";


    numberEl.textContent =
      String(number);


    /* INFO */

    var info =
      document.createElement("div");


    info.className =
      "movie-info";


    var heading =
      document.createElement("h3");


    heading.className =
      "movie-title";


    heading.textContent =
      item.title;


    if (item.year) {

      var year =
        document.createElement("span");


      year.className =
        "movie-year";


      year.textContent =
        item.year;


      heading.appendChild(
        year
      );

    }


    var description =
      document.createElement("p");


    description.className =
      "movie-description";


    description.textContent =
      item.description ||
      "Description coming soon.";


    info.appendChild(
      heading
    );


    info.appendChild(
      description
    );


    /* DETAILS */

    var details =
      document.createElement("div");


    details.className =
      "movie-details";


    /* RATING */

    var ratingWrapper =
      document.createElement("div");


    ratingWrapper.className =
      "rating-wrapper";


    var ratingLabel =
      document.createElement("span");


    ratingLabel.className =
      "rating-label";


    ratingLabel.textContent =
      "Your Rating";


    var stars =
      document.createElement("div");


    stars.className =
      "rating-stars";


    ratingWrapper.appendChild(
      ratingLabel
    );


    ratingWrapper.appendChild(
      stars
    );


    createStars(
      item,
      stars
    );


    /* TRAILER */

    var trailer =
      document.createElement("button");


    trailer.type = "button";


    trailer.className =
      "trailer-button";


    trailer.textContent =
      "▶ Trailer";


    trailer.addEventListener(
      "click",
      function () {

        openTrailer(item);

      }
    );


    /* STATUS */

    var status =
      document.createElement("button");


    status.type = "button";


    status.className =
      "status-button";


    function updateStatus() {

      var current =
        getStatus(item);


      status.textContent =
        getStatusText(current);


      status.classList.remove(
        "status-watched",
        "status-halfway",
        "status-not-watched"
      );


      if (
        current === "watched"
      ) {

        status.classList.add(
          "status-watched"
        );

      }

      else if (
        current === "halfway"
      ) {

        status.classList.add(
          "status-halfway"
        );

      }

      else {

        status.classList.add(
          "status-not-watched"
        );

      }

    }


    updateStatus();


    status.addEventListener(
      "click",
      function () {

        var current =
          getStatus(item);


        state[item.id] =
          getNextStatus(current);


        saveState();


        updateStatus();

        updateProgress();

      }
    );


    details.appendChild(
      ratingWrapper
    );


    details.appendChild(
      trailer
    );


    details.appendChild(
      status
    );


    card.appendChild(
      numberEl
    );


    card.appendChild(
      info
    );


    card.appendChild(
      details
    );


    return card;

  }


  /* =========================================
     CREATE ORDER TOGGLE
  ========================================= */

  function createOrderToggle() {

    var existing =
      document.getElementById(
        "orderToggle"
      );


    if (existing) {

      existing.remove();

    }


    var sectionHeader =
      document.querySelector(
        ".movie-section-header"
      );


    if (!sectionHeader) {

      return;

    }


    var toggle =
      document.createElement("div");


    toggle.id =
      "orderToggle";


    toggle.className =
      "order-toggle";


    var releaseButton =
      document.createElement("button");


    releaseButton.type =
      "button";


    releaseButton.textContent =
      "🎬 Release Order";


    var chronologicalButton =
      document.createElement("button");


    chronologicalButton.type =
      "button";


    chronologicalButton.textContent =
      "🕐 Chronological";


    function updateToggle() {

      releaseButton.classList.toggle(
        "active",
        currentOrder === "release"
      );


      chronologicalButton.classList.toggle(
        "active",
        currentOrder === "chronological"
      );

    }


    releaseButton.addEventListener(
      "click",
      function () {

        currentOrder =
          "release";


        updateToggle();

        render();

      }
    );


    chronologicalButton.addEventListener(
      "click",
      function () {

        currentOrder =
          "chronological";


        updateToggle();

        render();

      }
    );


    toggle.appendChild(
      releaseButton
    );


    toggle.appendChild(
      chronologicalButton
    );


    sectionHeader.appendChild(
      toggle
    );


    updateToggle();

  }


  /* =========================================
     RENDER RELEASE ORDER
  ========================================= */

  function renderRelease() {

    movieGroups.innerHTML = "";


    var movieNumber = 1;


    getReleaseGroups().forEach(
      function (group) {

        var groupEl =
          document.createElement(
            "section"
          );


        groupEl.className =
          "movie-group";


        var heading =
          document.createElement("h2");


        heading.className =
          "movie-group-title";


        heading.textContent =
          group.title;


        var list =
          document.createElement("div");


        list.className =
          "movie-list";


        group.items.forEach(
          function (item) {

            var card =
              createMovieCard(
                item,
                movieNumber
              );


            list.appendChild(
              card
            );


            movieNumber++;

          }
        );


        groupEl.appendChild(
          heading
        );


        groupEl.appendChild(
          list
        );


        movieGroups.appendChild(
          groupEl
        );

      }
    );

  }


  /* =========================================
     RENDER CHRONOLOGICAL
  ========================================= */

  function renderChronological() {

    movieGroups.innerHTML = "";


    var items =
      getChronologicalItems();


    var list =
      document.createElement("div");


    list.className =
      "movie-list";


    items.forEach(
      function (item, index) {

        var card =
          createMovieCard(
            item,
            index + 1
          );


        list.appendChild(
          card
        );

      }
    );


    var heading =
      document.createElement("h2");


    heading.className =
      "movie-group-title";


    heading.textContent =
      "Story Timeline";


    movieGroups.appendChild(
      heading
    );


    movieGroups.appendChild(
      list
    );

  }


  /* =========================================
     RENDER
  ========================================= */

  function render() {

    if (
      currentOrder ===
      "chronological"
    ) {

      renderChronological();

    }

    else {

      renderRelease();

    }


    updateProgress();

  }


  /* =========================================
     BACK
  ========================================= */

  backButton.addEventListener(
    "click",
    function () {

      window.location.href =
        "index.html";

    }
  );


  /* =========================================
     INITIALIZE
  ========================================= */

  createOrderToggle();

  render();

})();