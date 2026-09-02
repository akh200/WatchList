(function () {
    "use strict";

    /* =========================================================
       AKHIL & MANASA WATCHLIST
       HOMEPAGE CONTROLLER
       ========================================================= */

    const profiles = document.getElementById("profiles");

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


    /* =========================================================
       DATA
       Supports:
       - groups
       - sections
       - categories
       ========================================================= */

    function getUniverses() {

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


    function getGroups(universe) {

        return (
            universe.groups ||
            universe.sections ||
            universe.categories ||
            []
        );

    }


    function getItems(universe) {

        const groups =
            getGroups(universe);

        const items = [];

        groups.forEach(
            function (group) {

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

            }
        );

        return items;

    }


    /* =========================================================
       LOCAL STORAGE
       =========================================================

       Universe page saves progress like:

       watchlist-progress-marvel
       watchlist-progress-dc
       watchlist-progress-horror
       etc.

       Older versions may use:

       watchlist-status-ID

       or:

       watchlist-progress
       ========================================================= */


    function readJSON(key) {

        try {

            return JSON.parse(
                localStorage.getItem(key) || "{}"
            );

        }

        catch (error) {

            return {};

        }

    }


    /*
       Get status from ALL supported storage formats.
    */

    function getStatus(movieId) {

        /* -----------------------------------------
           NEW / UNIVERSE-SPECIFIC STORAGE
           ----------------------------------------- */

        const universes =
            getUniverses();


        for (
            const universe of universes
        ) {

            const key =
                "watchlist-progress-" +
                universe.id;

            const progress =
                readJSON(key);

            if (
                progress &&
                progress[movieId]
            ) {

                return progress[movieId];

            }

        }


        /* -----------------------------------------
           OLD STATUS STORAGE
           ----------------------------------------- */

        const oldStatus =
            localStorage.getItem(
                "watchlist-status-" +
                movieId
            );

        if (
            oldStatus
        ) {

            return oldStatus;

        }


        /* -----------------------------------------
           OLD GLOBAL STORAGE
           ----------------------------------------- */

        const oldGlobal =
            readJSON(
                "watchlist-progress"
            );

        if (
            oldGlobal &&
            oldGlobal[movieId]
        ) {

            return oldGlobal[movieId];

        }


        return "not-watched";

    }


    /* =========================================================
       GET ALL MOVIES
       ========================================================= */

    function getAllItems() {

        const universes =
            getUniverses();

        const all =
            [];

        universes.forEach(
            function (universe) {

                all.push(
                    ...getItems(universe)
                );

            }
        );

        return all;

    }


    /* =========================================================
       ICONS
       ========================================================= */

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


    /* =========================================================
       FALLBACK COLORS
       ========================================================= */

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


    /* =========================================================
       ESCAPE HTML
       ========================================================= */

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


    /* =========================================================
       ICON
       ========================================================= */

    function getIcon(universe) {

        const id =
            String(
                universe.id || ""
            )
                .toLowerCase()
                .trim();

        return (
            universe.icon ||
            icons[id] ||
            "🎬"
        );

    }


    /* =========================================================
       UNIVERSE COUNT
       ========================================================= */

    function countUniverse(
        universe
    ) {

        const items =
            getItems(universe);

        let watched =
            0;

        let halfway =
            0;


        items.forEach(
            function (item) {

                const status =
                    getStatus(item.id);

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


    /* =========================================================
       CREATE PROFILE CARD
       ========================================================= */

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
            (
                index + 1
            ) %
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


        /* =====================================================
           CLICK → UNIVERSE
           ===================================================== */

        card.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "selected-universe",
                    universe.id
                );


                window.location.href =
                    "universe.html?universe=" +
                    encodeURIComponent(
                        universe.id
                    );

            }
        );


        return card;

    }


    /* =========================================================
       UPDATE HOMEPAGE OVERALL PROGRESS
       ========================================================= */

    function updateOverallProgress() {

        const items =
            getAllItems();


        let watched =
            0;


        let halfway =
            0;


        items.forEach(
            function (item) {

                const status =
                    getStatus(
                        item.id
                    );


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


        const total =
            items.length;


        /*
           Homepage percentage counts
           watched titles only.

           Halfway is displayed nowhere on
           homepage but remains supported.
        */

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


    /* =========================================================
       RENDER PROFILES
       ========================================================= */

    function renderProfiles() {

        if (!profiles) {

            return;

        }


        profiles.innerHTML =
            "";


        const universes =
            getUniverses();


        if (
            !universes.length
        ) {

            profiles.innerHTML = `

                <div class="empty">

                    <strong>
                        No universes found
                    </strong>

                    <span>
                        Make sure data.js is beside index.html.
                    </span>

                </div>

            `;

            updateOverallProgress();

            return;

        }


        universes.forEach(
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


    /* =========================================================
       CAROUSEL
       ========================================================= */

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
                style.columnGap ||
                style.gap ||
                18
            );


        return (
            firstCard.offsetWidth +
            gap
        ) * 2;

    }


    if (
        nextBtn
    ) {

        nextBtn.addEventListener(
            "click",
            function () {

                profiles.scrollBy({

                    left:
                        getScrollAmount(),

                    behavior:
                        "smooth"

                });

            }
        );

    }


    if (
        prevBtn
    ) {

        prevBtn.addEventListener(
            "click",
            function () {

                profiles.scrollBy({

                    left:
                        -getScrollAmount(),

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* =========================================================
       MOUSE DRAG / TOUCH SWIPE
       ========================================================= */

    let isDragging =
        false;

    let startX =
        0;

    let startScrollLeft =
        0;


    if (
        profiles
    ) {

        profiles.addEventListener(
            "pointerdown",
            function (event) {

                isDragging =
                    true;

                startX =
                    event.clientX;

                startScrollLeft =
                    profiles.scrollLeft;

                profiles.classList.add(
                    "dragging"
                );

            }
        );


        profiles.addEventListener(
            "pointermove",
            function (event) {

                if (
                    !isDragging
                ) {

                    return;

                }


                const distance =
                    event.clientX -
                    startX;


                profiles.scrollLeft =
                    startScrollLeft -
                    distance;

            }
        );


        function stopDragging() {

            isDragging =
                false;

            profiles.classList.remove(
                "dragging"
            );

        }


        profiles.addEventListener(
            "pointerup",
            stopDragging
        );


        profiles.addEventListener(
            "pointercancel",
            stopDragging
        );


        profiles.addEventListener(
            "pointerleave",
            stopDragging
        );

    }


    /* =========================================================
       KEYBOARD NAVIGATION
       ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "ArrowRight"
            ) {

                if (
                    document.activeElement ===
                    document.body
                ) {

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

                if (
                    document.activeElement ===
                    document.body
                ) {

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


    /* =========================================================
       LIVE UPDATE
       ========================================================= */

    window.addEventListener(
        "storage",
        function () {

            renderProfiles();

        }
    );


    /*
       When returning from universe.html
       and the homepage becomes visible again,
       refresh the numbers.
    */

    window.addEventListener(
        "pageshow",
        function () {

            renderProfiles();

        }
    );


    /* =========================================================
       INITIAL LOAD
       ========================================================= */

    renderProfiles();

})();