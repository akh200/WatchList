# Control Room — Universe Watch Tracker

A colorful, dashboard-style checklist for tracking what you've watched across
the Marvel, DC, and Wizarding World universes. Check off a title and the
per-universe bar and the overall ring both update live.

No build step, no dependencies — it's plain HTML/CSS/JS.

## Files

```
index.html    Page structure + reusable <template> markup for each item
styles.css    All visual design (dark theme, per-universe accent colors)
data.js       The actual movie/series lists — edit this to update content
script.js     Renders data.js into the DOM and tracks checked state
README.md     This file
```

## Running it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Putting it on GitHub

```bash
git init
git add .
git commit -m "Initial commit: universe watch tracker"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

To host it for free with **GitHub Pages**:
1. Push the repo as above.
2. On GitHub, go to **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. Your dashboard will be live at `https://<your-username>.github.io/<your-repo>/`.

## Adding or editing titles

Everything you'll want to change day-to-day lives in `data.js`. Each
universe is an object with `groups`, and each group has `items`:

```js
{ id: "mcu-new-movie", title: "Some New Movie", year: 2026 }
```

- `id` must be unique across the whole file — it's the checkbox's key.
- Keep an item's `id` stable once you've started checking things off;
  renaming it will make it show as "unwatched" again.
- Add a new universe by copying one of the existing objects in the
  `UNIVERSES` array and giving it a new `id`, `accent` color, and `icon`
  (`"bolt"`, `"shield"`, or `"wand"` — add more shapes in `script.js`'s
  `ICONS` map if you want a fourth universe).

## Persisting progress across page loads

Right now checked state resets on refresh (it's kept in memory in
`script.js`). For a real deployed site you'll likely want it to stick
around. Two easy options:

**Option A — localStorage (simplest, single device/browser):**
In `script.js`, replace the plain `state` object with one that reads/writes
`localStorage`, e.g. load it with
`JSON.parse(localStorage.getItem("progress") || "{}")` on startup, and call
`localStorage.setItem("progress", JSON.stringify(state))` inside
`updateProgress()`.

**Option B — a backend (synced across devices):**
Swap the state object for calls to a small API (Supabase, Firebase, or your
own) that stores checked IDs per user.

## Ideas for continuous development

- Add posters/stills (own artwork or a licensed API — avoid using official
  studio logos or copyrighted key art directly).
- Add a "watch order" toggle (release order vs. chronological/timeline order).
- Add filtering/search across all universes.
- Track ratings or notes per title, not just watched/unwatched.
- Add more universes (Star Wars, Pixar, etc.) by extending `data.js`.

## Notes on icons

The universe icons are original, abstract shapes (a bolt, a shield, a wand)
rather than the actual Marvel/DC/Wizarding World logos — those are
trademarked by their respective studios, so this project doesn't reproduce
them. Feel free to restyle the icons in `script.js`'s `ICONS` object.
