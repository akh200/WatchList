(function () {

    "use strict";

    /*
    ============================================================
    WATCHLIST - UNIVERSE PAGE
    ============================================================
    URL format:

        universe.html?universe=marvel

    Data comes from:

        data.js

    Expected structure:

        UNIVERSES
          └── universe
                ├── id
                ├── name
                ├── tagline
                ├── accent
                ├── accent2
                └── groups
                      └── items
    ============================================================
    */


    /* =========================================================
       STORAGE
    ========================================================= */

    var STORAGE_KEY = "watchlist-progress";


    var state = {};

    try {

        state = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "{}"
        );

    } catch (error) {

        state = {};

    }



    /* =========================================================
       GET UNIVERSE FROM URL
    ========================================================= */

    var params =
        new URLSearchParams(
            window.location.search
        );


    var universeId =
        params.get("universe") ||
        params.get("id") ||
        localStorage.getItem(
            "selected-universe"
        );



    /* =========================================================
       CHECK DATA.JS
    ========================================================= */

    if (
        typeof UNIVERSES === "undefined" ||
        !Array.isArray(UNIVERSES)
    ) {

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

                    <h1>
                        WatchList Data Error
                    </h1>

                    <p style="
                        color:#aaa;
                        margin-top:15px;
                    ">
                        data.js could not be loaded.
                    </p>

                    <p style="
                        color:#777;
                        margin-top:8px;
                    ">
                        Make sure data.js is in the same
                        folder as universe.html.
                    </p>

                </div>

            </div>

        `;

        return;

    }



    /* =========================================================
       FIND UNIVERSE
    ========================================================= */

    var universe =
        UNIVERSES.find(
            function (item) {

                return item.id === universeId;

            }
        );



    /* =========================================================
       UNIVERSE NOT FOUND
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
                        font-size:40px;
                        margin-bottom:15px;
                    ">
                        Universe Not Found
                    </h1>

                    <p style="
                        color:#aaa;
                        margin-bottom:25px;
                    ">
                        The universe
                        <strong>
                            ${universeId || "unknown"}
                        </strong>
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
       ELEMENTS
    ========================================================= */

    var page =
        document.getElementById(
            "universePage"
        );


    var title =
        document.getElementById(
            "universeTitle"
        );


    var tagline =
        document.getElementById(
            "universeTagline"
        );


    var progressFill =
        document.getElementById(
            "universeProgressFill"
        );


    var progressText =
        document.getElementById(
            "universeProgressText"
        );


    var movieGroups =
        document.getElementById(
            "movieGroups"
        );


    var backButton =
        document.getElementById(
            "backButton"
        );



    /* =========================================================
       ELEMENT CHECK
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
                min-height:100vh;
                padding:40px;
                background:#080808;
                color:white;
                font-family:Arial,sans-serif;
            ">

                <h1>
                    WatchList Page Error
                </h1>

                <p style="
                    color:#aaa;
                    margin-top:15px;
                ">
                    universe.html is missing one or more
                    required elements.
                </p>

            </div>

        `;

        return;

    }



    /* =========================================================
       THEME COLORS
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
        universe.name || "WatchList";


    tagline.textContent =
        universe.tagline || "";



    /* =========================================================
       GET ALL MOVIES / SHOWS
    ========================================================= */

    function getAllItems() {

        var items = [];


        if (
            !universe.groups ||
            !Array.isArray(universe.groups)
        ) {

            return items;

        }


        universe.groups.forEach(
            function (group) {

                if (
                    !group.items ||
                    !Array.isArray(group.items)
                ) {

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
       SAVE STATE
    ========================================================= */

    function saveState() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    }



    /* =========================================================
       GET STATUS
    ========================================================= */

    function getStatus(item) {

        return (
            state[item.id] ||
            "not-watched"
        );

    }



    /* =========================================================
       STATUS TEXT
    ========================================================= */

    function getStatusText(status) {

        if (
            status === "watched"
        ) {

            return "✓ Watched";

        }


        if (
            status === "halfway"
        ) {

            return "◐ Halfway";

        }


        return "○ Not Watched";

    }



    /* =========================================================
       NEXT STATUS
    ========================================================= */

    function getNextStatus(status) {

        if (
            status === "not-watched"
        ) {

            return "halfway";

        }


        if (
            status === "halfway"
        ) {

            return "watched";

        }


        return "not-watched";

    }



    /* =========================================================
       UPDATE PROGRESS
    ========================================================= */

    function updateProgress() {

        var items =
            getAllItems();


        var total =
            items.length;


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


        var remaining =
            total -
            watched -
            halfway;


        var percentage =
            total > 0
                ? Math.round(
                    (
                        watched /
                        total
                    ) * 100
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
            state[
                item.id +
                "-rating"
            ] || 0
        );

    }



    /* =========================================================
       CREATE RATING STARS
    ========================================================= */

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


            star.type =
                "button";


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

        /*
         * If a trailer URL exists in data.js,
         * use it.
         */

        if (
            item.trailer &&
            typeof item.trailer ===
            "string"
        ) {

            window.open(
                item.trailer,
                "_blank"
            );

            return;

        }


        /*
         * Otherwise search YouTube.
         */

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



        /* -----------------------------------------------------
           NUMBER
        ----------------------------------------------------- */

        var numberEl =
            document.createElement(
                "div"
            );


        numberEl.className =
            "movie-number";


        numberEl.textContent =
            number;



        /* -----------------------------------------------------
           INFO
        ----------------------------------------------------- */

        var info =
            document.createElement(
                "div"
            );


        info.className =
            "movie-info";



        /* -----------------------------------------------------
           TITLE
        ----------------------------------------------------- */

        var heading =
            document.createElement(
                "h3"
            );


        heading.className =
            "movie-title";


        heading.textContent =
            item.title ||
            "Untitled";



        /* YEAR */

        if (
            item.year
        ) {

            var year =
                document.createElement(
                    "span"
                );


            year.className =
                "movie-year";


            year.textContent =
                " " +
                item.year;


            heading.appendChild(
                year
            );

        }



        /* -----------------------------------------------------
           DESCRIPTION
        ----------------------------------------------------- */

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



        /* -----------------------------------------------------
           DETAILS
        ----------------------------------------------------- */

        var details =
            document.createElement(
                "div"
            );


        details.className =
            "movie-details";



        /* -----------------------------------------------------
           RATING
        ----------------------------------------------------- */

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



        /* -----------------------------------------------------
           TRAILER BUTTON
        ----------------------------------------------------- */

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



        /* -----------------------------------------------------
           STATUS BUTTON
        ----------------------------------------------------- */

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
                getStatusText(
                    current
                );


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



        /* -----------------------------------------------------
           ADD DETAILS
        ----------------------------------------------------- */

        details.appendChild(
            ratingWrapper
        );


        details.appendChild(
            trailer
        );


        details.appendChild(
            status
        );



        /* -----------------------------------------------------
           ADD CARD
        ----------------------------------------------------- */

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
       RENDER UNIVERSE
    ========================================================= */

    function render() {

        movieGroups.innerHTML =
            "";


        if (
            !universe.groups ||
            !Array.isArray(
                universe.groups
            )
        ) {

            movieGroups.innerHTML = `

                <div style="
                    padding:30px;
                    border-radius:20px;
                    background:rgba(255,255,255,.05);
                    color:#aaa;
                ">
                    No movies or shows have been
                    added to this universe yet.
                </div>

            `;

            updateProgress();

            return;

        }


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
                    group.title ||
                    "Watch Order";


                var list =
                    document.createElement(
                        "div"
                    );


                list.className =
                    "movie-list";


                if (
                    group.items &&
                    Array.isArray(
                        group.items
                    )
                ) {

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

                }


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

    if (
        backButton
    ) {

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