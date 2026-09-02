# Akhil & Manasa WatchList

Home page uses the exact uploaded hero image:
assets/home/akhil-manasa-watchlist.png

Project structure:
- index.html — home/profile page
- data.js — watchlist data
- script.js — home page rendering, progress and sideways profile slider
- styles.css — home page design
- universe.html — universe detail page
- universe.js — universe detail logic
- assets/home/ — home artwork
- assets/profiles/ — profile artwork
- assets/posters/<universe>/ — organized poster folders

Important:
The current supplied data.js is preserved as the data source. The home page supports both
`const universes = [...]` and `const UNIVERSES = [...]`, and both `sections` and `groups`,
so the home page will not break when the data structure is extended.
