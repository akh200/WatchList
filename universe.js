/* =========================================================
   WATCHLIST - UNIVERSE PAGE
   Works with:
   data.js -> const universes = [...]
   universes -> sections -> items
   ========================================================= */

(function () {
    "use strict";

    /* =====================================================
       BASIC HELPERS
       ===================================================== */

    function getQueryParameter(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    function escapeHTML(value) {
        if (value === null || value === undefined) {
            return "";
        }

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function normalise(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .replace(/[\s_-]+/g, "");
    }

    /* =====================================================
       FIND THE UNIVERSE
       ===================================================== */

    const universeParameter =
        getQueryParameter("universe") || "";

    const requestedUniverse =
        normalise(universeParameter);

    /* -----------------------------------------------------
       IMPORTANT:
       data.js contains:
       const universes = [...]
       ----------------------------------------------------- */

    if (
        typeof universes === "undefined" ||
        !Array.isArray(universes)
    ) {
        showError(
            "WatchList Data Error",
            "data.js could not be loaded. Make sure data.js is in the same folder as universe.html."
        );
        return;
    }

    let universe = universes.find(function (item) {

        return (
            normalise(item.id) === requestedUniverse ||
            normalise(item.key) === requestedUniverse ||
            normalise(item.slug) === requestedUniverse ||
            normalise(item.name) === requestedUniverse ||
            normalise(item.title) === requestedUniverse
        );

    });

    /*
       Some older versions may have used different property names.
       Try a few more possibilities before giving up.
    */

    if (!universe) {

        universe = universes.find(function (item) {

            const possibleNames = [
                item.id,
                item.key,
                item.slug,
                item.name,
                item.title
            ];

            return possibleNames.some(function (value) {

                return normalise(value)
                    .includes(requestedUniverse);

            });

        });

    }

    if (!universe) {

        showError(
            "Universe Not Found",
            "The universe \"" +
            escapeHTML(universeParameter) +
            "\" could not be found in data.js."
        );

        return;
    }

    /* =====================================================
       NORMALISE DATA STRUCTURE
       ===================================================== */

    let sections =
        universe.sections ||
        universe.groups ||
        universe.categories ||
        [];

    if (!Array.isArray(sections)) {
        sections = [];
    }

    /*
       Convert different possible data formats into one
       consistent internal format.
    */

    const movies = [];

    sections.forEach(function (section, sectionIndex) {

        const sectionName =
            section.title ||
            section.name ||
            section.label ||
            "Watch Order " + (sectionIndex + 1);

        const items =
            section.items ||
            section.movies ||
            section.titles ||
            [];

        if (!Array.isArray(items)) {
            return;
        }

        items.forEach(function (item, itemIndex) {

            if (!item) {
                return;
            }

            movies.push({

                id:
                    item.id ||
                    item.key ||
                    (
                        requestedUniverse +
                        "-" +
                        sectionIndex +
                        "-" +
                        itemIndex
                    ),

                title:
                    item.title ||
                    item.name ||
                    item.movie ||
                    "Untitled",

                year:
                    item.year ||
                    item.releaseYear ||
                    item.date ||
                    "",

                description:
                    item.description ||
                    item.synopsis ||
                    item.summary ||
                    "Description coming soon.",

                image:
                    item.image ||
                    item.poster ||
                    item.posterUrl ||
                    item.thumbnail ||
                    "",

                trailer:
                    item.trailer ||
                    item.trailerUrl ||
                    item.youtube ||
                    item.video ||
                    "",

                type:
                    item.type ||
                    item.kind ||
                    "Movie",

                section:
                    sectionName,

                originalItem:
                    item

            });

        });

    });

    /* =====================================================
       PAGE ELEMENTS
       ===================================================== */

    const pageTitle =
        document.getElementById("universeTitle");

    const pageDescription =
        document.getElementById("universeDescription");

    const hero =
        document.getElementById("universeHero");

    const movieGroups =
        document.getElementById("movieGroups");

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("progressFill");

    const allButton =
        document.getElementById("filterAll");

    const unwatchedButton =
        document.getElementById("filterUnwatched");

    const halfwayButton =
        document.getElementById("filterHalfway");

    const watchedButton =
        document.getElementById("filterWatched");

    /* =====================================================
       UNIVERSE INFORMATION
       ===================================================== */

    const displayName =
        universe.name ||
        universe.title ||
        universe.id ||
        "Universe";

    if (pageTitle) {
        pageTitle.textContent = displayName;
    }

    if (pageDescription) {

        pageDescription.textContent =
            universe.description ||
            universe.subtitle ||
            "Your personal watchlist for " +
            displayName +
            ".";
    }

    /*
       Universe background image
    */

    const universeImage =
        universe.background ||
        universe.backgroundImage ||
        universe.hero ||
        universe.image ||
        "";

    if (hero && universeImage) {

        hero.style.backgroundImage =
            "linear-gradient(90deg, rgba(5,7,12,.96), rgba(5,7,12,.70), rgba(5,7,12,.25)), url('" +
            universeImage.replace(/'/g, "\\'") +
            "')";

    }

    /* =====================================================
       STORAGE
       ===================================================== */

    const storageKey =
        "watchlist-progress-" +
        (
            universe.id ||
            universe.key ||
            requestedUniverse
        );

    let progress = {};

    try {

        progress =
            JSON.parse(
                localStorage.getItem(storageKey) || "{}"
            );

    } catch (error) {

        progress = {};

    }

    /*
       Status values:

       not-watched
       halfway
       watched
    */

    function getStatus(movieId) {

        return progress[movieId] ||
            "not-watched";

    }

    function setStatus(movieId, status) {

        progress[movieId] = status;

        localStorage.setItem(
            storageKey,
            JSON.stringify(progress)
        );

        updateProgress();

    }

    /* =====================================================
       RATING
       ===================================================== */

    function getRating(movieId) {

        const ratingKey =
            storageKey + "-ratings";

        let ratings = {};

        try {

            ratings =
                JSON.parse(
                    localStorage.getItem(ratingKey) || "{}"
                );

        } catch (error) {

            ratings = {};

        }

        return ratings[movieId] || 0;
    }

    function setRating(movieId, rating) {

        const ratingKey =
            storageKey + "-ratings";

        let ratings = {};

        try {

            ratings =
                JSON.parse(
                    localStorage.getItem(ratingKey) || "{}"
                );

        } catch (error) {

            ratings = {};

        }

        ratings[movieId] = rating;

        localStorage.setItem(
            ratingKey,
            JSON.stringify(ratings)
        );

    }

    /* =====================================================
       TRAILER URL
       ===================================================== */

    function getYouTubeEmbedURL(url) {

        if (!url) {
            return "";
        }

        try {

            const parsed =
                new URL(url);

            /*
               Normal YouTube URL
               youtube.com/watch?v=XXXX
            */

            if (
                parsed.hostname.includes("youtube.com") &&
                parsed.searchParams.get("v")
            ) {

                return (
                    "https://www.youtube.com/embed/" +
                    parsed.searchParams.get("v")
                );

            }

            /*
               youtu.be/XXXX
            */

            if (
                parsed.hostname.includes("youtu.be")
            ) {

                return (
                    "https://www.youtube.com/embed" +
                    parsed.pathname
                );

            }

            /*
               Already an embed URL
            */

            if (
                parsed.hostname.includes("youtube.com") &&
                parsed.pathname.startsWith("/embed/")
            ) {

                return url;

            }

        } catch (error) {

            /*
               If it isn't a normal URL, return it unchanged.
            */

        }

        return url;
    }

    /* =====================================================
       STATUS LABEL
       ===================================================== */

    function statusLabel(status) {

        if (status === "watched") {
            return "✓ Watched";
        }

        if (status === "halfway") {
            return "◐ Halfway";
        }

        return "○ Not Watched";
    }

    /* =====================================================
       CREATE MOVIE CARD
       ===================================================== */

    function createMovieCard(movie, number) {

        const card =
            document.createElement("article");

        card.className =
            "movie-card";

        card.dataset.status =
            getStatus(movie.id);

        const currentStatus =
            getStatus(movie.id);

        const currentRating =
            getRating(movie.id);

        let stars = "";

        for (let i = 1; i <= 5; i++) {

            stars +=
                '<button class="rating-star ' +
                (
                    i <= currentRating
                        ? "active"
                        : ""
                ) +
                '" data-rating="' +
                i +
                '" type="button">★</button>';

        }

        const imageHTML =
            movie.image
                ? `
                    <div class="movie-poster">
                        <img
                            src="${escapeHTML(movie.image)}"
                            alt="${escapeHTML(movie.title)}"
                            loading="lazy"
                        >
                    </div>
                  `
                : `
                    <div class="movie-poster poster-placeholder">
                        <span>🎬</span>
                    </div>
                  `;

        const trailerButton =
            movie.trailer
                ? `
                    <button
                        class="trailer-button"
                        type="button"
                        data-action="trailer"
                    >
                        ▶ Watch Trailer
                    </button>
                  `
                : `
                    <span class="no-trailer">
                        Trailer unavailable
                    </span>
                  `;

        card.innerHTML = `

            ${imageHTML}

            <div class="movie-content">

                <div class="movie-number">
                    ${number}
                </div>

                <div class="movie-main">

                    <div class="movie-title-row">

                        <h3>
                            ${escapeHTML(movie.title)}
                        </h3>

                        ${
                            movie.year
                                ? `<span class="movie-year">
                                    ${escapeHTML(movie.year)}
                                   </span>`
                                : ""
                        }

                    </div>

                    <div class="movie-type">
                        ${escapeHTML(movie.type)}
                    </div>

                    <p class="movie-description">
                        ${escapeHTML(movie.description)}
                    </p>

                    <div class="movie-actions">

                        <div class="status-buttons">

                            <button
                                type="button"
                                class="status-button ${
                                    currentStatus === "not-watched"
                                        ? "selected"
                                        : ""
                                }"
                                data-status="not-watched"
                            >
                                ○ Not Watched
                            </button>

                            <button
                                type="button"
                                class="status-button ${
                                    currentStatus === "halfway"
                                        ? "selected halfway"
                                        : ""
                                }"
                                data-status="halfway"
                            >
                                ◐ Halfway
                            </button>

                            <button
                                type="button"
                                class="status-button ${
                                    currentStatus === "watched"
                                        ? "selected watched"
                                        : ""
                                }"
                                data-status="watched"
                            >
                                ✓ Watched
                            </button>

                        </div>

                        <div class="movie-bottom">

                            <div class="rating">

                                <span class="rating-label">
                                    My Rating
                                </span>

                                <div class="rating-stars">
                                    ${stars}
                                </div>

                            </div>

                            ${trailerButton}

                        </div>

                    </div>

                </div>

            </div>
        `;

        /* =================================================
           STATUS BUTTONS
           ================================================= */

        const statusButtons =
            card.querySelectorAll(
                ".status-button"
            );

        statusButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const newStatus =
                        button.dataset.status;

                    setStatus(
                        movie.id,
                        newStatus
                    );

                    statusButtons.forEach(
                        function (otherButton) {

                            otherButton.classList
                                .remove(
                                    "selected",
                                    "watched",
                                    "halfway"
                                );

                        }
                    );

                    button.classList.add(
                        "selected"
                    );

                    if (
                        newStatus === "watched"
                    ) {

                        button.classList.add(
                            "watched"
                        );

                    }

                    if (
                        newStatus === "halfway"
                    ) {

                        button.classList.add(
                            "halfway"
                        );

                    }

                    card.dataset.status =
                        newStatus;

                }
            );

        });

        /* =================================================
           RATINGS
           ================================================= */

        const ratingButtons =
            card.querySelectorAll(
                ".rating-star"
            );

        ratingButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const rating =
                            Number(
                                button.dataset.rating
                            );

                        setRating(
                            movie.id,
                            rating
                        );

                        ratingButtons.forEach(
                            function (star) {

                                star.classList.toggle(
                                    "active",
                                    Number(
                                        star.dataset.rating
                                    ) <= rating
                                );

                            }
                        );

                    }
                );

            }
        );

        /* =================================================
           TRAILER
           ================================================= */

        const trailerButtonElement =
            card.querySelector(
                '[data-action="trailer"]'
            );

        if (trailerButtonElement) {

            trailerButtonElement.addEventListener(
                "click",
                function () {

                    openTrailer(movie);

                }
            );

        }

        return card;
    }

    /* =====================================================
       TRAILER MODAL
       ===================================================== */

    function openTrailer(movie) {

        const embedURL =
            getYouTubeEmbedURL(
                movie.trailer
            );

        if (!embedURL) {
            return;
        }

        const modal =
            document.createElement("div");

        modal.className =
            "trailer-modal";

        modal.innerHTML = `

            <div class="trailer-backdrop"></div>

            <div class="trailer-window">

                <button
                    class="trailer-close"
                    type="button"
                >
                    ×
                </button>

                <div class="trailer-heading">
                    ${escapeHTML(movie.title)}
                </div>

                <div class="trailer-video">

                    <iframe
                        src="${escapeHTML(embedURL)}"
                        title="${escapeHTML(movie.title)} Trailer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        document.body.style.overflow =
            "hidden";

        function closeModal() {

            modal.remove();

            document.body.style.overflow =
                "";

        }

        modal.querySelector(
            ".trailer-close"
        ).addEventListener(
            "click",
            closeModal
        );

        modal.querySelector(
            ".trailer-backdrop"
        ).addEventListener(
            "click",
            closeModal
        );

        document.addEventListener(
            "keydown",
            function escapeKey(event) {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                    document.removeEventListener(
                        "keydown",
                        escapeKey
                    );

                }

            }
        );

    }

    /* =====================================================
       RENDER GROUPS
       ===================================================== */

    let currentFilter =
        "all";

    function renderMovies() {

        if (!movieGroups) {
            return;
        }

        movieGroups.innerHTML = "";

        let movieNumber = 0;

        sections.forEach(
            function (section, sectionIndex) {

                const sectionName =
                    section.title ||
                    section.name ||
                    section.label ||
                    "Watch Order " +
                    (sectionIndex + 1);

                const items =
                    section.items ||
                    section.movies ||
                    section.titles ||
                    [];

                if (!Array.isArray(items)) {
                    return;
                }

                const visibleMovies = [];

                items.forEach(
                    function (item, itemIndex) {

                        if (!item) {
                            return;
                        }

                        const movie =
                            movies.find(
                                function (m) {

                                    return (
                                        m.originalItem ===
                                        item
                                    );

                                }
                            );

                        if (!movie) {
                            return;
                        }

                        const status =
                            getStatus(
                                movie.id
                            );

                        if (
                            currentFilter !== "all" &&
                            status !== currentFilter
                        ) {

                            return;

                        }

                        visibleMovies.push(movie);

                    }
                );

                if (
                    visibleMovies.length === 0
                ) {

                    return;

                }

                const group =
                    document.createElement(
                        "section"
                    );

                group.className =
                    "movie-group";

                group.innerHTML = `

                    <div class="group-heading">

                        <div>
                            <span class="group-number">
                                ${sectionIndex + 1}
                            </span>

                            <h2>
                                ${escapeHTML(sectionName)}
                            </h2>
                        </div>

                        <span class="group-count">
                            ${visibleMovies.length}
                            title${
                                visibleMovies.length === 1
                                    ? ""
                                    : "s"
                            }
                        </span>

                    </div>
                `;

                const list =
                    document.createElement(
                        "div"
                    );

                list.className =
                    "movie-list";

                visibleMovies.forEach(
                    function (movie) {

                        movieNumber++;

                        list.appendChild(
                            createMovieCard(
                                movie,
                                movieNumber
                            )
                        );

                    }
                );

                group.appendChild(list);

                movieGroups.appendChild(group);

            }
        );

        if (
            movieGroups.children.length === 0
        ) {

            movieGroups.innerHTML = `

                <div class="empty-state">

                    <div class="empty-icon">
                        🎬
                    </div>

                    <h2>
                        Nothing here yet
                    </h2>

                    <p>
                        There are no titles matching
                        this filter.
                    </p>

                </div>
            `;

        }

        updateProgress();

    }

    /* =====================================================
       PROGRESS
       ===================================================== */

    function updateProgress() {

        const total =
            movies.length;

        let watched = 0;
        let halfway = 0;

        movies.forEach(
            function (movie) {

                const status =
                    getStatus(movie.id);

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

        const remaining =
            total -
            watched -
            halfway;

        const percentage =
            total > 0
                ? Math.round(
                    (
                        watched +
                        halfway * 0.5
                    ) /
                    total *
                    100
                )
                : 0;

        if (progressText) {

            progressText.innerHTML = `
                <span>
                    ${watched} watched
                </span>

                <span>
                    ${halfway} halfway
                </span>

                <span>
                    ${remaining} remaining
                </span>

                <strong>
                    ${percentage}%
                </strong>
            `;

        }

        if (progressFill) {

            progressFill.style.width =
                percentage + "%";

        }

    }

    /* =====================================================
       FILTERS
       ===================================================== */

    function activateFilter(
        filter,
        activeButton
    ) {

        currentFilter =
            filter;

        [
            allButton,
            unwatchedButton,
            halfwayButton,
            watchedButton
        ].forEach(
            function (button) {

                if (button) {

                    button.classList.remove(
                        "active"
                    );

                }

            }
        );

        if (activeButton) {

            activeButton.classList.add(
                "active"
            );

        }

        renderMovies();

    }

    if (allButton) {

        allButton.addEventListener(
            "click",
            function () {

                activateFilter(
                    "all",
                    allButton
                );

            }
        );

    }

    if (unwatchedButton) {

        unwatchedButton.addEventListener(
            "click",
            function () {

                activateFilter(
                    "not-watched",
                    unwatchedButton
                );

            }
        );

    }

    if (halfwayButton) {

        halfwayButton.addEventListener(
            "click",
            function () {

                activateFilter(
                    "halfway",
                    halfwayButton
                );

            }
        );

    }

    if (watchedButton) {

        watchedButton.addEventListener(
            "click",
            function () {

                activateFilter(
                    "watched",
                    watchedButton
                );

            }
        );

    }

    /* =====================================================
       BACK BUTTON
       ===================================================== */

    const backButton =
        document.getElementById(
            "backButton"
        );

    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "index.html";

            }
        );

    }

    /* =====================================================
       ERROR SCREEN
       ===================================================== */

    function showError(
        title,
        message
    ) {

        const loading =
            document.getElementById(
                "loading"
            );

        if (loading) {

            loading.innerHTML = `

                <div class="error-screen">

                    <div class="error-icon">
                        ⚠
                    </div>

                    <h1>
                        ${title}
                    </h1>

                    <p>
                        ${message}
                    </p>

                    <button
                        type="button"
                        onclick="window.location.href='index.html'"
                    >
                        ← Back to Profiles
                    </button>

                </div>

            `;

        }

    }

    /* =====================================================
       INITIALISE
       ===================================================== */

    if (pageTitle) {
        pageTitle.textContent =
            displayName;
    }

    renderMovies();

    const loading =
        document.getElementById(
            "loading"
        );

    if (loading) {

        loading.classList.add(
            "loaded"
        );

    }

})();