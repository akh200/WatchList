(function () {

    "use strict";


    /* =========================================
       STORAGE
    ========================================= */

    var STORAGE_KEY =
        "watchlist-progress";


    var state = {};


    try {

        state =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                ) || "{}"
            );

    } catch (error) {

        state = {};

    }


    /* =========================================
       GET UNIVERSE ID
    ========================================= */

    var params =
        new URLSearchParams(
            window.location.search
        );


    /*
     * Supports BOTH:
     *
     * universe.html?id=marvel
     *
     * and
     *
     * universe.html?universe=marvel
     */

    var universeId =
        params.get("id") ||
        params.get("universe") ||
        localStorage.getItem(
            "selected-universe"
        );


    /* =========================================
       FIND UNIVERSE
    ========================================= */

    var universe =
        UNIVERSES.find(
            function (item) {

                return (
                    item.id ===
                    universeId
                );

            }
        );


    /* =========================================
       IF NOT FOUND
    ========================================= */

    if (!universe) {

        document.body.innerHTML = `

            <div style="
                min-height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#080808;
                color:white;
                font-family:Arial;
                text-align:center;
                padding:30px;
            ">

                <div>

                    <h1>
                        Universe Not Found
                    </h1>

                    <p style="
                        margin-top:15px;
                        color:#aaa;
                    ">

                        Could not find:
                        <strong>
                            ${universeId || "unknown"}
                        </strong>

                    </p>

                    <button
                        onclick="
                            window.location.href='index.html'
                        "
                        style="
                            margin-top:25px;
                            padding:12px 20px;
                            border:0;
                            border-radius:20px;
                            cursor:pointer;
                        "
                    >

                        ← Back to Profiles

                    </button>

                </div>

            </div>

        `;

        return;

    }


    /* =========================================
       ELEMENTS
    ========================================= */

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


    /* =========================================
       COLORS
    ========================================= */

    page.style.setProperty(
        "--accent",
        universe.accent ||
        "#e50914"
    );


    page.style.setProperty(
        "--accent2",
        universe.accent2 ||
        "#ff9900"
    );


    /* =========================================
       HEADER
    ========================================= */

    title.textContent =
        universe.name;


    tagline.textContent =
        universe.tagline ||
        "Your cinematic universe.";


    /* =========================================
       BACK BUTTON
    ========================================= */

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "index.html";

        }
    );


    /* =========================================
       ALL ITEMS
    ========================================= */

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


    /* =========================================
       STATUS
    ========================================= */

    function getStatus(item) {

        return (
            state[item.id] ||
            "not-watched"
        );

    }


    function setStatus(
        item,
        status
    ) {

        state[item.id] =
            status;


        saveState();

    }


    function saveState() {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(
                state
            )

        );

    }


    /* =========================================
       RATING
    ========================================= */

    function getRating(item) {

        return Number(
            state[
                item.id +
                "-rating"
            ] || 0
        );

    }


    function setRating(
        item,
        rating
    ) {

        state[
            item.id +
            "-rating"
        ] =
            rating;


        saveState();

    }


    /* =========================================
       PROGRESS
    ========================================= */

    function updateProgress() {

        var items =
            getAllItems();


        var watched =
            items.filter(
                function (item) {

                    return (
                        getStatus(item)
                        ===
                        "watched"
                    );

                }
            ).length;


        var halfway =
            items.filter(
                function (item) {

                    return (
                        getStatus(item)
                        ===
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
            ?
            Math.round(
                watched /
                total *
                100
            )
            :
            0;


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
       RATING STARS
    ========================================= */

    function createStars(
        item,
        container
    ) {

        container.innerHTML =
            "";


        var rating =
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
                i <= rating
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
                            event
                                .currentTarget
                                .dataset
                                .rating
                        );


                    setRating(
                        item,
                        value
                    );


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
       CREATE MOVIE CARD
    ========================================= */

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
            String(number);


        /* INFO */

        var info =
            document.createElement(
                "div"
            );


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
                item.year;


            heading.appendChild(
                year
            );

        }


        var description =
            document.createElement(
                "p"
            );


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


        var stars =
            document.createElement(
                "div"
            );


        createStars(
            item,
            stars
        );


        ratingWrapper.appendChild(
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

                openTrailer(
                    item
                );

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


        function refreshStatus() {

            var current =
                getStatus(item);


            status.classList.remove(
                "status-watched",
                "status-halfway",
                "status-not-watched"
            );


            if (
                current ===
                "watched"
            ) {

                status.textContent =
                    "✓ Watched";


                status.classList.add(
                    "status-watched"
                );

            }

            else if (
                current ===
                "halfway"
            ) {

                status.textContent =
                    "◐ Halfway";


                status.classList.add(
                    "status-halfway"
                );

            }

            else {

                status.textContent =
                    "○ Not Watched";


                status.classList.add(
                    "status-not-watched"
                );

            }

        }


        refreshStatus();


        status.addEventListener(
            "click",
            function () {

                var current =
                    getStatus(item);


                var next;


                if (
                    current ===
                    "not-watched"
                ) {

                    next =
                        "halfway";

                }

                else if (
                    current ===
                    "halfway"
                ) {

                    next =
                        "watched";

                }

                else {

                    next =
                        "not-watched";

                }


                setStatus(
                    item,
                    next
                );


                refreshStatus();

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
       FILTER
    ========================================= */

    var currentFilter =
        "all";


    function render() {

        movieGroups.innerHTML =
            "";


        var number =
            1;


        universe.groups.forEach(
            function (group) {

                var groupItems =
                    group.items.filter(
                        function (item) {

                            if (
                                currentFilter
                                ===
                                "all"
                            ) {

                                return true;

                            }


                            return (
                                getStatus(item)
                                ===
                                currentFilter
                            );

                        }
                    );


                /*
                 * Don't display an empty
                 * group when filtering.
                 */

                if (
                    groupItems.length === 0
                ) {

                    return;

                }


                var groupElement =
                    document.createElement(
                        "section"
                    );


                groupElement.className =
                    "movie-group";


                var heading =
                    document.createElement(
                        "h2"
                    );


                heading.className =
                    "movie-group-title";


                heading.textContent =
                    group.title;


                var list =
                    document.createElement(
                        "div"
                    );


                list.className =
                    "movie-list";


                groupItems.forEach(
                    function (item) {

                        var card =
                            createMovieCard(
                                item,
                                number
                            );


                        list.appendChild(
                            card
                        );


                        number++;

                    }
                );


                groupElement.appendChild(
                    heading
                );


                groupElement.appendChild(
                    list
                );


                movieGroups.appendChild(
                    groupElement
                );

            }
        );


        updateProgress();

    }


    /* =========================================
       FILTER BUTTONS
    ========================================= */

    document
        .querySelectorAll(
            ".filter"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".filter"
                            )
                            .forEach(
                                function (btn) {

                                    btn.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        button.classList.add(
                            "active"
                        );


                        currentFilter =
                            button.dataset.filter;


                        render();

                    }
                );

            }
        );


    /* =========================================
       START
    ========================================= */

    render();


})();