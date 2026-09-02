/**
 * ============================================================
 * WATCHLIST DATA
 * ============================================================
 *
 * Every title has a stable ID.
 * DO NOT change an existing ID after you start tracking it.
 *
 * Each universe contains:
 *
 *   id
 *   name
 *   accent
 *   accent2
 *   icon
 *   tagline
 *   groups
 *
 * Each group contains:
 *
 *   title
 *   items
 *
 * Each item contains:
 *
 *   id
 *   title
 *   year
 *   type
 *
 * `type` can be:
 *
 *   movie
 *   series
 *   special
 *
 * ============================================================
 */

const UNIVERSES = [

  /* ============================================================
     MARVEL
  ============================================================ */

  {
    id: "marvel",

    name: "Marvel",

    accent: "#E6483F",

    accent2: "#F2A93C",

    icon: "bolt",

    tagline:
      "The Marvel Multiverse — MCU, X-Men, Spider-Man and beyond.",

    groups: [

      /* ========================================================
         MCU — RELEASE ORDER
      ======================================================== */

      {
        title: "MCU — Infinity Saga",

        items: [

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
            id: "mcu-cap-1",
            title: "Captain America: The First Avenger",
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
            id: "mcu-doctor-strange-1",
            title: "Doctor Strange",
            year: 2016,
            type: "movie"
          },

          {
            id: "mcu-gotg-2",
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            type: "movie"
          },

          {
            id: "mcu-spiderman-1",
            title: "Spider-Man: Homecoming",
            year: 2017,
            type: "movie"
          },

          {
            id: "mcu-thor-3",
            title: "Thor: Ragnarok",
            year: 2017,
            type: "movie"
          },

          {
            id: "mcu-black-panther-1",
            title: "Black Panther",
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
            id: "mcu-antman-2",
            title: "Ant-Man and the Wasp",
            year: 2018,
            type: "movie"
          },

          {
            id: "mcu-captain-marvel",
            title: "Captain Marvel",
            year: 2019,
            type: "movie"
          },

          {
            id: "mcu-endgame",
            title: "Avengers: Endgame",
            year: 2019,
            type: "movie"
          },

          {
            id: "mcu-spiderman-2",
            title: "Spider-Man: Far From Home",
            year: 2019,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         MCU — PHASE 4/5
      ======================================================== */

      {
        title: "MCU — Multiverse Saga",

        items: [

          {
            id: "mcu-black-widow",
            title: "Black Widow",
            year: 2021,
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


      /* ========================================================
         MCU — SERIES
      ======================================================== */

      {
        title: "MCU — Disney+ Series",

        items: [

          {
            id: "mcu-wandavision",
            title: "WandaVision",
            year: 2021,
            type: "series"
          },

          {
            id: "mcu-falcon-ws",
            title: "The Falcon and the Winter Soldier",
            year: 2021,
            type: "series"
          },

          {
            id: "mcu-loki-1",
            title: "Loki — Season 1",
            year: 2021,
            type: "series"
          },

          {
            id: "mcu-hawkeye",
            title: "Hawkeye",
            year: 2021,
            type: "series"
          },

          {
            id: "mcu-moon-knight",
            title: "Moon Knight",
            year: 2022,
            type: "series"
          },

          {
            id: "mcu-ms-marvel",
            title: "Ms. Marvel",
            year: 2022,
            type: "series"
          },

          {
            id: "mcu-she-hulk",
            title: "She-Hulk: Attorney at Law",
            year: 2022,
            type: "series"
          },

          {
            id: "mcu-secret-invasion",
            title: "Secret Invasion",
            year: 2023,
            type: "series"
          },

          {
            id: "mcu-loki-2",
            title: "Loki — Season 2",
            year: 2023,
            type: "series"
          },

          {
            id: "mcu-agatha",
            title: "Agatha All Along",
            year: 2024,
            type: "series"
          },

          {
            id: "mcu-daredevil-ba",
            title: "Daredevil: Born Again",
            year: 2025,
            type: "series"
          }

        ]
      },


      /* ========================================================
         X-MEN / FOX
      ======================================================== */

      {
        title: "X-Men — Fox Universe",

        items: [

          {
            id: "xmen-1",
            title: "X-Men",
            year: 2000,
            type: "movie"
          },

          {
            id: "xmen-2",
            title: "X2: X-Men United",
            year: 2003,
            type: "movie"
          },

          {
            id: "xmen-last-stand",
            title: "X-Men: The Last Stand",
            year: 2006,
            type: "movie"
          },

          {
            id: "xmen-origins-wolverine",
            title: "X-Men Origins: Wolverine",
            year: 2009,
            type: "movie"
          },

          {
            id: "xmen-first-class",
            title: "X-Men: First Class",
            year: 2011,
            type: "movie"
          },

          {
            id: "xmen-wolverine",
            title: "The Wolverine",
            year: 2013,
            type: "movie"
          },

          {
            id: "xmen-days-future-past",
            title: "X-Men: Days of Future Past",
            year: 2014,
            type: "movie"
          },

          {
            id: "xmen-apocalypse",
            title: "X-Men: Apocalypse",
            year: 2016,
            type: "movie"
          },

          {
            id: "xmen-logan",
            title: "Logan",
            year: 2017,
            type: "movie"
          },

          {
            id: "xmen-dark-phoenix",
            title: "Dark Phoenix",
            year: 2019,
            type: "movie"
          },

          {
            id: "xmen-new-mutants",
            title: "The New Mutants",
            year: 2020,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         DEADPOOL
      ======================================================== */

      {
        title: "Deadpool",

        items: [

          {
            id: "deadpool-1",
            title: "Deadpool",
            year: 2016,
            type: "movie"
          },

          {
            id: "deadpool-2",
            title: "Deadpool 2",
            year: 2018,
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


      /* ========================================================
         SPIDER-MAN — RAIMI
      ======================================================== */

      {
        title: "Spider-Man — Sam Raimi Trilogy",

        items: [

          {
            id: "spiderman-raimi-1",
            title: "Spider-Man",
            year: 2002,
            type: "movie"
          },

          {
            id: "spiderman-raimi-2",
            title: "Spider-Man 2",
            year: 2004,
            type: "movie"
          },

          {
            id: "spiderman-raimi-3",
            title: "Spider-Man 3",
            year: 2007,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         AMAZING SPIDER-MAN
      ======================================================== */

      {
        title: "Spider-Man — The Amazing Spider-Man",

        items: [

          {
            id: "amazing-spiderman-1",
            title: "The Amazing Spider-Man",
            year: 2012,
            type: "movie"
          },

          {
            id: "amazing-spiderman-2",
            title: "The Amazing Spider-Man 2",
            year: 2014,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         SPIDER-VERSE
      ======================================================== */

      {
        title: "Spider-Verse — Animated",

        items: [

          {
            id: "spiderverse-1",
            title: "Spider-Man: Into the Spider-Verse",
            year: 2018,
            type: "movie"
          },

          {
            id: "spiderverse-2",
            title: "Spider-Man: Across the Spider-Verse",
            year: 2023,
            type: "movie"
          },

          {
            id: "spiderverse-3",
            title: "Spider-Man: Beyond the Spider-Verse",
            year: 2027,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         OTHER MARVEL LIVE ACTION
      ======================================================== */

      {
        title: "Other Marvel",

        items: [

          {
            id: "blade-1",
            title: "Blade",
            year: 1998,
            type: "movie"
          },

          {
            id: "blade-2",
            title: "Blade II",
            year: 2002,
            type: "movie"
          },

          {
            id: "blade-3",
            title: "Blade: Trinity",
            year: 2004,
            type: "movie"
          },

          {
            id: "daredevil-2003",
            title: "Daredevil",
            year: 2003,
            type: "movie"
          },

          {
            id: "elektra-2005",
            title: "Elektra",
            year: 2005,
            type: "movie"
          },

          {
            id: "fantastic-four-2005",
            title: "Fantastic Four",
            year: 2005,
            type: "movie"
          },

          {
            id: "fantastic-four-2007",
            title: "Fantastic Four: Rise of the Silver Surfer",
            year: 2007,
            type: "movie"
          },

          {
            id: "ghost-rider-1",
            title: "Ghost Rider",
            year: 2007,
            type: "movie"
          },

          {
            id: "ghost-rider-2",
            title: "Ghost Rider: Spirit of Vengeance",
            year: 2011,
            type: "movie"
          },

          {
            id: "punisher-2004",
            title: "The Punisher",
            year: 2004,
            type: "movie"
          },

          {
            id: "punisher-war-zone",
            title: "Punisher: War Zone",
            year: 2008,
            type: "movie"
          },

          {
            id: "fantastic-four-2015",
            title: "Fantastic Four",
            year: 2015,
            type: "movie"
          },

          {
            id: "venom-1",
            title: "Venom",
            year: 2018,
            type: "movie"
          },

          {
            id: "venom-2",
            title: "Venom: Let There Be Carnage",
            year: 2021,
            type: "movie"
          },

          {
            id: "morbius",
            title: "Morbius",
            year: 2022,
            type: "movie"
          },

          {
            id: "madame-web",
            title: "Madame Web",
            year: 2024,
            type: "movie"
          },

          {
            id: "venom-3",
            title: "Venom: The Last Dance",
            year: 2024,
            type: "movie"
          }

        ]
      }

    ]
  },


  /* ============================================================
     DC
  ============================================================ */

  {
    id: "dc",

    name: "DC",

    accent: "#3E7BFA",

    accent2: "#9AA9C7",

    icon: "shield",

    tagline:
      "DC — DCAU, DCEU, Dark Knight, Elseworlds and the new DC Universe.",

    groups: [

      /* ========================================================
         DCEU
      ======================================================== */

      {
        title: "DCEU",

        items: [

          {
            id: "dc-man-of-steel",
            title: "Man of Steel",
            year: 2013,
            type: "movie"
          },

          {
            id: "dc-bvs",
            title: "Batman v Superman: Dawn of Justice",
            year: 2016,
            type: "movie"
          },

          {
            id: "dc-suicide-squad-1",
            title: "Suicide Squad",
            year: 2016,
            type: "movie"
          },

          {
            id: "dc-wonder-woman-1",
            title: "Wonder Woman",
            year: 2017,
            type: "movie"
          },

          {
            id: "dc-justice-league",
            title: "Justice League",
            year: 2017,
            type: "movie"
          },

          {
            id: "dc-aquaman-1",
            title: "Aquaman",
            year: 2018,
            type: "movie"
          },

          {
            id: "dc-shazam-1",
            title: "Shazam!",
            year: 2019,
            type: "movie"
          },

          {
            id: "dc-birds-of-prey",
            title: "Birds of Prey",
            year: 2020,
            type: "movie"
          },

          {
            id: "dc-ww84",
            title: "Wonder Woman 1984",
            year: 2020,
            type: "movie"
          },

          {
            id: "dc-suicide-squad-2",
            title: "The Suicide Squad",
            year: 2021,
            type: "movie"
          },

          {
            id: "dc-black-adam",
            title: "Black Adam",
            year: 2022,
            type: "movie"
          },

          {
            id: "dc-shazam-2",
            title: "Shazam! Fury of the Gods",
            year: 2023,
            type: "movie"
          },

          {
            id: "dc-flash",
            title: "The Flash",
            year: 2023,
            type: "movie"
          },

          {
            id: "dc-blue-beetle",
            title: "Blue Beetle",
            year: 2023,
            type: "movie"
          },

          {
            id: "dc-aquaman-2",
            title: "Aquaman and the Lost Kingdom",
            year: 2023,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         DARK KNIGHT TRILOGY
      ======================================================== */

      {
        title: "The Dark Knight Trilogy",

        items: [

          {
            id: "dark-knight-begins",
            title: "Batman Begins",
            year: 2005,
            type: "movie"
          },

          {
            id: "dark-knight",
            title: "The Dark Knight",
            year: 2008,
            type: "movie"
          },

          {
            id: "dark-knight-rises",
            title: "The Dark Knight Rises",
            year: 2012,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         BURTON BATMAN
      ======================================================== */

      {
        title: "Batman — Burton Era",

        items: [

          {
            id: "batman-1989",
            title: "Batman",
            year: 1989,
            type: "movie"
          },

          {
            id: "batman-returns",
            title: "Batman Returns",
            year: 1992,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         SCHUMACHER BATMAN
      ======================================================== */

      {
        title: "Batman — Schumacher Era",

        items: [

          {
            id: "batman-forever",
            title: "Batman Forever",
            year: 1995,
            type: "movie"
          },

          {
            id: "batman-robin",
            title: "Batman & Robin",
            year: 1997,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         JOKER
      ======================================================== */

      {
        title: "Joker — Elseworlds",

        items: [

          {
            id: "dc-joker-1",
            title: "Joker",
            year: 2019,
            type: "movie"
          },

          {
            id: "dc-joker-2",
            title: "Joker: Folie à Deux",
            year: 2024,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         REEVES BATMAN
      ======================================================== */

      {
        title: "The Batman — Reeves Universe",

        items: [

          {
            id: "dc-the-batman",
            title: "The Batman",
            year: 2022,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         DCAU — YOUR CANON WATCH ORDER
      ======================================================== */

      {
        title: "DCAU — Canon Watch Order",

        items: [

          {
            id: "dc-dcau-btas",
            title: "Batman: The Animated Series",
            year: 1992,
            type: "series"
          },

          {
            id: "dc-dcau-mask-phantasm",
            title: "Batman: Mask of the Phantasm",
            year: 1993,
            type: "movie"
          },

          {
            id: "dc-dcau-stas",
            title: "Superman: The Animated Series",
            year: 1996,
            type: "series"
          },

          {
            id: "dc-dcau-new-batman",
            title: "The New Batman Adventures",
            year: 1997,
            type: "series"
          },

          {
            id: "dc-dcau-subzero",
            title: "Batman & Mr. Freeze: SubZero",
            year: 1998,
            type: "movie"
          },

          {
            id: "dc-dcau-beyond",
            title: "Batman Beyond",
            year: 1999,
            type: "series"
          },

          {
            id: "dc-dcau-return-joker",
            title: "Batman Beyond: Return of the Joker",
            year: 2000,
            type: "movie"
          },

          {
            id: "dc-dcau-static",
            title: "Static Shock",
            year: 2000,
            type: "series"
          },

          {
            id: "dc-dcau-justice-league",
            title: "Justice League",
            year: 2001,
            type: "series"
          },

          {
            id: "dc-dcau-mystery-batwoman",
            title: "Batman: Mystery of the Batwoman",
            year: 2003,
            type: "movie"
          },

          {
            id: "dc-dcau-jlu",
            title: "Justice League Unlimited",
            year: 2004,
            type: "series"
          },

          {
            id: "dc-dcau-harley-quinn",
            title: "Batman and Harley Quinn",
            year: 2017,
            type: "movie"
          },

          {
            id: "dc-dcau-fatal-five",
            title: "Justice League vs. the Fatal Five",
            year: 2019,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         DCAMU
      ======================================================== */

      {
        title: "DC Animated Movie Universe — DCAMU",

        items: [

          {
            id: "dcam-justice-league-flashpoint",
            title: "Justice League: The Flashpoint Paradox",
            year: 2013,
            type: "movie"
          },

          {
            id: "dcam-justice-league-war",
            title: "Justice League: War",
            year: 2014,
            type: "movie"
          },

          {
            id: "dcam-son-batman",
            title: "Son of Batman",
            year: 2014,
            type: "movie"
          },

          {
            id: "dcam-throne-atlantis",
            title: "Justice League: Throne of Atlantis",
            year: 2015,
            type: "movie"
          },

          {
            id: "dcam-batman-robin",
            title: "Batman vs. Robin",
            year: 2015,
            type: "movie"
          },

          {
            id: "dcam-bad-blood",
            title: "Batman: Bad Blood",
            year: 2016,
            type: "movie"
          },

          {
            id: "dcam-justice-league-teen-titans",
            title: "Justice League vs. Teen Titans",
            year: 2016,
            type: "movie"
          },

          {
            id: "dcam-justice-league-dark",
            title: "Justice League Dark",
            year: 2017,
            type: "movie"
          },

          {
            id: "dcam-judas-contract",
            title: "Teen Titans: The Judas Contract",
            year: 2017,
            type: "movie"
          },

          {
            id: "dcam-suicide-squad-hell-to-pay",
            title: "Suicide Squad: Hell to Pay",
            year: 2018,
            type: "movie"
          },

          {
            id: "dcam-death-superman",
            title: "The Death of Superman",
            year: 2018,
            type: "movie"
          },

          {
            id: "dcam-reign-supermen",
            title: "Reign of the Supermen",
            year: 2019,
            type: "movie"
          },

          {
            id: "dcam-batman-hush",
            title: "Batman: Hush",
            year: 2019,
            type: "movie"
          },

          {
            id: "dcam-wonder-woman-bloodlines",
            title: "Wonder Woman: Bloodlines",
            year: 2019,
            type: "movie"
          },

          {
            id: "dcam-apokolips-war",
            title: "Justice League Dark: Apokolips War",
            year: 2020,
            type: "movie"
          }

        ]
      },


      /* ========================================================
         DC LIVE ACTION SERIES
      ======================================================== */

      {
        title: "DC Live-Action Series",

        items: [

          {
            id: "dc-titans",
            title: "Titans",
            year: 2018,
            type: "series"
          },

          {
            id: "dc-doom-patrol",
            title: "Doom Patrol",
            year: 2019,
            type: "series"
          },

          {
            id: "dc-peacemaker-1",
            title: "Peacemaker — Season 1",
            year: 2022,
            type: "series"
          },

          {
            id: "dc-peacemaker-2",
            title: "Peacemaker — Season 2",
            year: 2025,
            type: "series"
          }

        ]
      },


      /* ========================================================
         NEW DC UNIVERSE
      ======================================================== */

      {
        title: "New DC Universe",

        items: [

          {
            id: "dc-creature-commandos",
            title: "Creature Commandos",
            year: 2024,
            type: "series"
          },

          {
            id: "dc-superman-2025",
            title: "Superman",
            year: 2025,
            type: "movie"
          }

        ]
      }

    ]
  },


  /* ============================================================
     WIZARDING WORLD
  ============================================================ */

  {
    id: "hp",

    name: "Wizarding World",

    accent: "#2E7D5B",

    accent2: "#B8863B",

    icon: "wand",

    tagline:
      "Hogwarts, Fantastic Beasts and the Wizarding World.",

    groups: [

      {
        title: "Harry Potter — Release Order",

        items: [

          {
            id: "hp-1",
            title: "Harry Potter and the Philosopher's Stone",
            year: 2001,
            type: "movie"
          },

          {
            id: "hp-2",
            title: "Harry Potter and the Chamber of Secrets",
            year: 2002,
            type: "movie"
          },

          {
            id: "hp-3",
            title: "Harry Potter and the Prisoner of Azkaban",
            year: 2004,
            type: "movie"
          },

          {
            id: "hp-4",
            title: "Harry Potter and the Goblet of Fire",
            year: 2005,
            type: "movie"
          },

          {
            id: "hp-5",
            title: "Harry Potter and the Order of the Phoenix",
            year: 2007,
            type: "movie"
          },

          {
            id: "hp-6",
            title: "Harry Potter and the Half-Blood Prince",
            year: 2009,
            type: "movie"
          },

          {
            id: "hp-7a",
            title: "Harry Potter and the Deathly Hallows: Part 1",
            year: 2010,
            type: "movie"
          },

          {
            id: "hp-7b",
            title: "Harry Potter and the Deathly Hallows: Part 2",
            year: 2011,
            type: "movie"
          }

        ]
      },


      {
        title: "Fantastic Beasts",

        items: [

          {
            id: "fb-1",
            title: "Fantastic Beasts and Where to Find Them",
            year: 2016,
            type: "movie"
          },

          {
            id: "fb-2",
            title: "Fantastic Beasts: The Crimes of Grindelwald",
            year: 2018,
            type: "movie"
          },

          {
            id: "fb-3",
            title: "Fantastic Beasts: The Secrets of Dumbledore",
            year: 2022,
            type: "movie"
          }

        ]
      },


      {
        title: "Wizarding World — Coming",

        items: [

          {
            id: "hp-hbo-series",
            title: "Harry Potter — HBO Series",
            year: 2027,
            type: "series"
          }

        ]
      }

    ]
  },


  /* ============================================================
     STAR WARS
  ============================================================ */

  {
    id: "star-wars",

    name: "Star Wars",

    accent: "#5C6BC0",

    accent2: "#ECEFF1",

    icon: "star",

    tagline:
      "A long time ago in a galaxy far, far away...",

    groups: [

      {
        title: "Skywalker Saga",

        items: [

          {
            id: "sw-episode-1",
            title: "Star Wars: Episode I — The Phantom Menace",
            year: 1999,
            type: "movie"
          },

          {
            id: "sw-episode-2",
            title: "Star Wars: Episode II — Attack of the Clones",
            year: 2002,
            type: "movie"
          },

          {
            id: "sw-episode-3",
            title: "Star Wars: Episode III — Revenge of the Sith",
            year: 2005,
            type: "movie"
          },

          {
            id: "sw-episode-4",
            title: "Star Wars: Episode IV — A New Hope",
            year: 1977,
            type: "movie"
          },

          {
            id: "sw-episode-5",
            title: "Star Wars: Episode V — The Empire Strikes Back",
            year: 1980,
            type: "movie"
          },

          {
            id: "sw-episode-6",
            title: "Star Wars: Episode VI — Return of the Jedi",
            year: 1983,
            type: "movie"
          },

          {
            id: "sw-episode-7",
            title: "Star Wars: Episode VII — The Force Awakens",
            year: 2015,
            type: "movie"
          },

          {
            id: "sw-episode-8",
            title: "Star Wars: Episode VIII — The Last Jedi",
            year: 2017,
            type: "movie"
          },

          {
            id: "sw-episode-9",
            title: "Star Wars: Episode IX — The Rise of Skywalker",
            year: 2019,
            type: "movie"
          }

        ]
      },


      {
        title: "Star Wars — Standalone Films",

        items: [

          {
            id: "sw-rogue-one",
            title: "Rogue One: A Star Wars Story",
            year: 2016,
            type: "movie"
          },

          {
            id: "sw-solo",
            title: "Solo: A Star Wars Story",
            year: 2018,
            type: "movie"
          }

        ]
      },


      {
        title: "Star Wars — Series",

        items: [

          {
            id: "sw-clone-wars",
            title: "Star Wars: The Clone Wars",
            year: 2008,
            type: "series"
          },

          {
            id: "sw-rebels",
            title: "Star Wars Rebels",
            year: 2014,
            type: "series"
          },

          {
            id: "sw-mandalorian",
            title: "The Mandalorian",
            year: 2019,
            type: "series"
          },

          {
            id: "sw-andor",
            title: "Andor",
            year: 2022,
            type: "series"
          },

          {
            id: "sw-ahsoka",
            title: "Ahsoka",
            year: 2023,
            type: "series"
          }

        ]
      }

    ]
  },


  /* ============================================================
     STAR TREK
  ============================================================ */

  {
    id: "star-trek",

    name: "Star Trek",

    accent: "#1976D2",

    accent2: "#7E57C2",

    icon: "planet",

    tagline:
      "Explore strange new worlds and boldly go where no one has gone before.",

    groups: [

      {
        title: "Star Trek — Original Films",

        items: [

          {
            id: "st-motion-picture",
            title: "Star Trek: The Motion Picture",
            year: 1979,
            type: "movie"
          },

          {
            id: "st-wrath-khan",
            title: "Star Trek II: The Wrath of Khan",
            year: 1982,
            type: "movie"
          },

          {
            id: "st-search-spock",
            title: "Star Trek III: The Search for Spock",
            year: 1984,
            type: "movie"
          },

          {
            id: "st-voyage-home",
            title: "Star Trek IV: The Voyage Home",
            year: 1986,
            type: "movie"
          },

          {
            id: "st-final-frontier",
            title: "Star Trek V: The Final Frontier",
            year: 1989,
            type: "movie"
          },

          {
            id: "st-undiscovered-country",
            title: "Star Trek VI: The Undiscovered Country",
            year: 1991,
            type: "movie"
          }

        ]
      },


      {
        title: "Star Trek — Next Generation Films",

        items: [

          {
            id: "st-generations",
            title: "Star Trek: Generations",
            year: 1994,
            type: "movie"
          },

          {
            id: "st-first-contact",
            title: "Star Trek: First Contact",
            year: 1996,
            type: "movie"
          },

          {
            id: "st-insurrection",
            title: "Star Trek: Insurrection",
            year: 1998,
            type: "movie"
          },

          {
            id: "st-nemesis",
            title: "Star Trek: Nemesis",
            year: 2002,
            type: "movie"
          }

        ]
      },


      {
        title: "Star Trek — Kelvin Timeline",

        items: [

          {
            id: "st-2009",
            title: "Star Trek",
            year: 2009,
            type: "movie"
          },

          {
            id: "st-into-darkness",
            title: "Star Trek Into Darkness",
            year: 2013,
            type: "movie"
          },

          {
            id: "st-beyond",
            title: "Star Trek Beyond",
            year: 2016,
            type: "movie"
          }

        ]
      },


      {
        title: "Star Trek — Modern Series",

        items: [

          {
            id: "st-discovery",
            title: "Star Trek: Discovery",
            year: 2017,
            type: "series"
          },

          {
            id: "st-picard",
            title: "Star Trek: Picard",
            year: 2020,
            type: "series"
          },

          {
            id: "st-strange-new-worlds",
            title: "Star Trek: Strange New Worlds",
            year: 2022,
            type: "series"
          }

        ]
      }

    ]
  }

];