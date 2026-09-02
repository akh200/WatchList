(function () {

    "use strict";

    /*
    ============================================================
    WATCHLIST - UNIVERSE PAGE
    ============================================================
    Reads the universe from:

        universe.html?universe=marvel

    Also supports:

        universe.html?id=marvel

    ============================================================
    */

    var STORAGE_KEY = "watchlist-progress";



    /* =========================================================
       GET UNIVERSE ID FROM URL
    ========================================================= */

    var params = new URLSearchParams(window.location.search);

    var universeId =
        params.get("universe") ||
        params.get("id");



    /* =========================================================
       FALLBACK TO LOCAL STORAGE
    ========================================================= */

    if (!universeId) {

        universeId =
            localStorage.getItem("selected-universe");

    }



    /* =========================================================
       FIND UNIVERSE
    ========================================================= */

    var universe =
        UNIVERSES.find(function (item) {

            return item.id === universeId;

        });



    /* =========================================================
       IF UNIVERSE DOES NOT EXIST
    ========================================================= */

    if (!universe) {

        document.body.innerHTML = `
        
            <div style="
                min-height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#080808;
                color:white;
                font-family:Arial,sans-serif;
                text-align:center;
                padding:30px;
            ">

                <div>

                    <h1 style="
                        font-size:42px;
                        margin-bottom:15px;
                    ">
                        Universe Not Found
                    </h1>

                    <p style="
                        color:#aaa;
                        margin-bottom:25px;
                    ">
                        The universe
                        <strong>${universeId || "unknown"}</strong>
                        could not be found in data.js.
                    </p>

                    <a
                        href="index.html"
                        style="
                            display:inline-block;
                            padding:12px 20px;
                            border-radius:12px;
                            background:#e50914;
                            color:white;
                            text-decoration:none;
                            font-weight:bold;
                        "
                    >
                        ← Back to Profiles
                    </a>

                </div>

            </div>

        `;

        return;

    }



    /* =========================================================
       SAVE SELECTED UNIVERSE
    ========================================================= */

    localStorage.setItem(
        "selected-universe",
        universe.id
    );



    /* =========================================================
       LOAD SAVED WATCH STATUS
    ========================================================= */

    var state = {};

    try {

        state =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "{}"
            );

    } catch (error) {

        state = {};

    }



    /* =========================================================
       ELEMENTS
    ========================================================= */

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



    /* =========================================================
       CHECK REQUIRED ELEMENTS
    ========================================================= */

    if (
        !page ||
        !title ||
        !tagline ||
        !progressFill ||
        !progressText ||
        !movieGroups
    ) {

        document.body.innerHTML = `
        
            <div style="
                padding:40px;
                font-family:Arial;
                color:white;
                background:#080808;
                min-height:100vh;
            ">

                <h1>WatchList Page Error</h1>

                <p>
                    universe.html is missing one or more
                    required elements.
                </p>

                <p>
                    Please replace universe.html with the
                    version I provided.
                </p>

            </div>

        `;

        return;

    }



    /* =========================================================
       COLORS
    ========================================================= */

    page.style.setProperty(
        "--accent",
        universe.accent || "#e50914"
    );

    page.style.setProperty(
        "--accent-2",
        universe.accent2 || "#ffb000"
    );



    /* =========================================================
       HEADER
    ========================================================= */

    title.textContent =
        universe.name;

    tagline.textContent =
        universe.tagline || "";



    /* =========================================================
       GET ALL ITEMS
    ========================================================= */

    function getAllItems() {

        var items = [];

        universe.groups.forEach(
            function (group) {

                if (!group.items) {
                    return;
                }

                group.items.forEach(
                    function (item) {

                        items.push(item);

                    }
                );

            }
        );

        return items;

    }



    /* =========================================================
       SAVE
    ========================================================= */

    function saveState() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    }



    /* =========================================================
       STATUS
    ========================================================= */

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



    /* =========================================================
       PROGRESS
    ========================================================= */

    function updateProgress() {

        var items =
            getAllItems();

        var watched =
            items.filter(
                function (item) {

                    return (
                        state[item.id] ===
                        "watched"
                    );

                }
            ).length;

        var halfway =
            items.filter(
                function (item) {

                    return (
                        state[item.id] ===
                        "halfway"
                    );

                }
            ).length;

        var total =
            items.length;

        var remaining =
            total -
            watched -
            halfway;

        var percentage =
            total
                ? Math.round(
                    (watched / total) * 100
                )
                : 0;


        progressText.textContent =
            watched +
            " watched · " +
            halfway +
            " halfway · " +
            remaining +
            " remaining";


        progressFill.style.width =
            percentage + "%";

    }



    /* =========================================================
       RATING
    ========================================================= */

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
                document.createElement(
                    "button"
                );

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
                        item.id +
                        "-rating"
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



    /* =========================================================
       TRAILER
    ========================================================= */

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



    /* =========================================================
       CREATE MOVIE CARD
    ========================================================= */

    function createMovieCard(
        item,
        number
    ) {

        var card =
            document.createElement(
                "article"
            );

        card.className =
            "movie-card";



        /* NUMBER */

        var numberEl =
            document.createElement(
                "div"
            );

        numberEl.className =
            "movie-number";

        numberEl.textContent =
            number;



        /* INFO */

        var info =
            document.createElement(
                "div"
            );

        info.className =
            "movie-info";



        /* TITLE */

        var heading =
            document.createElement(
                "h3"
            );

        heading.className =
            "movie-title";

        heading.textContent =
            item.title;


        if (item.year) {

            var year =
                document.createElement(
                    "span"
                );

            year.className =
                "movie-year";

            year.textContent =
                " " + item.year;

            heading.appendChild(
                year
            );

        }



        /* DESCRIPTION */

        var description =
            document.createElement(
                "p"
            );

        description.className =
            "movie-description";


        description.textContent =
            item.description ||
            "Description will be added.";



        info.appendChild(
            heading
        );

        info.appendChild(
            description
        );



        /* DETAILS */

        var details =
            document.createElement(
                "div"
            );

        details.className =
            "movie-details";



        /* RATING */

        var ratingWrapper =
            document.createElement(
                "div"
            );

        ratingWrapper.className =
            "rating-wrapper";


        var ratingLabel =
            document.createElement(
                "span"
            );

        ratingLabel.className =
            "rating-label";

        ratingLabel.textContent =
            "Your Rating";


        var stars =
            document.createElement(
                "div"
            );

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
            document.createElement(
                "button"
            );

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



        /* STATUS */

        var status =
            document.createElement(
                "button"
            );

        status.type =
            "button";

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
                current ===
                "watched"
            ) {

                status.classList.add(
                    "status-watched"
                );

            }

            else if (
                current ===
                "halfway"
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
                    getNextStatus(
                        current
                    );


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



    /* =========================================================
       RENDER
    ========================================================= */

    function render() {

        movieGroups.innerHTML =
            "";

        var movieNumber =
            1;


        universe.groups.forEach(
            function (group) {

                var groupSection =
                    document.createElement(
                        "section"
                    );

                groupSection.className =
                    "movie-group";


                var groupTitle =
                    document.createElement(
                        "h2"
                    );

                groupTitle.className =
                    "movie-group-title";

                groupTitle.textContent =
                    group.title;


                var list =
                    document.createElement(
                        "div"
                    );

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


                groupSection.appendChild(
                    groupTitle
                );

                groupSection.appendChild(
                    list
                );


                movieGroups.appendChild(
                    groupSection
                );

            }
        );


        updateProgress();

    }



    /* =========================================================
       BACK BUTTON
    ========================================================= */

    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "index.html";

            }
        );

    }



    /* =========================================================
       START
    ========================================================= */

    render();


})();