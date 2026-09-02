(function () {

"use strict";

const universeId =
localStorage.getItem("selected-universe");

const universe =
UNIVERSES.find(
item => item.id === universeId
);

if (!universe) {

```
window.location.href =
  "index.html";

return;
```

}

/*

* ---
* STORAGE
* ---

*/

const STORAGE_KEY =
"watchlist-progress";

const state =
JSON.parse(
localStorage.getItem(STORAGE_KEY) || "{}"
);

/*

* ---
* ELEMENTS
* ---

*/

const page =
document.getElementById(
"universePage"
);

const title =
document.getElementById(
"universeTitle"
);

const tagline =
document.getElementById(
"universeTagline"
);

const progressFill =
document.getElementById(
"universeProgressFill"
);

const progressText =
document.getElementById(
"universeProgressText"
);

/*

* ---
* THEME
* ---

*/

page.style.setProperty(
"--accent",
universe.accent
);

page.style.setProperty(
"--accent-2",
universe.accent2
);

/*

* ---
* HEADER
* ---

*/

title.textContent =
universe.name;

tagline.textContent =
universe.tagline;

/*

* ---
* PROGRESS
* ---

*/

const items =
universe.groups.flatMap(
group => group.items
);

const watched =
items.filter(
item => state[item.id] === "watched"
).length;

const percentage =
items.length
? Math.round(
(watched / items.length) * 100
)
: 0;

progressFill.style.width =
`${percentage}%`;

progressText.textContent =
`${watched} / ${items.length} watched · ${percentage}% complete`;

/*

* ---
* BACK
* ---

*/

document
.getElementById("backButton")
.addEventListener(
"click",
function () {

```
    window.location.href =
      "index.html";

  }
);
```

})();
