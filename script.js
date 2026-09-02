(function () {
    "use strict";

    /*
    ============================================================
       AKHIL & MANASA WATCHLIST
       HOMEPAGE CONTROLLER

       WORKFLOW:
       index.html
          ↓
       data.js
          ↓
       script.js
          ↓
       universe.html?universe=marvel
          ↓
       universe.js

       IMPORTANT:
       - Do NOT change data.js structure.
       - Do NOT remove the Home hero image from index.html.
       - Progress is stored separately for every universe.
    ============================================================
    */


    /* ============================================================
       PAGE ELEMENTS
    ============================================================ */

    const profiles =
        document.getElementById("profiles");

    const overallPercent =
        document.getElementById("overallPercent");

    const overallCount =
        document.getElementById("overallCount");

    const overallFill =
        document.getElementById("overallFill");

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");


    /* ============================================================
       GET UNIVERSES
    ============================================================ */

    function getUniverses() {

        if (
            typeof universes !== "undefined" &&
            Array.isArray(universes)
        ) {
            return universes;
        }

        if (
            Array.isArray(window.UNIVERSES)
        ) {
            return window.UNIVERSES;
        }

        if (
            Array.isArray(window.universes)
        ) {
            return window.universes;
        }

        return [];
    }


    /* ============================================================
       GET GROUPS
    ============================================================ */

    function getGroups(universe) {

        return (
            universe.groups ||
            universe.sections ||
            universe.categories ||
            []
        );

    }


    /* ============================================================
       GET ITEMS
    ============================================================ */

    function getItems(universe) {

        const groups =
            getGroups(universe);

        const items = [];

        if (!Array.isArray(groups)) {
            return items;
        }

        groups.forEach(function (group) {

            if (!group) {
                return;
            }

            if (
                Array.isArray(group.items)
            ) {

                items.push(
                    ...group.items
                );

            }

            else if (
                Array.isArray(group.movies)
            ) {

                items.push(
                    ...group.movies
                );

            }

            else if (
                Array.isArray(group.titles)
            ) {

                items.push(
                    ...group.titles
                );

            }

        });

        return items;
    }


    /* ============================================================
       SAFE JSON
    ============================================================ */

    function readJSON(key) {

        try {

            const value =
                localStorage.getItem(key);

            if (!value) {
                return {};
            }

            const parsed =
                JSON.parse(value);

            return (
                parsed &&
                typeof parsed === "object"
            )
                ? parsed
                : {};

        }

        catch (error) {

            return {};

        }

    }


    /* ============================================================
       NORMALISE ID
    ============================================================ */

    function normaliseId(value) {

        return String(
            value || ""
        )
            .trim()
            .toLowerCase();

    }


    /* ============================================================
       GET MOVIE STATUS

       Supports:

       CURRENT:
       watchlist-progress-marvel

       OLD:
       watchlist-status-MOVIE-ID

       OLDEST:
       watchlist-progress
    ============================================================ */

    function getStatus(movieId) {

        const wantedId =
            normaliseId(movieId);

        if (!wantedId) {
            return "not-watched";
        }


        const allUniverses =
            getUniverses();


        /*
        ------------------------------------------------------------
           CURRENT UNIVERSE STORAGE
        ------------------------------------------------------------
        */

        for (
            const universe of allUniverses
        ) {

            if (!universe) {
                continue;
            }

            const universeId =
                universe.id ||
                universe.key ||
                universe.slug;

            if (!universeId) {
                continue;
            }


            const storageKey =
                "watchlist-progress-" +
                universeId;


            const progress =
                readJSON(storageKey);


            /*
            Exact ID match first.
            */

            if (
                Object.prototype.hasOwnProperty.call(
                    progress,
                    movieId
                )
            ) {

                return progress[movieId];

            }


            /*
            Compatibility with case differences.
            */

            for (
                const key of Object.keys(progress)
            ) {

                if (
                    normaliseId(key) === wantedId
                ) {

                    return progress[key];

                }

            }

        }


        /*
        ------------------------------------------------------------
           OLD STORAGE
        ------------------------------------------------------------
        */

        const oldStatus =
            localStorage.getItem(
                "watchlist-status-" +
                movieId
            );


        if (oldStatus) {
            return oldStatus;
        }


        /*
        ------------------------------------------------------------
           OLDEST GLOBAL STORAGE
        ------------------------------------------------------------
        */

        const oldGlobal =
            readJSON(
                "watchlist-progress"
            );


        if (
            Object.prototype.hasOwnProperty.call(
                oldGlobal,
                movieId
            )
        ) {

            return oldGlobal[movieId];

        }


        return "not-watched";
    }


    /* ============================================================
       GET ALL ITEMS
    ============================================================ */

    function getAllItems() {

        const allUniverses =
            getUniverses();

        const allItems = [];

        allUniverses.forEach(
            function (universe) {

                allItems.push(
                    ...getItems(universe)
                );

            }
        );

        return allItems;
    }


    /* ============================================================
       ICONS
    ============================================================ */

    const icons = {

        marvel: "⚡",

        dc: "🦇",

        horror: "👻",

        hp: "🪄",

        wizard: "🪄",

        "wizard-world": "🪄",

        anime: "☯",

        starwars: "✦",

        "star-wars": "✦",

        startrek: "🚀",

        "star-trek": "🚀",

        transformers: "🤖",

        monsterverse: "🦖",

        "monster-verse": "🦖",

        missionimpossible: "🎯",

        "mission-impossible": "🎯",

        invincible: "★",

        jurassic: "🦕",

        pirates: "☠",

        narnia: "🦁",

        fastfurious: "🏎",

        "fast-furious": "🏎",

        johnwick: "♠",

        "john-wick": "♠",

        terminator: "🤖",

        avatar: "🌊",

        apes: "🦍",

        "planet-of-the-apes": "🦍",

        conjuring: "🕯",

        insidious: "🚪",

        scream: "🔪",

        bond: "007",

        "james-bond": "007",

        "sci-fi-fantasy": "✦"

    };


    /* ============================================================
       FALLBACK COLORS
    ============================================================ */

    const colors = [

        "#ef3340",
        "#2e86ff",
        "#b34cff",
        "#e7a91a",
        "#19c6d6",
        "#ff7a18",
        "#52d273",
        "#ff4fbd"

    ];


    /* ============================================================
       ESCAPE HTML
    ============================================================ */

    function escapeHTML(value) {

        return String(
            value ?? ""
        )

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* ============================================================
       GET ICON
    ============================================================ */

    function getIcon(universe) {

        const id =
            String(
                universe.id ||
                universe.key ||
                ""
            )
                .toLowerCase()
                .trim();


        return (
            universe.icon ||
            icons[id] ||
            "🎬"
        );

    }


    /* ============================================================
       COUNT ONE UNIVERSE
    ============================================================ */

    function countUniverse(universe) {

        const items =
            getItems(universe);

        let watched = 0;
        let halfway = 0;


        items.forEach(
            function (item) {

                if (!item) {
                    return;
                }


                const movieId =
                    item.id ||
                    item.key;


                if (!movieId) {
                    return;
                }


                const status =
                    getStatus(movieId);


                if (
                    status === "watched"
                ) {

                    watched++;

                }


                if (
                    status === "halfway"
                ) {

                    halfway++;

                }

            }
        );


        return {

            total:
                items.length,

            watched:
                watched,

            halfway:
                halfway

        };

    }


    /* ============================================================
       CREATE PROFILE CARD
    ============================================================ */

    function createProfileCard(
        universe,
        index
    ) {

        const counts =
            countUniverse(
                universe
            );


        const percentage =
            counts.total > 0

                ? Math.round(
                    (
                        counts.watched /
                        counts.total
                    ) * 100
                )

                : 0;


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "profile";


        card.dataset.universe =
            universe.id ||
            universe.key ||
            "";


        card.style.setProperty(
            "--accent",
            universe.accent ||
            colors[
            index %
            colors.length
            ]
        );


        card.style.setProperty(
            "--accent2",
            universe.accent2 ||
            colors[
            (index + 1) %
            colors.length
            ]
        );


        const icon =
            getIcon(
                universe
            );


        const name =
            universe.name ||
            universe.title ||
            universe.id ||
            "Universe";


        const description =
            universe.tagline ||
            universe.description ||
            "Your cinematic universe awaits.";


        card.innerHTML = `

            <div class="profile-bg"></div>

            <div class="profile-overlay"></div>

            <div class="profile-symbol">
                ${icon}
            </div>

            <div class="profile-content">

                <h2>
                    ${escapeHTML(name)}
                </h2>

                <p>
                    ${escapeHTML(description)}
                </p>

                <div class="profile-meta">

                    <span>
                        ${counts.total} titles
                    </span>

                    <strong>
                        ${percentage}%
                    </strong>

                </div>

                <div class="mini-bar">

                    <div
                        class="mini-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>

        `;


        /*
        ------------------------------------------------------------
           OPEN UNIVERSE
        ------------------------------------------------------------
        */

        card.addEventListener(
            "click",
            function (event) {

                /*
                Do not open the universe when
                the user was dragging the carousel.
                */

                if (
                    card.dataset.dragged === "true"
                ) {

                    card.dataset.dragged =
                        "false";

                    return;

                }


                const universeId =
                    universe.id ||
                    universe.key ||
                    universe.slug;


                localStorage.setItem(
                    "selected-universe",
                    universeId
                );


                window.location.href =
                    "universe.html?universe=" +
                    encodeURIComponent(
                        universeId
                    );

            }
        );


        return card;
    }


    /* ============================================================
       UPDATE HOMEPAGE OVERALL PROGRESS
    ============================================================ */

    function updateOverallProgress() {

        const items =
            getAllItems();


        let watched = 0;


        items.forEach(
            function (item) {

                if (!item) {
                    return;
                }


                const movieId =
                    item.id ||
                    item.key;


                if (!movieId) {
                    return;
                }


                const status =
                    getStatus(movieId);


                if (
                    status === "watched"
                ) {

                    watched++;

                }

            }
        );


        const total =
            items.length;


        const percentage =
            total > 0

                ? Math.round(
                    (
                        watched /
                        total
                    ) * 100
                )

                : 0;


        if (
            overallPercent
        ) {

            overallPercent.textContent =
                percentage +
                "%";

        }


        if (
            overallCount
        ) {

            overallCount.textContent =
                watched +
                " / " +
                total +
                " titles watched";

        }


        if (
            overallFill
        ) {

            overallFill.style.width =
                percentage +
                "%";

        }

    }


    /* ============================================================
       RENDER ALL PROFILES
    ============================================================ */

    function renderProfiles() {

        if (!profiles) {
            return;
        }


        profiles.innerHTML =
            "";


        const allUniverses =
            getUniverses();


        if (
            !allUniverses.length
        ) {

            profiles.innerHTML = `

                <div class="empty">

                    <strong>
                        No universes found
                    </strong>

                    <span>
                        Make sure data.js is beside
                        index.html.
                    </span>

                </div>

            `;

            updateOverallProgress();

            return;
        }


        /*
        IMPORTANT:
        Render EVERY universe.

        No slicing.
        No "first four".
        No fixed visible count.
        */

        allUniverses.forEach(
            function (
                universe,
                index
            ) {

                profiles.appendChild(

                    createProfileCard(
                        universe,
                        index
                    )

                );

            }
        );


        updateOverallProgress();

    }


    /* ============================================================
       CAROUSEL SCROLL AMOUNT
    ============================================================ */

    function getScrollAmount() {

        if (!profiles) {
            return 500;
        }


        const firstCard =
            profiles.querySelector(
                ".profile"
            );


        if (!firstCard) {
            return 500;
        }


        const style =
            window.getComputedStyle(
                profiles
            );


        const gap =
            parseFloat(
                style.gap ||
                style.columnGap ||
                "18"
            );


        /*
        Move exactly two cards.
        */

        return (
            firstCard.getBoundingClientRect().width +
            gap
        ) * 2;

    }


    /* ============================================================
       NEXT BUTTON
    ============================================================ */

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                if (!profiles) {
                    return;
                }


                profiles.scrollBy({

                    left:
                        getScrollAmount(),

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* ============================================================
       PREVIOUS BUTTON
    ============================================================ */

    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            function () {

                if (!profiles) {
                    return;
                }


                profiles.scrollBy({

                    left:
                        -getScrollAmount(),

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* ============================================================
       DRAG / SWIPE CAROUSEL
    ============================================================ */

    let isDragging = false;

    let dragStartX = 0;

    let dragStartScroll = 0;

    let dragDistance = 0;


    if (profiles) {

        profiles.addEventListener(
            "pointerdown",
            function (event) {

                /*
                Only left mouse button on desktop.
                Touch / pen is always allowed.
                */

                if (
                    event.pointerType === "mouse" &&
                    event.button !== 0
                ) {

                    return;

                }


                isDragging = true;

                dragStartX =
                    event.clientX;

                dragStartScroll =
                    profiles.scrollLeft;

                dragDistance = 0;


                profiles.classList.add(
                    "dragging"
                );


                /*
                THIS IS IMPORTANT.

                Capture the pointer so dragging
                continues even when the cursor
                moves over a card.
                */

                try {

                    profiles.setPointerCapture(
                        event.pointerId
                    );

                }

                catch (error) {
                    /* Ignore */
                }


                event.preventDefault();

            }
        );


        profiles.addEventListener(
            "pointermove",
            function (event) {

                if (!isDragging) {
                    return;
                }


                const distance =
                    event.clientX -
                    dragStartX;


                dragDistance =
                    Math.abs(distance);


                profiles.scrollLeft =
                    dragStartScroll -
                    distance;


                if (
                    dragDistance > 8
                ) {

                    /*
                    Mark cards so a drag does
                    not accidentally open a universe.
                    */

                    profiles
                        .querySelectorAll(
                            ".profile"
                        )
                        .forEach(
                            function (card) {

                                card.dataset.dragged =
                                    "true";

                            }
                        );

                }


                event.preventDefault();

            }
        );


        function stopDragging(event) {

            if (!isDragging) {
                return;
            }


            isDragging = false;


            profiles.classList.remove(
                "dragging"
            );


            if (
                event &&
                event.pointerId !== undefined
            ) {

                try {

                    profiles.releasePointerCapture(
                        event.pointerId
                    );

                }

                catch (error) {
                    /* Ignore */
                }

            }

        }


        profiles.addEventListener(
            "pointerup",
            stopDragging
        );


        profiles.addEventListener(
            "pointercancel",
            stopDragging
        );

    }


    /* ============================================================
       KEYBOARD
    ============================================================ */

    document.addEventListener(
        "keydown",
        function (event) {

            const tag =
                document.activeElement &&
                document.activeElement.tagName;


            if (
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                tag === "SELECT"
            ) {

                return;

            }


            if (
                event.key === "ArrowRight"
            ) {

                if (profiles) {

                    profiles.scrollBy({

                        left:
                            getScrollAmount(),

                        behavior:
                            "smooth"

                    });

                }

            }


            if (
                event.key === "ArrowLeft"
            ) {

                if (profiles) {

                    profiles.scrollBy({

                        left:
                            -getScrollAmount(),

                        behavior:
                            "smooth"

                    });

                }

            }

        }
    );


    /* ============================================================
       REFRESH WHEN RETURNING TO HOMEPAGE
    ============================================================ */

    window.addEventListener(
        "pageshow",
        function () {

            renderProfiles();

            updateOverallProgress();

        }
    );


    /*
    Also refresh when the browser tab
    becomes visible again.
    */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.visibilityState ===
                "visible"
            ) {

                renderProfiles();

                updateOverallProgress();

            }

        }
    );


    /* ============================================================
       START
    ============================================================ */

    renderProfiles();

    updateOverallProgress();

})();