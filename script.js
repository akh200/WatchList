(function () {

"use strict";

/*

* ---
* WATCHLIST
* ---
*
* This file controls:
*
* 1. Universe profile cards
* 2. Progress calculation
* 3. Local storage
* 4. Navigation into a universe
*

*/

const profilesEl = document.getElementById("profiles");

const overallPctEl = document.getElementById("overallPct");

const overallCountEl = document.getElementById("overallCount");

const profileCountEl = document.getElementById("profileCount");

/*

* ---
* STORAGE
* ---
*
* Progress will survive page refreshes.
*

*/

const STORAGE_KEY = "watchlist-progress";

let state = JSON.parse(
localStorage.getItem(STORAGE_KEY) || "{}"
);

/*

* ---
* ALL ITEMS
* ---

*/

function allItems() {

```
return UNIVERSES.flatMap(universe =>
  universe.groups.flatMap(group =>
    group.items
  )
);
```

}

/*

* ---
* UNIVERSE PROGRESS
* ---

*/

function getUniverseProgress(universe) {

```
const items = universe.groups.flatMap(
  group => group.items
);

const watched = items.filter(
  item => state[item.id] === "watched"
).length;

const halfway = items.filter(
  item => state[item.id] === "halfway"
).length;

const total = items.length;

const completedPercentage = total
  ? Math.round((watched / total) * 100)
  : 0;

return {
  watched,
  halfway,
  total,
  completedPercentage
};
```

}

/*

* ---
* ICONS
* ---

*/

const ICONS = {

```
bolt: `
  <svg viewBox="0 0 24 24">
    <path
      d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
    />
  </svg>
`,

shield: `
  <svg viewBox="0 0 24 24">
    <path
      d="M12 2 4 5v6c0 5 3.4 8.7 8 11
         4.6-2.3 8-6 8-11V5l-8-3Z"
    />
  </svg>
`,

wand: `
  <svg viewBox="0 0 24 24">

    <path
      d="M3 21 15 9"
      stroke="currentColor"
      stroke-width="1.8"
    />

    <path
      d="M17 3l1.5 3.5L22 8
         l-3.5 1.5L17 13
         l-1.5-3.5L12 8
         l3.5-1.5L17 3Z"
    />

  </svg>
`,

star: `
  <svg viewBox="0 0 24 24">

    <path
      d="m12 2 3.1 6.3
         6.9 1-5 4.9
         1.2 6.8L12 17.8
         5.8 21l1.2-6.8
         -5-4.9 6.9-1L12 2Z"
    />

  </svg>
`
```

};

/*

* ---
* CREATE PROFILE CARD
* ---

*/

function createProfile(universe) {

```
const progress = getUniverseProgress(universe);

const card = document.createElement("button");

card.className = "profile-card";

card.type = "button";

card.style.setProperty(
  "--accent",
  universe.accent
);

card.style.setProperty(
  "--accent-2",
  universe.accent2
);


/*
 * Clicking a profile will eventually take us
 * to universe.html
 */

card.addEventListener("click", function () {

  localStorage.setItem(
    "selected-universe",
    universe.id
  );

  window.location.href =
    "universe.html";

});


card.innerHTML = `

  <div class="profile-background"></div>

  <div class="profile-content">

    <div class="profile-icon">

      ${ICONS[universe.icon] || ICONS.star}

    </div>


    <div class="profile-info">

      <h3>
        ${universe.name}
      </h3>

      <p>
        ${universe.tagline}
      </p>

    </div>


    <div class="profile-stats">

      <div class="profile-progress">

        <div
          class="profile-progress-fill"
          style="width:${progress.completedPercentage}%"
        ></div>

      </div>


      <div class="profile-numbers">

        <span>
          ${progress.watched}/${progress.total} watched
        </span>

        ${
          progress.halfway
            ? `<span>${progress.halfway} halfway</span>`
            : ""
        }

      </div>

    </div>


    <div class="profile-arrow">
      →
    </div>

  </div>

`;


return card;
```

}

/*

* ---
* RENDER PROFILES
* ---

*/

function renderProfiles() {

```
profilesEl.innerHTML = "";


UNIVERSES.forEach(universe => {

  profilesEl.appendChild(
    createProfile(universe)
  );

});


profileCountEl.textContent =
  `${UNIVERSES.length} universes`;
```

}

/*

* ---
* OVERALL PROGRESS
* ---

*/

function updateOverallProgress() {

```
const items = allItems();

const watched = items.filter(
  item => state[item.id] === "watched"
).length;

const total = items.length;

const percentage = total
  ? Math.round((watched / total) * 100)
  : 0;


overallPctEl.textContent =
  `${percentage}%`;


overallCountEl.textContent =
  `${watched} / ${total}`;
```

}

/*

* ---
* RESET
* ---

*/

document
.getElementById("resetAll")
.addEventListener("click", function () {

```
  const confirmed = confirm(
    "Reset all WatchList progress?"
  );

  if (!confirmed) {
    return;
  }


  state = {};

  localStorage.removeItem(
    STORAGE_KEY
  );


  renderProfiles();

  updateOverallProgress();

});
```

/*

* ---
* START APP
* ---

*/

renderProfiles();

updateOverallProgress();

})();
