(function () {

    "use strict";


    /* =========================================================
       PAGE ELEMENTS
    ========================================================= */

    const profiles =
        document.getElementById("profiles");

    const overallPercent =
        document.getElementById("overallPercent");

    const overallCount =
        document.getElementById("overallCount");

    const overallFill =
        document.getElementById("overallFill");

    const previousButton =
        document.getElementById("prevBtn");

    const nextButton =
        document.getElementById("nextBtn");



    /* =========================================================
       GET UNIVERSES
       
       Your current data.js uses:
       
       const universes = [...]
       
       This also supports older:
       
       const UNIVERSES = [...]
    ========================================================= */

    function getUniverses() {

        if (
            typeof window.universes !== "undefined" &&
            Array.isArray(window.universes)
        ) {

            return window.universes;

        }


        if (
            typeof window.UNIVERSES !== "undefined" &&
            Array.isArray(window.UNIVERSES)
        ) {

            return window.UNIVERSES;

        }


        return [];

    }



    /* =========================================================
       GET GROUPS
    ========================================================= */

    function getGroups(universe) {

        if (
            Array.isArray(universe.sections)
        ) {

            return universe.sections;

        }


        if (
            Array.isArray(universe.groups)
        ) {

            return universe.groups;

        }


        if (
            Array.isArray(universe.categories)
        ) {

            return universe.categories;

        }


        return [];

    }



    /* =========================================================
       GET ALL MOVIES / SERIES
    ========================================================= */

    function getItems(universe) {

        const groups =
            getGroups(universe);


        let result = [];


        groups.forEach(function (group) {

            if (
                Array.isArray(group.items)
            ) {

                result =
                    result.concat(
                        group.items
                    );

                return;

            }


            if (
                Array.isArray(group.movies)
            ) {

                result =
                    result.concat(
                        group.movies
                    );

                return;

            }


            if (
                Array.isArray(group.titles)
            ) {

                result =
                    result.concat(
                        group.titles
                    );

            }

        });


        return result;

    }



    /* =========================================================
       ALL ITEMS
    ========================================================= */

    function getAllItems() {

        const universes =
            getUniverses();


        let result = [];


        universes.forEach(
            function (universe) {

                result =
                    result.concat(
                        getItems(universe)
                    );

            }
        );


        return result;

    }



    /* =========================================================
       STATUS STORAGE
       
       Supports the status system already used by your
       universe page.
    ========================================================= */

    function getStatus(id) {

        const newStatus =
            localStorage.getItem(
                "watchlist-status-" + id
            );


        if (
            newStatus
        ) {

            return newStatus;

        }


        /*
           Older storage format
        */

        try {

            const old =
                JSON.parse(
                    localStorage.getItem(
                        "watchlist-progress"
                    ) || "{}"
                );


            if (
                old[id]
            ) {

                return old[id];

            }

        }
        catch (error) {

            // Ignore invalid old storage

        }


        return "not-watched";

    }



    /* =========================================================
       ESCAPE HTML
    ========================================================= */

    function escapeHTML(value) {

        return String(
            value === undefined ||
                value === null
                ? ""
                : value
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
       PROFILE ICONS
    ========================================================= */

    const icons = {

        marvel: "⚡",

        dc: "🦇",

        horror: "👻",

        "wizard-world": "🪄",

        wizard: "🪄",

        hp: "🪄",

        anime: "☯",

        "sci-fi-fantasy": "✦",

        "sci-fi": "🚀",

        fantasy: "🐉",

        starwars: "✦",

        "star-wars": "✦",

        transformers: "🤖",

        monsterverse: "🦖",

        jurassic: "🦕",

        pirates: "☠",

        narnia: "🦁",

        "fast-furious": "🏎",

        terminator: "🤖",

        avatar: "🌊",

        "john-wick": "♠",

        "mission-impossible": "🎯",

        jamesbond: "007",

        "james-bond": "007",

        invincible: "★"

    };



    /* =========================================================
       PROFILE COLORS
    ========================================================= */

    const colors = [

        "#ef3340",

        "#2878ff",

        "#b44cff",

        "#e7a91a",

        "#19c6d6",

        "#ff7a18",

        "#52d273",

        "#e83e8c"

    ];



    /* =========================================================
       PROFILE IMAGE
       
       Priority:
       
       profileImage
       profile
       image
       background
       hero
    ========================================================= */

    function getProfileImage(
        universe
    ) {

        if (
            universe.profileImage
        ) {

            return universe.profileImage;

        }


        if (
            universe.profile
        ) {

            return universe.profile;

        }


        if (
            universe.image
        ) {

            return universe.image;

        }


        if (
            universe.background
        ) {

            return universe.background;

        }


        if (
            universe.hero
        ) {

            return universe.hero;

        }


        return "";

    }



    /* =========================================================
       PROFILE ICON
    ========================================================= */

    function getIcon(
        universe
    ) {

        const id =
            String(
                universe.id ||
                ""
            )
                .toLowerCase()
                .replace(
                    /[\s_]+/g,
                    "-"
                );


        return (
            icons[id] ||
            "🎬"
        );

    }



    /* =========================================================
       PROFILE PROGRESS
    ========================================================= */

    function getUniverseProgress(
        universe
    ) {

        const items =
            getItems(universe);


        let watched = 0;

        let halfway = 0;


        items.forEach(
            function (item) {

                const state =
                    getStatus(
                        item.id
                    );


                if (
                    state ===
                    "watched"
                ) {

                    watched++;

                }


                else if (
                    state ===
                    "halfway"
                ) {

                    halfway++;

                }

            }
        );


        const total =
            items.length;


        const progress =
            total
                ? Math.round(
                    (
                        watched +
                        halfway * 0.5
                    )
                    /
                    total
                    *
                    100
                )
                : 0;


        return {

            total,

            watched,

            halfway,

            progress

        };

    }



    /* =========================================================
       CREATE PROFILE CARD
    ========================================================= */

    function createProfileCard(
        universe,
        index
    ) {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "profile-card";


        const accent =
            universe.accent ||
            colors[
            index %
            colors.length
            ];


        card.style.setProperty(
            "--accent",
            accent
        );


        card.style.setProperty(
            "--accent2",
            universe.accent2 ||
            accent
        );


        const image =
            getProfileImage(
                universe
            );


        if (image) {

            card.style.setProperty(
                "--profile-image",
                "url('" +
                String(image)
                    .replace(
                        /'/g,
                        "\\'"
                    ) +
                "')"
            );

        }



        const stats =
            getUniverseProgress(
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


        const icon =
            getIcon(
                universe
            );



        card.innerHTML = `

            <div class="profile-background"></div>

            <div class="profile-overlay"></div>


            <div class="profile-icon">

                ${icon}

            </div>


            <div class="profile-content">

                <h3>

                    ${escapeHTML(
            name
        )}

                </h3>


                <p>

                    ${escapeHTML(
            description
        )}

                </p>


                <div class="profile-stats">

                    <span>

                        ${stats.total}
                        titles

                    </span>


                    <strong>

                        ${stats.progress}%

                    </strong>

                </div>


                <div class="profile-bar">

                    <div
                        class="profile-bar-fill"
                        style="
                            width:${stats.progress}%;
                        "
                    ></div>

                </div>

            </div>

        `;



        /* =====================================================
           CLICK → UNIVERSE PAGE
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
       RENDER PROFILES
    ========================================================= */

    function renderProfiles() {

        const universes =
            getUniverses();


        profiles.innerHTML =
            "";


        if (
            !universes.length
        ) {

            profiles.innerHTML = `

                <div class="data-error">

                    <h3>
                        No universes found
                    </h3>

                    <p>
                        Make sure data.js is in
                        the same folder as index.html.
                    </p>

                </div>

            `;


            updateOverall();


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


        updateOverall();

    }



    /* =========================================================
       OVERALL PROGRESS
    ========================================================= */

    function updateOverall() {

        const items =
            getAllItems();


        let watched = 0;

        let halfway = 0;


        items.forEach(
            function (item) {

                const state =
                    getStatus(
                        item.id
                    );


                if (
                    state ===
                    "watched"
                ) {

                    watched++;

                }


                else if (
                    state ===
                    "halfway"
                ) {

                    halfway++;

                }

            }
        );


        const total =
            items.length;


        const percentage =
            total
                ? Math.round(
                    (
                        watched +
                        halfway * 0.5
                    )
                    /
                    total
                    *
                    100
                )
                : 0;


        overallPercent.textContent =
            percentage +
            "%";


        overallCount.textContent =
            watched +
            " / " +
            total +
            " titles watched";


        overallFill.style.width =
            percentage +
            "%";

    }



    /* =========================================================
       LEFT / RIGHT BUTTONS
    ========================================================= */

    previousButton.addEventListener(
        "click",
        function () {

            profiles.scrollBy({

                left: -550,

                behavior: "smooth"

            });

        }
    );


    nextButton.addEventListener(
        "click",
        function () {

            profiles.scrollBy({

                left: 550,

                behavior: "smooth"

            });

        }
    );



    /* =========================================================
       DRAG WITH MOUSE
    ========================================================= */

    let dragging = false;

    let startX = 0;

    let startingScroll = 0;


    profiles.addEventListener(
        "pointerdown",
        function (event) {

            dragging = true;

            startX =
                event.clientX;

            startingScroll =
                profiles.scrollLeft;


            profiles.classList.add(
                "dragging"
            );


            profiles.setPointerCapture(
                event.pointerId
            );

        }
    );


    profiles.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) {

                return;

            }


            const distance =
                event.clientX -
                startX;


            profiles.scrollLeft =
                startingScroll -
                distance * 1.15;

        }
    );


    profiles.addEventListener(
        "pointerup",
        function () {

            dragging = false;

            profiles.classList.remove(
                "dragging"
            );

        }
    );


    profiles.addEventListener(
        "pointercancel",
        function () {

            dragging = false;

            profiles.classList.remove(
                "dragging"
            );

        }
    );



    /* =========================================================
       UPDATE WHEN STORAGE CHANGES
    ========================================================= */

    window.addEventListener(
        "storage",
        function () {

            renderProfiles();

        }
    );



    /* =========================================================
       INITIAL LOAD
    ========================================================= */

    renderProfiles();


})();