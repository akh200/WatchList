/**
 * data.js
 * Edit this file to add, remove, or re-group titles.
 * Each universe has: id, name, accent color, icon key, and groups of items.
 * Each item needs a unique `id` (used for the checkbox state) — keep ids
 * stable once you've started checking things off, or you'll lose progress
 * on renamed items.
 */

const UNIVERSES = [
  {
    id: "marvel",
    name: "Marvel",
    accent: "#E6483F",
    accent2: "#F2A93C",
    icon: "bolt",
    tagline: "The Multiverse Saga, from Tony Stark to today",
    groups: [
      {
        title: "Phase 1 – 3: The Infinity Saga",
        items: [
          { id: "mcu-iron-man-2", title: "Iron Man 2", year: 2010 },
          { id: "mcu-thor", title: "Thor", year: 2011 },
          { id: "mcu-cap-1", title: "Captain America: The First Avenger", year: 2011 },
          { id: "mcu-avengers-1", title: "The Avengers", year: 2012 },
          { id: "mcu-iron-man-3", title: "Iron Man 3", year: 2013 },
          { id: "mcu-thor-2", title: "Thor: The Dark World", year: 2013 },
          { id: "mcu-cap-2", title: "Captain America: The Winter Soldier", year: 2014 },
          { id: "mcu-gotg-1", title: "Guardians of the Galaxy", year: 2014 },
          { id: "mcu-avengers-2", title: "Avengers: Age of Ultron", year: 2015 },
          { id: "mcu-antman-1", title: "Ant-Man", year: 2015 },
          { id: "mcu-cap-3", title: "Captain America: Civil War", year: 2016 },
          { id: "mcu-doctor-strange-1", title: "Doctor Strange", year: 2016 },
          { id: "mcu-gotg-2", title: "Guardians of the Galaxy Vol. 2", year: 2017 },
          { id: "mcu-spiderman-1", title: "Spider-Man: Homecoming", year: 2017 },
          { id: "mcu-thor-3", title: "Thor: Ragnarok", year: 2017 },
          { id: "mcu-black-panther-1", title: "Black Panther", year: 2018 },
          { id: "mcu-infinity-war", title: "Avengers: Infinity War", year: 2018 },
          { id: "mcu-antman-2", title: "Ant-Man and the Wasp", year: 2018 },
          { id: "mcu-captain-marvel", title: "Captain Marvel", year: 2019 },
          { id: "mcu-endgame", title: "Avengers: Endgame", year: 2019 },
          { id: "mcu-spiderman-2", title: "Spider-Man: Far From Home", year: 2019 },
        ],
      },
      {
        title: "Phase 4 – 5",
        items: [
          { id: "mcu-black-widow", title: "Black Widow", year: 2021 },
          { id: "mcu-shang-chi", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021 },
          { id: "mcu-eternals", title: "Eternals", year: 2021 },
          { id: "mcu-spiderman-3", title: "Spider-Man: No Way Home", year: 2021 },
          { id: "mcu-doctor-strange-2", title: "Doctor Strange in the Multiverse of Madness", year: 2022 },
          { id: "mcu-thor-4", title: "Thor: Love and Thunder", year: 2022 },
          { id: "mcu-black-panther-2", title: "Black Panther: Wakanda Forever", year: 2022 },
          { id: "mcu-antman-3", title: "Ant-Man and the Wasp: Quantumania", year: 2023 },
          { id: "mcu-gotg-3", title: "Guardians of the Galaxy Vol. 3", year: 2023 },
          { id: "mcu-marvels", title: "The Marvels", year: 2023 },
          { id: "mcu-deadpool-3", title: "Deadpool & Wolverine", year: 2024 },
        ],
      },
      {
        title: "Disney+ Series",
        items: [
          { id: "mcu-wandavision", title: "WandaVision", year: 2021 },
          { id: "mcu-falcon-ws", title: "The Falcon and the Winter Soldier", year: 2021 },
          { id: "mcu-loki-1", title: "Loki (Season 1)", year: 2021 },
          { id: "mcu-hawkeye", title: "Hawkeye", year: 2021 },
          { id: "mcu-moon-knight", title: "Moon Knight", year: 2022 },
          { id: "mcu-ms-marvel", title: "Ms. Marvel", year: 2022 },
          { id: "mcu-she-hulk", title: "She-Hulk: Attorney at Law", year: 2022 },
          { id: "mcu-secret-invasion", title: "Secret Invasion", year: 2023 },
          { id: "mcu-loki-2", title: "Loki (Season 2)", year: 2023 },
          { id: "mcu-agatha", title: "Agatha All Along", year: 2024 },
          { id: "mcu-daredevil-ba", title: "Daredevil: Born Again", year: 2025 },
        ],
      },
    ],
  },
  {
    id: "dc",
    name: "DC",
    accent: "#3E7BFA",
    accent2: "#9AA9C7",
    icon: "shield",
    tagline: "From the Snyderverse to the new DC Universe",
    groups: [
      {
        title: "Extended Universe & Elseworlds",
        items: [
          { id: "dc-man-of-steel", title: "Man of Steel", year: 2013 },
          { id: "dc-bvs", title: "Batman v Superman: Dawn of Justice", year: 2016 },
          { id: "dc-suicide-squad-1", title: "Suicide Squad", year: 2016 },
          { id: "dc-wonder-woman-1", title: "Wonder Woman", year: 2017 },
          { id: "dc-justice-league", title: "Justice League", year: 2017 },
          { id: "dc-aquaman-1", title: "Aquaman", year: 2018 },
          { id: "dc-shazam-1", title: "Shazam!", year: 2019 },
          { id: "dc-birds-of-prey", title: "Birds of Prey", year: 2020 },
          { id: "dc-ww84", title: "Wonder Woman 1984", year: 2020 },
          { id: "dc-suicide-squad-2", title: "The Suicide Squad", year: 2021 },
          { id: "dc-the-batman", title: "The Batman", year: 2022 },
          { id: "dc-black-adam", title: "Black Adam", year: 2022 },
          { id: "dc-shazam-2", title: "Shazam! Fury of the Gods", year: 2023 },
          { id: "dc-flash", title: "The Flash", year: 2023 },
          { id: "dc-blue-beetle", title: "Blue Beetle", year: 2023 },
          { id: "dc-aquaman-2", title: "Aquaman and the Lost Kingdom", year: 2023 },
          { id: "dc-joker-1", title: "Joker", year: 2019 },
          { id: "dc-joker-2", title: "Joker: Folie à Deux", year: 2024 },
        ],
      },
      {
        title: "New DC Universe (Gunn era)",
        items: [
          { id: "dc-creature-commandos", title: "Creature Commandos", year: 2024 },
          { id: "dc-superman-2025", title: "Superman", year: 2025 },
          { id: "dc-peacemaker-2", title: "Peacemaker (Season 2)", year: 2025 },
        ],
      },
      {
        title: "Live-Action Series",
        items: [
          { id: "dc-titans", title: "Titans", year: 2018 },
          { id: "dc-doom-patrol", title: "Doom Patrol", year: 2019 },
          { id: "dc-peacemaker-1", title: "Peacemaker (Season 1)", year: 2022 },
        ],
      },
      {
        title: "Animated",
        items: [
          { id: "dc-batman-tas", title: "Batman: The Animated Series", year: 1992 },
          { id: "dc-jlu", title: "Justice League Unlimited", year: 2004 },
          { id: "dc-under-the-red-hood", title: "Batman: Under the Red Hood", year: 2010 },
          { id: "dc-harley-quinn", title: "Harley Quinn", year: 2019 },
        ],
      },
    ],
  },
  {
    id: "hp",
    name: "Wizarding World",
    accent: "#2E7D5B",
    accent2: "#B8863B",
    icon: "wand",
    tagline: "Hogwarts and beyond",
    groups: [
      {
        title: "Harry Potter",
        items: [
          { id: "hp-1", title: "Harry Potter and the Philosopher's Stone", year: 2001 },
          { id: "hp-2", title: "Harry Potter and the Chamber of Secrets", year: 2002 },
          { id: "hp-3", title: "Harry Potter and the Prisoner of Azkaban", year: 2004 },
          { id: "hp-4", title: "Harry Potter and the Goblet of Fire", year: 2005 },
          { id: "hp-5", title: "Harry Potter and the Order of the Phoenix", year: 2007 },
          { id: "hp-6", title: "Harry Potter and the Half-Blood Prince", year: 2009 },
          { id: "hp-7a", title: "Harry Potter and the Deathly Hallows: Part 1", year: 2010 },
          { id: "hp-7b", title: "Harry Potter and the Deathly Hallows: Part 2", year: 2011 },
        ],
      },
      {
        title: "Fantastic Beasts",
        items: [
          { id: "fb-1", title: "Fantastic Beasts and Where to Find Them", year: 2016 },
          { id: "fb-2", title: "Fantastic Beasts: The Crimes of Grindelwald", year: 2018 },
          { id: "fb-3", title: "Fantastic Beasts: The Secrets of Dumbledore", year: 2022 },
        ],
      },
      {
        title: "Coming Up",
        items: [
          { id: "hp-hbo-series", title: "Harry Potter (HBO TV series)", year: 2027 },
        ],
      },
    ],
  },
];
