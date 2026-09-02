/**
 * WatchList Data
 *
 * Every title has a stable ID.
 * DO NOT change an ID after you start tracking progress.
 *
 * Each universe supports:
 *
 * 1. releaseOrder
 * 2. chronologicalOrder
 *
 * The actual movie/series objects live in `items`.
 */

const UNIVERSES = [

  /* =========================================================
     MARVEL
  ========================================================= */

  {
    id: "marvel",

    name: "Marvel",

    accent: "#E6483F",

    accent2: "#F2A93C",

    icon: "bolt",

    tagline:
      "The Marvel Cinematic Universe — follow the story your way.",


    /* -----------------------------------------
       RELEASE ORDER
    ----------------------------------------- */

    releaseOrder: [

      "mcu-iron-man",

      "mcu-iron-man-2",

      "mcu-thor",

      "mcu-cap-1",

      "mcu-avengers-1",

      "mcu-iron-man-3",

      "mcu-thor-2",

      "mcu-cap-2",

      "mcu-gotg-1",

      "mcu-avengers-2",

      "mcu-antman-1",

      "mcu-cap-3",

      "mcu-doctor-strange-1",

      "mcu-gotg-2",

      "mcu-spiderman-1",

      "mcu-thor-3",

      "mcu-black-panther-1",

      "mcu-infinity-war",

      "mcu-antman-2",

      "mcu-captain-marvel",

      "mcu-endgame",

      "mcu-spiderman-2",

      "mcu-black-widow",

      "mcu-shang-chi",

      "mcu-eternals",

      "mcu-spiderman-3",

      "mcu-doctor-strange-2",

      "mcu-thor-4",

      "mcu-black-panther-2",

      "mcu-antman-3",

      "mcu-gotg-3",

      "mcu-marvels",

      "mcu-deadpool-3"

    ],


    /* -----------------------------------------
       CHRONOLOGICAL ORDER
    ----------------------------------------- */

    chronologicalOrder: [

      "mcu-cap-1",

      "mcu-captain-marvel",

      "mcu-iron-man",

      "mcu-iron-man-2",

      "mcu-thor",

      "mcu-avengers-1",

      "mcu-iron-man-3",

      "mcu-thor-2",

      "mcu-cap-2",

      "mcu-gotg-1",

      "mcu-gotg-2",

      "mcu-avengers-2",

      "mcu-antman-1",

      "mcu-cap-3",

      "mcu-black-widow",

      "mcu-black-panther-1",

      "mcu-spiderman-1",

      "mcu-doctor-strange-1",

      "mcu-thor-3",

      "mcu-antman-2",

      "mcu-infinity-war",

      "mcu-endgame",

      "mcu-shang-chi",

      "mcu-eternals",

      "mcu-spiderman-2",

      "mcu-spiderman-3",

      "mcu-doctor-strange-2",

      "mcu-thor-4",

      "mcu-black-panther-2",

      "mcu-antman-3",

      "mcu-gotg-3",

      "mcu-marvels",

      "mcu-deadpool-3"

    ],


    /* -----------------------------------------
       TITLES
    ----------------------------------------- */

    items: [

      {
        id: "mcu-cap-1",
        title: "Captain America: The First Avenger",
        year: 2011,
        type: "movie"
      },

      {
        id: "mcu-captain-marvel",
        title: "Captain Marvel",
        year: 2019,
        type: "movie"
      },

      {
        id: "mcu-iron-man",
        title: "Iron Man",
        year: 2008,
        type: "movie"
      },

      {
        id: "mcu-iron-man-2",
        title: "Iron Man 2",
        year: 2010,
        type: "movie"
      },

      {
        id: "mcu-thor",
        title: "Thor",
        year: 2011,
        type: "movie"
      },

      {
        id: "mcu-avengers-1",
        title: "The Avengers",
        year: 2012,
        type: "movie"
      },

      {
        id: "mcu-iron-man-3",
        title: "Iron Man 3",
        year: 2013,
        type: "movie"
      },

      {
        id: "mcu-thor-2",
        title: "Thor: The Dark World",
        year: 2013,
        type: "movie"
      },

      {
        id: "mcu-cap-2",
        title: "Captain America: The Winter Soldier",
        year: 2014,
        type: "movie"
      },

      {
        id: "mcu-gotg-1",
        title: "Guardians of the Galaxy",
        year: 2014,
        type: "movie"
      },

      {
        id: "mcu-gotg-2",
        title: "Guardians of the Galaxy Vol. 2",
        year: 2017,
        type: "movie"
      },

      {
        id: "mcu-avengers-2",
        title: "Avengers: Age of Ultron",
        year: 2015,
        type: "movie"
      },

      {
        id: "mcu-antman-1",
        title: "Ant-Man",
        year: 2015,
        type: "movie"
      },

      {
        id: "mcu-cap-3",
        title: "Captain America: Civil War",
        year: 2016,
        type: "movie"
      },

      {
        id: "mcu-black-widow",
        title: "Black Widow",
        year: 2021,
        type: "movie"
      },

      {
        id: "mcu-black-panther-1",
        title: "Black Panther",
        year: 2018,
        type: "movie"
      },

      {
        id: "mcu-spiderman-1",
        title: "Spider-Man: Homecoming",
        year: 2017,
        type: "movie"
      },

      {
        id: "mcu-doctor-strange-1",
        title: "Doctor Strange",
        year: 2016,
        type: "movie"
      },

      {
        id: "mcu-thor-3",
        title: "Thor: Ragnarok",
        year: 2017,
        type: "movie"
      },

      {
        id: "mcu-antman-2",
        title: "Ant-Man and the Wasp",
        year: 2018,
        type: "movie"
      },

      {
        id: "mcu-infinity-war",
        title: "Avengers: Infinity War",
        year: 2018,
        type: "movie"
      },

      {
        id: "mcu-endgame",
        title: "Avengers: Endgame",
        year: 2019,
        type: "movie"
      },

      {
        id: "mcu-shang-chi",
        title: "Shang-Chi and the Legend of the Ten Rings",
        year: 2021,
        type: "movie"
      },

      {
        id: "mcu-eternals",
        title: "Eternals",
        year: 2021,
        type: "movie"
      },

      {
        id: "mcu-spiderman-2",
        title: "Spider-Man: Far From Home",
        year: 2019,
        type: "movie"
      },

      {
        id: "mcu-spiderman-3",
        title: "Spider-Man: No Way Home",
        year: 2021,
        type: "movie"
      },

      {
        id: "mcu-doctor-strange-2",
        title: "Doctor Strange in the Multiverse of Madness",
        year: 2022,
        type: "movie"
      },

      {
        id: "mcu-thor-4",
        title: "Thor: Love and Thunder",
        year: 2022,
        type: "movie"
      },

      {
        id: "mcu-black-panther-2",
        title: "Black Panther: Wakanda Forever",
        year: 2022,
        type: "movie"
      },

      {
        id: "mcu-antman-3",
        title: "Ant-Man and the Wasp: Quantumania",
        year: 2023,
        type: "movie"
      },

      {
        id: "mcu-gotg-3",
        title: "Guardians of the Galaxy Vol. 3",
        year: 2023,
        type: "movie"
      },

      {
        id: "mcu-marvels",
        title: "The Marvels",
        year: 2023,
        type: "movie"
      },

      {
        id: "mcu-deadpool-3",
        title: "Deadpool & Wolverine",
        year: 2024,
        type: "movie"
      }

    ]

  },


  /* =========================================================
     DC
  ========================================================= */

  {
    id: "dc",

    name: "DC",

    accent: "#3E7BFA",

    accent2: "#9AA9C7",

    icon: "shield",

    tagline:
      "Gotham, Metropolis and the worlds beyond.",

    releaseOrder: [],

    chronologicalOrder: [],

    items: []

  },


  /* =========================================================
     WIZARDING WORLD
  ========================================================= */

  {
    id: "hp",

    name: "Wizarding World",

    accent: "#2E7D5B",

    accent2: "#B8863B",

    icon: "wand",

    tagline:
      "Hogwarts, magic and the Wizarding World.",

    releaseOrder: [],

    chronologicalOrder: [],

    items: []

  }

];