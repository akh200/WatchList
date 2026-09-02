(function () {

    "use strict";


    /* =========================================================
       ELEMENTS
    ========================================================= */

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


    /* =========================================================
       STORAGE
    ========================================================= */

    const STORAGE_KEY =
        "watchlist-progress";


    let state = {};

    try {

        state = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "{}"
        );

    } catch (error) {

        state = {};

    }


    /* =========================================================
       GET UNIVERSES
       
       Supports BOTH:
       
       const universes = [...]
       
       const UNIVERSES = [...]
       
       This is the reason the old version was showing
       "No universes found".
    ========================================================= */

    function getUniverses() {

        try {

            if (
                typeof universes !== "undefined" &&
                Array.isArray(universes)
            ) {

                return universes;

            }

        } catch (error) {
            // Ignore
        }


        try {

            if (
                typeof UNIVERSES !== "undefined" &&
                Array.isArray(UNIVERSES)
            ) {

                return UNIVERSES;

            }

        } catch (error) {
            // Ignore
        }


        if (
            Array.isArray(window.universes)
        ) {

            return window.universes;

        }


        if (
            Array.isArray(window.UNIVERSES)
        ) {

            return window.UNIVERSES;

        }


        return [];

    }


    /* =========================================================
       UNIVERSE GROUPS
    ========================================================= */

    function getGroups(universe) {

        if (
            Array.isArray(universe.groups)
        ) {

            return universe.groups;

        }


        if (
            Array.isArray(universe.sections)
        ) {

            return universe.sections;

        }


        if (
            Array.isArray(universe.categories)
        ) {

            return universe.categories;

        }


        return [];

    }


    /* =========================================================
       ITEMS
    ========================================================= */

    function getItems(universe) {

        const groups =
            getGroups(universe);


        const items = [];


        groups.forEach(function (group) {

            const groupItems =
                group.items ||
                group.movies ||
                group.titles ||
                [];


            if (
                Array.isArray(groupItems)
            ) {

                groupItems.forEach(function (item) {

                    items.push(item);

                });

            }

        });


        return items;

    }


    /* =========================================================
       ALL ITEMS
    ========================================================= */

    function getAllItems() {

        const list =
            getUniverses();


        const result = [];


        list.forEach(function (universe) {

            getItems(universe).forEach(function (item) {

                result.push(item);

            });

        });


        return result;

    }


    /* =========================================================
       STATUS
    ========================================================= */

    function getStatus(item) {

        if (!item || !item.id) {

            return "not-watched";

        }


        return (
            state[item.id] ||
            localStorage.getItem(
                "watchlist-status-" + item.id
            ) ||
            "not-watched"
        );

    }


    /* =========================================================
       ESCAPE HTML
    ========================================================= */

    function escapeHTML(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================================
       ICONS
    ========================================================= */

    const icons = {

        marvel: "⚡",

        dc: "🦇",

        horror: "👻",

        hp: "🪄",

        "wizard-world": "🪄",

        wizard: "🪄",

        anime: "☯",

        "sci-fi-fantasy": "✦",

        scifi: "✦",

        fantasy: "🐉",

        starwars: "✦",

        startrek: "🚀",

        transformers: "🤖",

        monsterverse: "🦖",

        jurassic: "🦕",

        pirates: "☠",

        narnia: "🦁",

        "fast-furious": "🏎",

        johnwick: "♠",

        "john-wick": "♠",

        terminator: "🤖",

        avatar: "🌊",

        "planet-of-the-apes": "🦍",

        apes: "🦍",

        conjuring: "🕯",

        insidious: "🚪",

        scream: "🔪",

        "james-bond": "007",

        bond: "007"

    };


    /* =========================================================
       COLORS
    ========================================================= */

    const colors = [

        "#e6483f",

        "#3e7bfa",

        "#9b59ff",

        "#e7a91a",

        "#19c6d6",

        "#ff7a18",

        "#52d273",

        "#ef4f91"

    ];


    /* =========================================================
       ICON
    ========================================================= */

    function getIcon(universe) {

        const id =
            String(
                universe.id || ""
            ).toLowerCase();


        return (
            icons[id] ||
            universe.icon ||
            "🎬"
        );

    }


    /* =========================================================
       UNIVERSE PROGRESS
    ========================================================= */

    function getUniverseProgress(universe) {

        const items =
            getItems(universe);


        let watched = 0;

        let halfway = 0;


        items.forEach(function (item) {

            const status =
                getStatus(item);


            if (
                status === "watched"
            ) {

                watched++;

            }


            if (
                status === "halfway" ||
                status === "in-progress"
            ) {

                halfway++;

            }

        });


        const total =
            items.length;


        const percentage =
            total > 0
                ? Math.round(
                    (watched / total) * 100
                )
                : 0;


        return {

            watched: watched,

            halfway: halfway,

            total: total,

            percentage: percentage

        };

    }


    /* =========================================================
       CREATE PROFILE
    ========================================================= */

    function createProfile(
        universe,
        index
    ) {

        const progress =
            getUniverseProgress(
                universe
            );


        const card =
            document.createElement(
                "button"
            );


        card.type = "button";

        card.className =
            "profile-card";


        const accent =
            universe.accent ||
            colors[
            index %
            colors.length
            ];


        const accent2 =
            universe.accent2 ||
            colors[
            (index + 1) %
            colors.length
            ];


        card.style.setProperty(
            "--accent",
            accent
        );


        card.style.setProperty(
            "--accent2",
            accent2
        );


        const id =
            encodeURIComponent(
                universe.id ||
                universe.key ||
                universe.slug ||
                ""
            );


        /* =====================================================
           PROFILE CONTENT
        ===================================================== */

        card.innerHTML = `

            <div class="profile-background">

                <div class="profile-glow"></div>

            </div>


            <div class="profile-top">

                <div class="profile-icon">

                    ${escapeHTML(
            getIcon(universe)
        )}

                </div>

            </div>


            <div class="profile-content">

                <h3>

                    ${escapeHTML(
            universe.name ||
            universe.title ||
            universe.id ||
            "Universe"
        )}

                </h3>


                <p>

                    ${escapeHTML(
            universe.tagline ||
            universe.description ||
            "Your cinematic universe awaits."
        )}

                </p>


                <div class="profile-meta">

                    <span>

                        ${progress.watched}
                        /
                        ${progress.total}
                        watched

                    </span>


                    <strong>

                        ${progress.percentage}%

                    </strong>

                </div>


                <div class="profile-bar">

                    <div
                        class="profile-fill"
                        style="
                            width:${progress.percentage}%;
                        ">
                    </div>

                </div>


                <div class="profile-open">

                    ENTER UNIVERSE →

                </div>

            </div>

        `;


        /* =====================================================
           OPEN UNIVERSE
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
                    id;

            }
        );


        return card;

    }


    /* =========================================================
       RENDER PROFILES
    ========================================================= */

    function renderProfiles() {

        const list =
            getUniverses();


        profiles.innerHTML = "";


        if (
            !list.length
        ) {

            profiles.innerHTML = `

                <div class="empty">

                    <h3>
                        No universes found
                    </h3>

                    <p>
                        Your data.js was loaded,
                        but no universe array was found.
                    </p>

                    <small>
                        Make sure data.js contains
                        either "const universes = [...]"
                        or "const UNIVERSES = [...]".
                    </small>

                </div>

            `;


            updateOverall();

            return;

        }


        list.forEach(
            function (universe, index) {

                profiles.appendChild(
                    createProfile(
                        universe,
                        index
                    )
                );

            }
        );


        updateOverall();

    }


    /* =========================================================
       OVERALL PROGRESS
    ========================================================= */

    function updateOverall() {

        const items =
            getAllItems();


        let watched = 0;


        items.forEach(
            function (item) {

                if (
                    getStatus(item) ===
                    "watched"
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
                    (watched / total) * 100
                )
                : 0;


        overallPercent.textContent =
            percentage + "%";


        overallCount.textContent =
            watched +
            " / " +
            total +
            " titles watched";


        overallFill.style.width =
            percentage + "%";

    }


    /* =========================================================
       ARROW NAVIGATION
    ========================================================= */

    prevBtn.addEventListener(
        "click",
        function () {

            profiles.scrollBy({

                left: -600,

                behavior: "smooth"

            });

        }
    );


    nextBtn.addEventListener(
        "click",
        function () {

            profiles.scrollBy({

                left: 600,

                behavior: "smooth"

            });

        }
    );


    /* =========================================================
       MOUSE DRAG / TOUCH SWIPE
    ========================================================= */

    let dragging = false;

    let startX = 0;

    let startScroll = 0;


    profiles.addEventListener(
        "pointerdown",
        function (event) {

            dragging = true;

            startX =
                event.clientX;

            startScroll =
                profiles.scrollLeft;

            profiles.classList.add(
                "dragging"
            );

        }
    );


    window.addEventListener(
        "pointerup",
        function () {

            dragging = false;

            profiles.classList.remove(
                "dragging"
            );

        }
    );


    window.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) {

                return;

            }


            const distance =
                event.clientX -
                startX;


            profiles.scrollLeft =
                startScroll -
                distance * 1.2;

        }
    );


    /* =========================================================
       STORAGE UPDATE
    ========================================================= */

    window.addEventListener(
        "storage",
        function () {

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


            renderProfiles();

        }
    );


    /* =========================================================
       START
    ========================================================= */

    renderProfiles();

})();