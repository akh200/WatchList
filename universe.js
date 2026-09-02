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


  /* -----------------------------------------
     LOAD SAVED PROGRESS
  ----------------------------------------- */

  var state = {};

  try {

    state = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

  } catch (error) {

    state = {};

  }


  /* -----------------------------------------
     ELEMENTS
  ----------------------------------------- */

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


  /* -----------------------------------------
     THEME
  ----------------------------------------- */

  page.style.setProperty(
    "--accent",
    universe.accent
  );

  page.style.setProperty(
    "--accent-2",
    universe.accent2
  );


  /* -----------------------------------------
     HEADER
  ----------------------------------------- */

  title.textContent =
    universe.name;

  tagline.textContent =
    universe.tagline;


  /* -----------------------------------------
     ALL MOVIES
  ----------------------------------------- */

  function getAllItems() {

    return universe.groups.flatMap(
      function (group) {
        return group.items;
      }
    );

  }


  /* -----------------------------------------
     SAVE
  ----------------------------------------- */

  function saveState() {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  }


  /* -----------------------------------------
     PROGRESS
  ----------------------------------------- */

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


    var percentage =
      total
        ? Math.round((watched / total) * 100)
        : 0;


    progressFill.style.width =
      percentage + "%";


    progressText.textContent =
      watched +
      " watched · " +
      halfway +
      " halfway · " +
      (total - watched - halfway) +
      " remaining";

  }


  /* -----------------------------------------
     STATUS
  ----------------------------------------- */

  function getStatus(item) {

    return state[item.id] || "not-watched";

  }


  function getStatusText(status) {

    if (status === "watched") {
      return "Watched";
    }

    if (status === "halfway") {
      return "Halfway";
    }

    return "Not Watched";

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


  /* -----------------------------------------
     RATING
  ----------------------------------------- */

  function getRating(item) {

    return state[item.id + "-rating"] || 0;

  }


  function createStars(item, ratingContainer) {

    ratingContainer.innerHTML = "";

    var currentRating =
      getRating(item);


    for (var i = 1; i <= 5; i++) {

      var star =
        document.createElement("button");

      star.type = "button";

      star.className =
        "rating-star";

      star.textContent =
        i <= currentRating
          ? "★"
          : "☆";


      star.title =
        "Rate " + i + " out of 5";


      star.addEventListener(
        "click",
        function (event) {

          var value =
            Number(
              event.currentTarget.dataset.rating
            );


          state[item.id + "-rating"] =
            value;


          saveState();

          createStars(
            item,
            ratingContainer
          );

        }
      );


      star.dataset.rating =
        String(i);


      ratingContainer.appendChild(
        star
      );

    }

  }


  /* -----------------------------------------
     TRAILER
  ----------------------------------------- */

  function openTrailer(item) {

    var query =
      encodeURIComponent(
        item.title + " official trailer"
      );


    var url =
      "https://www.youtube.com/results?search_query=" +
      query;


    window.open(
      url,
      "_blank"
    );

  }


  /* -----------------------------------------
     CREATE MOVIE CARD
  ----------------------------------------- */

  function createMovieCard(
    item,
    number
  ) {

    var card =
      document.createElement("article");


    card.className =
      "movie-card";


    var numberEl =
      document.createElement("div");

    numberEl.className =
      "movie-number";

    numberEl.textContent =
      number;


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


    var year =
      document.createElement("span");

    year.className =
      "movie-year";

    year.textContent =
      item.year;


    heading.appendChild(
      year
    );


    var description =
      document.createElement("p");

    description.className =
      "movie-description";


    if (item.description) {

      description.textContent =
        item.description;

    } else {

      description.textContent =
        "Description coming soon.";

    }


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


    /* STATUS */

    var status =
      document.createElement("button");

    status.type =
      "button";

    status.className =
      "status-button";


    function updateStatusButton() {

      var current =
        getStatus(item);


      status.textContent =
        getStatusText(current);


      status.classList.remove(
        "status-watched",
        "status-halfway",
        "status-not-watched"
      );


      if (current === "watched") {

        status.classList.add(
          "status-watched"
        );

      } else if (current === "halfway") {

        status.classList.add(
          "status-halfway"
        );

      } else {

        status.classList.add(
          "status-not-watched"
        );

      }

    }


    updateStatusButton();


    status.addEventListener(
      "click",
      function () {

        var current =
          getStatus(item);


        state[item.id] =
          getNextStatus(current);


        saveState();

        updateStatusButton();

        updateProgress();

        updateProfileProgress();

      }
    );


    /* TRAILER */

    var trailer =
      document.createElement("button");

    trailer.type =
      "button";

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


  /* -----------------------------------------
     RENDER GROUPS
  ----------------------------------------- */

  function renderGroups() {

    movieGroups.innerHTML = "";

    var movieNumber = 1;


    universe.groups.forEach(
      function (group) {

        var groupEl =
          document.createElement("section");


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


  /* -----------------------------------------
     UPDATE PROFILE PROGRESS
  ----------------------------------------- */

  function updateProfileProgress() {

    /*
     * The homepage reads the same localStorage,
     * so simply saving the state is enough.
     */

  }


  /* -----------------------------------------
     BACK BUTTON
  ----------------------------------------- */

  backButton.addEventListener(
    "click",
    function () {

      window.location.href =
        "index.html";

    }
  );


  /* -----------------------------------------
     START
  ----------------------------------------- */

  renderGroups();

  updateProgress();

})();