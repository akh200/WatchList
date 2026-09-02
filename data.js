/*
========================================================
WATCHLIST DATA
========================================================

Structure:

UNIVERSE
    ↓
GROUP / CONTINUITY
    ↓
TITLE
    ↓
description
trailer
poster
status
rating

Release Order is used inside every group.

status is NOT stored here permanently.
It is stored in browser localStorage.
========================================================
*/

const UNIVERSES = [

    {
        id: "marvel",

        name: "Marvel",

        accent: "#E53935",
        accent2: "#FFB300",

        icon: "bolt",

        tagline:
            "Marvel — MCU, X-Men, Spider-Man and the wider Marvel screen universe.",

        groups: [

            {
                title: "MCU — Release Order",

                items: [

                    {
                        id: "mcu-iron-man",

                        title: "Iron Man",

                        year: 2008,

                        description:
                            "After being captured in Afghanistan, billionaire inventor Tony Stark builds a powered suit of armor and becomes Iron Man.",

                        trailer:
                            "https://www.youtube.com/watch?v=8ugaeA-nMTc",

                        poster: ""
                    },

                    {
                        id: "mcu-incredible-hulk",

                        title: "The Incredible Hulk",

                        year: 2008,

                        description:
                            "Bruce Banner searches for a cure for the gamma radiation that transformed him into the Hulk while being hunted by the military.",

                        trailer:
                            "https://www.youtube.com/watch?v=xbqNb2PFKKA",

                        poster: ""
                    },

                    {
                        id: "mcu-iron-man-2",

                        title: "Iron Man 2",

                        year: 2010,

                        description:
                            "Tony Stark faces new enemies and struggles with the consequences of revealing his identity as Iron Man.",

                        trailer:
                            "https://www.youtube.com/watch?v=wKtcmiifycU",

                        poster: ""
                    },

                    {
                        id: "mcu-thor",

                        title: "Thor",

                        year: 2011,

                        description:
                            "The arrogant god Thor is banished to Earth and must learn humility before he can reclaim his powers.",

                        trailer:
                            "https://www.youtube.com/watch?v=JOddp-nlNvQ",

                        poster: ""
                    },

                    {
                        id: "mcu-captain-america",

                        title: "Captain America: The First Avenger",

                        year: 2011,

                        description:
                            "Steve Rogers becomes Captain America and joins the fight against Hydra during World War II.",

                        trailer:
                            "https://www.youtube.com/watch?v=JerVrbLldXw",

                        poster: ""
                    },

                    {
                        id: "mcu-avengers",

                        title: "The Avengers",

                        year: 2012,

                        description:
                            "Earth's greatest heroes must unite when Loki threatens the planet with an alien invasion.",

                        trailer:
                            "https://www.youtube.com/watch?v=eOrNdBpGMv8",

                        poster: ""
                    },

                    {
                        id: "mcu-iron-man-3",

                        title: "Iron Man 3",

                        year: 2013,

                        description:
                            "Tony Stark faces a powerful enemy known as the Mandarin while struggling with the aftermath of the Battle of New York.",

                        trailer:
                            "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc",

                        poster: ""
                    },

                    {
                        id: "mcu-thor-dark-world",

                        title: "Thor: The Dark World",

                        year: 2013,

                        description:
                            "Thor battles an ancient enemy seeking to plunge the universe into darkness.",

                        trailer:
                            "https://www.youtube.com/watch?v=npvJ9FTgZbM",

                        poster: ""
                    },

                    {
                        id: "mcu-winter-soldier",

                        title: "Captain America: The Winter Soldier",

                        year: 2014,

                        description:
                            "Steve Rogers uncovers a conspiracy inside S.H.I.E.L.D. while facing a mysterious assassin known as the Winter Soldier.",

                        trailer:
                            "https://www.youtube.com/watch?v=7SlILk2WMTI",

                        poster: ""
                    },

                    {
                        id: "mcu-guardians",

                        title: "Guardians of the Galaxy",

                        year: 2014,

                        description:
                            "Peter Quill and a group of unlikely criminals become the Guardians of the Galaxy after stealing a mysterious cosmic orb.",

                        trailer:
                            "https://www.youtube.com/watch?v=d96cjJhvlMA",

                        poster: ""
                    }

                ]
            },

            {
                title: "X-Men / Fox — Release Order",

                items: [

                    {
                        id: "xmen-1",

                        title: "X-Men",

                        year: 2000,

                        description:
                            "Mutants with extraordinary abilities find themselves caught between a world that fears them and powerful forces seeking control.",

                        trailer:
                            "https://www.youtube.com/watch?v=KyA9AtUOqRM",

                        poster: ""
                    },

                    {
                        id: "xmen-2",

                        title: "X2: X-Men United",

                        year: 2003,

                        description:
                            "The X-Men must unite with former enemies when a government attack threatens mutantkind.",

                        trailer:
                            "https://www.youtube.com/watch?v=2l3D0r0m8t0",

                        poster: ""
                    },

                    {
                        id: "xmen-last-stand",

                        title: "X-Men: The Last Stand",

                        year: 2006,

                        description:
                            "A controversial mutant cure divides the X-Men as an ancient mutant threat emerges.",

                        trailer:
                            "https://www.youtube.com/watch?v=ZQ1xY0G7j5s",

                        poster: ""
                    }

                ]
            },

            {
                title: "Spider-Man — Raimi",

                items: [

                    {
                        id: "spiderman-raimi-1",

                        title: "Spider-Man",

                        year: 2002,

                        description:
                            "Peter Parker gains extraordinary powers after being bitten by a genetically engineered spider.",

                        trailer:
                            "https://www.youtube.com/watch?v=t06RUxPbp_c",

                        poster: ""
                    },

                    {
                        id: "spiderman-raimi-2",

                        title: "Spider-Man 2",

                        year: 2004,

                        description:
                            "Peter Parker struggles to balance his personal life with his responsibility as Spider-Man while facing Doctor Octopus.",

                        trailer:
                            "https://www.youtube.com/watch?v=1s9Yln0YwCw",

                        poster: ""
                    },

                    {
                        id: "spiderman-raimi-3",

                        title: "Spider-Man 3",

                        year: 2007,

                        description:
                            "Peter Parker faces new enemies and the darker side of his own powers.",

                        trailer:
                            "https://www.youtube.com/watch?v=e5wUilOeOmg",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "dc",

        name: "DC",

        accent: "#1769E0",
        accent2: "#00B8D4",

        icon: "shield",

        tagline:
            "DC — DCEU, DCU, DCAU, DCAMU, Tomorrowverse and major standalone continuities.",

        groups: [

            {
                title: "The Dark Knight Trilogy",

                items: [

                    {
                        id: "dark-knight-begins",

                        title: "Batman Begins",

                        year: 2005,

                        description:
                            "Bruce Wayne begins his transformation into Batman and returns to Gotham to fight the criminal forces consuming his city.",

                        trailer:
                            "https://www.youtube.com/watch?v=neY2xVmOfUM",

                        poster: ""
                    },

                    {
                        id: "dark-knight",

                        title: "The Dark Knight",

                        year: 2008,

                        description:
                            "Batman faces the Joker, a criminal mastermind who pushes Gotham into chaos.",

                        trailer:
                            "https://www.youtube.com/watch?v=EXeTwQWrcwY",

                        poster: ""
                    },

                    {
                        id: "dark-knight-rises",

                        title: "The Dark Knight Rises",

                        year: 2012,

                        description:
                            "Batman returns from retirement when the terrorist Bane threatens to destroy Gotham.",

                        trailer:
                            "https://www.youtube.com/watch?v=g8evyE9TuYk",

                        poster: ""
                    }

                ]
            },

            {
                title: "DCEU — Release Order",

                items: [

                    {
                        id: "dc-man-of-steel",

                        title: "Man of Steel",

                        year: 2013,

                        description:
                            "Clark Kent discovers his Kryptonian heritage and embraces his destiny as Earth's protector.",

                        trailer:
                            "https://www.youtube.com/watch?v=T6DJcgm3wNY",

                        poster: ""
                    },

                    {
                        id: "dc-batman-v-superman",

                        title: "Batman v Superman: Dawn of Justice",

                        year: 2016,

                        description:
                            "Batman and Superman clash over their different approaches to protecting humanity while a greater threat emerges.",

                        trailer:
                            "https://www.youtube.com/watch?v=0WWzgGyAH6Y",

                        poster: ""
                    },

                    {
                        id: "dc-suicide-squad",

                        title: "Suicide Squad",

                        year: 2016,

                        description:
                            "A secret government agency recruits dangerous criminals for an impossible mission.",

                        trailer:
                            "https://www.youtube.com/watch?v=CmRih_VtVAs",

                        poster: ""
                    },

                    {
                        id: "dc-wonder-woman",

                        title: "Wonder Woman",

                        year: 2017,

                        description:
                            "Diana leaves Themyscira and enters the world of humanity during World War I.",

                        trailer:
                            "https://www.youtube.com/watch?v=1Q8fG0TtVAY",

                        poster: ""
                    },

                    {
                        id: "dc-justice-league",

                        title: "Justice League",

                        year: 2017,

                        description:
                            "Batman recruits a team of heroes to defend Earth from an apocalyptic threat.",

                        trailer:
                            "https://www.youtube.com/watch?v=3cxixDgHUYw",

                        poster: ""
                    }

                ]
            },

            {
                title: "DCAU — Canon",

                items: [

                    {
                        id: "dcau-btas",

                        title: "Batman: The Animated Series",

                        year: 1992,

                        type: "series",

                        description:
                            "Batman protects Gotham City while confronting some of his most famous villains.",

                        trailer:
                            "",

                        poster: ""
                    },

                    {
                        id: "dcau-mask-phantasm",

                        title: "Batman: Mask of the Phantasm",

                        year: 1993,

                        description:
                            "Batman investigates a mysterious vigilante while confronting memories from his past.",

                        trailer:
                            "",

                        poster: ""
                    },

                    {
                        id: "dcau-superman",

                        title: "Superman: The Animated Series",

                        year: 1996,

                        type: "series",

                        description:
                            "Superman protects Metropolis while facing threats from Earth and beyond.",

                        trailer:
                            "",

                        poster: ""
                    },

                    {
                        id: "dcau-justice-league",

                        title: "Justice League",

                        year: 2001,

                        type: "series",

                        description:
                            "Batman, Superman, Wonder Woman and other heroes form Earth's premier superhero team.",

                        trailer:
                            "",

                        poster: ""
                    },

                    {
                        id: "dcau-jlu",

                        title: "Justice League Unlimited",

                        year: 2004,

                        type: "series",

                        description:
                            "The Justice League expands into a massive alliance of heroes defending Earth from increasingly dangerous threats.",

                        trailer:
                            "",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "star-wars",

        name: "Star Wars",

        accent: "#2636C9",
        accent2: "#00C2FF",

        icon: "star",

        tagline:
            "A galaxy far, far away — the Star Wars screen saga.",

        groups: [

            {
                title: "Skywalker Saga — Release Order",

                items: [

                    {
                        id: "sw-episode-4",

                        title: "Star Wars: Episode IV — A New Hope",

                        year: 1977,

                        description:
                            "A young farm boy joins a rebellion against the Galactic Empire and discovers a path toward becoming a Jedi.",

                        trailer:
                            "https://www.youtube.com/watch?v=vZ734NWnAHA",

                        poster: ""
                    },

                    {
                        id: "sw-episode-5",

                        title: "Star Wars: Episode V — The Empire Strikes Back",

                        year: 1980,

                        description:
                            "The Rebel Alliance suffers a devastating defeat while Luke Skywalker begins his Jedi training.",

                        trailer:
                            "https://www.youtube.com/watch?v=JNwNXF9Y6kY",

                        poster: ""
                    },

                    {
                        id: "sw-episode-6",

                        title: "Star Wars: Episode VI — Return of the Jedi",

                        year: 1983,

                        description:
                            "The Rebels launch a final assault against the Empire while Luke confronts Darth Vader.",

                        trailer:
                            "https://www.youtube.com/watch?v=5UfA_aKBGMc",

                        poster: ""
                    },

                    {
                        id: "sw-episode-1",

                        title: "Star Wars: Episode I — The Phantom Menace",

                        year: 1999,

                        description:
                            "Two Jedi protect a young queen and encounter a mysterious boy with extraordinary potential.",

                        trailer:
                            "https://www.youtube.com/watch?v=bD7bpG-zDJQ",

                        poster: ""
                    },

                    {
                        id: "sw-episode-2",

                        title: "Star Wars: Episode II — Attack of the Clones",

                        year: 2002,

                        description:
                            "Anakin Skywalker and Obi-Wan Kenobi uncover a growing Separatist movement as the galaxy approaches war.",

                        trailer:
                            "https://www.youtube.com/watch?v=gYbW1F_c9Mc",

                        poster: ""
                    },

                    {
                        id: "sw-episode-3",

                        title: "Star Wars: Episode III — Revenge of the Sith",

                        year: 2005,

                        description:
                            "The Clone Wars reach their climax as Anakin Skywalker falls toward the dark side.",

                        trailer:
                            "https://www.youtube.com/watch?v=5UnjrG_N8hU",

                        poster: ""
                    },

                    {
                        id: "sw-episode-7",

                        title: "Star Wars: Episode VII — The Force Awakens",

                        year: 2015,

                        description:
                            "A new generation of heroes rises as the First Order threatens the galaxy.",

                        trailer:
                            "https://www.youtube.com/watch?v=sGbxmsDFVnE",

                        poster: ""
                    },

                    {
                        id: "sw-episode-8",

                        title: "Star Wars: Episode VIII — The Last Jedi",

                        year: 2017,

                        description:
                            "Rey seeks answers from Luke Skywalker while the Resistance struggles to survive.",

                        trailer:
                            "https://www.youtube.com/watch?v=Q0CbN8sfihY",

                        poster: ""
                    },

                    {
                        id: "sw-episode-9",

                        title: "Star Wars: Episode IX — The Rise of Skywalker",

                        year: 2019,

                        description:
                            "The surviving Resistance faces the final battle against the forces of the First Order.",

                        trailer:
                            "https://www.youtube.com/watch?v=8Qn_spdM5Zg",

                        poster: ""
                    }

                ]
            },

            {
                title: "Standalone Films",

                items: [

                    {
                        id: "sw-rogue-one",

                        title: "Rogue One: A Star Wars Story",

                        year: 2016,

                        description:
                            "A group of unlikely heroes joins a desperate mission to steal the plans for the Death Star.",

                        trailer:
                            "https://www.youtube.com/watch?v=frdj1zb9sMY",

                        poster: ""
                    },

                    {
                        id: "sw-solo",

                        title: "Solo: A Star Wars Story",

                        year: 2018,

                        description:
                            "A young Han Solo embarks on a dangerous adventure that introduces him to Chewbacca and Lando Calrissian.",

                        trailer:
                            "https://www.youtube.com/watch?v=jPEYpryMp2s",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "star-trek",

        name: "Star Trek",

        accent: "#1565C0",
        accent2: "#7E57C2",

        icon: "planet",

        tagline:
            "Explore strange new worlds across the Star Trek screen universe.",

        groups: [

            {
                title: "Kelvin Timeline — Release Order",

                items: [

                    {
                        id: "trek-2009",

                        title: "Star Trek",

                        year: 2009,

                        description:
                            "A new generation of the Enterprise crew begins an alternate journey through the Kelvin timeline.",

                        trailer:
                            "https://www.youtube.com/watch?v=p8fE7l6s3xU",

                        poster: ""
                    },

                    {
                        id: "trek-into-darkness",

                        title: "Star Trek Into Darkness",

                        year: 2013,

                        description:
                            "Captain Kirk and the Enterprise crew confront a dangerous adversary who threatens the Federation.",

                        trailer:
                            "https://www.youtube.com/watch?v=r5gdbUCZ-0s",

                        poster: ""
                    },

                    {
                        id: "trek-beyond",

                        title: "Star Trek Beyond",

                        year: 2016,

                        description:
                            "The Enterprise crew becomes stranded on an unknown planet and faces a powerful new enemy.",

                        trailer:
                            "https://www.youtube.com/watch?v=XRVD32rnzOw",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "hp",

        name: "Wizarding World",

        accent: "#263238",
        accent2: "#D4AF37",

        icon: "wand",

        tagline:
            "Harry Potter, Fantastic Beasts and the Wizarding World.",

        groups: [

            {
                title: "Harry Potter — Release Order",

                items: [

                    {
                        id: "hp-1",

                        title:
                            "Harry Potter and the Philosopher's Stone",

                        year: 2001,

                        description:
                            "Harry Potter discovers that he is a wizard and begins his first year at Hogwarts.",

                        trailer:
                            "https://www.youtube.com/watch?v=VyHV0BRtdxo",

                        poster: ""
                    },

                    {
                        id: "hp-2",

                        title:
                            "Harry Potter and the Chamber of Secrets",

                        year: 2002,

                        description:
                            "Harry returns to Hogwarts and investigates a mysterious chamber threatening the students.",

                        trailer:
                            "https://www.youtube.com/watch?v=jBltxS8SazM",

                        poster: ""
                    },

                    {
                        id: "hp-3",

                        title:
                            "Harry Potter and the Prisoner of Azkaban",

                        year: 2004,

                        description:
                            "Harry learns more about his parents while a dangerous prisoner escapes from Azkaban.",

                        trailer:
                            "https://www.youtube.com/watch?v=lAxgztbYDbs",

                        poster: ""
                    },

                    {
                        id: "hp-4",

                        title:
                            "Harry Potter and the Goblet of Fire",

                        year: 2005,

                        description:
                            "Harry is unexpectedly entered into the dangerous Triwizard Tournament.",

                        trailer:
                            "https://www.youtube.com/watch?v=3EGojp4Hh6I",

                        poster: ""
                    },

                    {
                        id: "hp-5",

                        title:
                            "Harry Potter and the Order of the Phoenix",

                        year: 2007,

                        description:
                            "Harry forms a secret group of students to prepare for the return of Voldemort.",

                        trailer:
                            "https://www.youtube.com/watch?v=y6ZW7KXaXYk",

                        poster: ""
                    },

                    {
                        id: "hp-6",

                        title:
                            "Harry Potter and the Half-Blood Prince",

                        year: 2009,

                        description:
                            "Harry and Dumbledore investigate Voldemort's past and search for the secret behind his immortality.",

                        trailer:
                            "https://www.youtube.com/watch?v=sg81Lts5kYY",

                        poster: ""
                    },

                    {
                        id: "hp-7-1",

                        title:
                            "Harry Potter and the Deathly Hallows: Part 1",

                        year: 2010,

                        description:
                            "Harry, Ron and Hermione leave Hogwarts to find the objects necessary to defeat Voldemort.",

                        trailer:
                            "https://www.youtube.com/watch?v=MxqsmsA8y5k",

                        poster: ""
                    },

                    {
                        id: "hp-7-2",

                        title:
                            "Harry Potter and the Deathly Hallows: Part 2",

                        year: 2011,

                        description:
                            "The final battle for Hogwarts begins as Harry faces Voldemort for the last time.",

                        trailer:
                            "https://www.youtube.com/watch?v=5NYt1qirBWg",

                        poster: ""
                    }

                ]
            },

            {
                title: "Fantastic Beasts",

                items: [

                    {
                        id: "fantastic-beasts-1",

                        title:
                            "Fantastic Beasts and Where to Find Them",

                        year: 2016,

                        description:
                            "Magizoologist Newt Scamander arrives in New York with a mysterious case full of magical creatures.",

                        trailer:
                            "https://www.youtube.com/watch?v=Vso5o11LuGU",

                        poster: ""
                    },

                    {
                        id: "fantastic-beasts-2",

                        title:
                            "Fantastic Beasts: The Crimes of Grindelwald",

                        year: 2018,

                        description:
                            "Newt is recruited to stop the dark wizard Gellert Grindelwald.",

                        trailer:
                            "https://www.youtube.com/watch?v=8bYBOVWLNIs",

                        poster: ""
                    },

                    {
                        id: "fantastic-beasts-3",

                        title:
                            "Fantastic Beasts: The Secrets of Dumbledore",

                        year: 2022,

                        description:
                            "Dumbledore and Newt assemble a team to confront Grindelwald and his growing movement.",

                        trailer:
                            "https://www.youtube.com/watch?v=Y9dr2zw-TXQ",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "middle-earth",

        name: "Middle-earth",

        accent: "#4E342E",
        accent2: "#C9A227",

        icon: "ring",

        tagline:
            "The Lord of the Rings, The Hobbit and the world of Middle-earth.",

        groups: [

            {
                title: "The Lord of the Rings",

                items: [

                    {
                        id: "lotr-fellowship",

                        title:
                            "The Lord of the Rings: The Fellowship of the Ring",

                        year: 2001,

                        description:
                            "Frodo Baggins inherits a powerful ring and begins a dangerous journey to destroy it.",

                        trailer:
                            "https://www.youtube.com/watch?v=V75dMMIW2B4",

                        poster: ""
                    },

                    {
                        id: "lotr-two-towers",

                        title:
                            "The Lord of the Rings: The Two Towers",

                        year: 2002,

                        description:
                            "The Fellowship is divided as the forces of Middle-earth prepare for a massive war.",

                        trailer:
                            "https://www.youtube.com/watch?v=LbfMDwc4azU",

                        poster: ""
                    },

                    {
                        id: "lotr-return-king",

                        title:
                            "The Lord of the Rings: The Return of the King",

                        year: 2003,

                        description:
                            "The final battle for Middle-earth begins as Frodo and Sam approach Mount Doom.",

                        trailer:
                            "https://www.youtube.com/watch?v=r5X-hFf6Bwo",

                        poster: ""
                    }

                ]
            },

            {
                title: "The Hobbit",

                items: [

                    {
                        id: "hobbit-1",

                        title:
                            "The Hobbit: An Unexpected Journey",

                        year: 2012,

                        description:
                            "Bilbo Baggins joins a company of dwarves on a quest to reclaim their homeland.",

                        trailer:
                            "https://www.youtube.com/watch?v=SDnYMbYB-nU",

                        poster: ""
                    },

                    {
                        id: "hobbit-2",

                        title:
                            "The Hobbit: The Desolation of Smaug",

                        year: 2013,

                        description:
                            "Bilbo and the dwarves continue their journey toward the Lonely Mountain and encounter the dragon Smaug.",

                        trailer:
                            "https://www.youtube.com/watch?v=OPVWy1tFXuc",

                        poster: ""
                    },

                    {
                        id: "hobbit-3",

                        title:
                            "The Hobbit: The Battle of the Five Armies",

                        year: 2014,

                        description:
                            "The armies of Middle-earth clash over the Lonely Mountain.",

                        trailer:
                            "https://www.youtube.com/watch?v=iVAgTiBrrDA",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "transformers",

        name: "Transformers",

        accent: "#E65100",
        accent2: "#546E7A",

        icon: "robot",

        tagline:
            "Autobots, Decepticons and the Transformers screen saga.",

        groups: [

            {
                title: "Live Action — Release Order",

                items: [

                    {
                        id: "tf-1",

                        title: "Transformers",

                        year: 2007,

                        description:
                            "Sam Witwicky becomes caught in a war between the Autobots and Decepticons.",

                        trailer:
                            "https://www.youtube.com/watch?v=dxQxgAfNzyE",

                        poster: ""
                    },

                    {
                        id: "tf-2",

                        title: "Transformers: Revenge of the Fallen",

                        year: 2009,

                        description:
                            "Sam discovers secrets about the ancient history of the Transformers while the Decepticons return.",

                        trailer:
                            "https://www.youtube.com/watch?v=fnXzKwUgDhg",

                        poster: ""
                    },

                    {
                        id: "tf-3",

                        title: "Transformers: Dark of the Moon",

                        year: 2011,

                        description:
                            "The Autobots uncover a hidden Cybertronian secret connected to the space race.",

                        trailer:
                            "https://www.youtube.com/watch?v=kHRf01Gjosk",

                        poster: ""
                    },

                    {
                        id: "tf-4",

                        title: "Transformers: Age of Extinction",

                        year: 2014,

                        description:
                            "A new human family becomes involved in the conflict between Transformers and humanity.",

                        trailer:
                            "https://www.youtube.com/watch?v=d7d6yD8e7qA",

                        poster: ""
                    },

                    {
                        id: "tf-5",

                        title: "Transformers: The Last Knight",

                        year: 2017,

                        description:
                            "An ancient connection between Transformers and human history is revealed.",

                        trailer:
                            "https://www.youtube.com/watch?v=6V7k8pK1y4c",

                        poster: ""
                    },

                    {
                        id: "tf-bumblebee",

                        title: "Bumblebee",

                        year: 2018,

                        description:
                            "A young woman discovers a damaged Autobot hiding in a California junkyard.",

                        trailer:
                            "https://www.youtube.com/watch?v=fAIX12F6958",

                        poster: ""
                    },

                    {
                        id: "tf-rise-beasts",

                        title: "Transformers: Rise of the Beasts",

                        year: 2023,

                        description:
                            "The Autobots encounter the Maximals while an ancient cosmic threat approaches Earth.",

                        trailer:
                            "https://www.youtube.com/watch?v=itnqEauWQZM",

                        poster: ""
                    }

                ]
            },

            {
                title: "Animated",

                items: [

                    {
                        id: "transformers-one",

                        title: "Transformers One",

                        year: 2024,

                        description:
                            "The origin story of Optimus Prime and Megatron and their relationship on Cybertron.",

                        trailer:
                            "https://www.youtube.com/watch?v=jaVcWQfJ9uM",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "monsterverse",

        name: "MonsterVerse",

        accent: "#263238",
        accent2: "#00A896",

        icon: "gorilla",

        tagline:
            "Godzilla, Kong and the MonsterVerse.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "monster-godzilla",

                        title: "Godzilla",

                        year: 2014,

                        description:
                            "Humanity discovers that ancient giant creatures still exist and that Godzilla may be the force capable of stopping them.",

                        trailer:
                            "https://www.youtube.com/watch?v=vIu85WQTPRc",

                        poster: ""
                    },

                    {
                        id: "monster-kong",

                        title: "Kong: Skull Island",

                        year: 2017,

                        description:
                            "An expedition enters the mysterious Skull Island and encounters the enormous Kong.",

                        trailer:
                            "https://www.youtube.com/watch?v=44LdLqgOpjo",

                        poster: ""
                    },

                    {
                        id: "monster-king-monsters",

                        title: "Godzilla: King of the Monsters",

                        year: 2019,

                        description:
                            "Godzilla faces several ancient Titans as humanity struggles to survive their awakening.",

                        trailer:
                            "https://www.youtube.com/watch?v=QFxN2oDKk0E",

                        poster: ""
                    },

                    {
                        id: "monster-gvk",

                        title: "Godzilla vs. Kong",

                        year: 2021,

                        description:
                            "Godzilla and Kong collide while humanity searches for answers about the Titans.",

                        trailer:
                            "https://www.youtube.com/watch?v=odM92ap8_c0",

                        poster: ""
                    },

                    {
                        id: "monster-new-empire",

                        title: "Godzilla x Kong: The New Empire",

                        year: 2024,

                        description:
                            "Godzilla and Kong unite against a new threat hidden deep within the Hollow Earth.",

                        trailer:
                            "https://www.youtube.com/watch?v=lV1OOlGwExM",

                        poster: ""
                    }

                ]
            },

            {
                title: "Series",

                items: [

                    {
                        id: "monster-monarch",

                        title: "Monarch: Legacy of Monsters",

                        year: 2023,

                        type: "series",

                        description:
                            "A family uncovers secrets surrounding Monarch and the Titans across multiple generations.",

                        trailer:
                            "https://www.youtube.com/watch?v=JL1b9Rr9FjI",

                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "mission-impossible",

        name: "Mission: Impossible",

        accent: "#212121",
        accent2: "#E53935",

        icon: "target",

        tagline:
            "The complete Ethan Hunt mission saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "mi-1",
                        title: "Mission: Impossible",
                        year: 1996,
                        description: "Ethan Hunt is framed after a mission goes catastrophically wrong and must uncover the real traitor.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-2",
                        title: "Mission: Impossible 2",
                        year: 2000,
                        description: "Ethan Hunt races to stop a dangerous biological weapon from falling into the wrong hands.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-3",
                        title: "Mission: Impossible III",
                        year: 2006,
                        description: "Ethan Hunt comes out of retirement to rescue a captured agent and confront a ruthless arms dealer.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-4",
                        title: "Mission: Impossible — Ghost Protocol",
                        year: 2011,
                        description: "The IMF is shut down and Ethan's team must prevent a nuclear war without official support.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-5",
                        title: "Mission: Impossible — Rogue Nation",
                        year: 2015,
                        description: "Ethan Hunt goes rogue to dismantle a mysterious organization of highly trained operatives.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-6",
                        title: "Mission: Impossible — Fallout",
                        year: 2018,
                        description: "Ethan Hunt and his allies race against time after plutonium falls into the hands of extremists.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-7",
                        title: "Mission: Impossible — Dead Reckoning",
                        year: 2023,
                        description: "Ethan Hunt faces an artificial intelligence threat capable of controlling global systems.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "mi-8",
                        title: "Mission: Impossible — The Final Reckoning",
                        year: 2025,
                        description: "Ethan Hunt faces the continuing consequences of the Entity threat.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "invincible",

        name: "Invincible",

        accent: "#FFC107",
        accent2: "#E53935",

        icon: "hero",

        tagline:
            "Mark Grayson and the Invincible animated universe.",

        groups: [

            {
                title: "Animated Series — Release Order",

                items: [

                    {
                        id: "invincible-s1",
                        title: "Invincible — Season 1",
                        year: 2021,
                        type: "series",
                        description: "Mark Grayson discovers that becoming a superhero is far more complicated than he imagined.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "invincible-atom-eve",
                        title: "Invincible: Atom Eve",
                        year: 2023,
                        type: "special",
                        description: "Atom Eve's origin story reveals how Samantha Eve Wilkins became a powerful superhero.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "invincible-s2",
                        title: "Invincible — Season 2",
                        year: 2023,
                        type: "series",
                        description: "Mark struggles with the consequences of his father's betrayal while new threats emerge.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "invincible-s3",
                        title: "Invincible — Season 3",
                        year: 2025,
                        type: "series",
                        description: "Mark faces increasingly powerful enemies while learning what it truly means to be Invincible.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "jurassic",

        name: "Jurassic Park / World",

        accent: "#33691E",
        accent2: "#FDD835",

        icon: "dino",

        tagline:
            "Dinosaurs, theme parks and the Jurassic saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "jurassic-park",
                        title: "Jurassic Park",
                        year: 1993,
                        description: "A groundbreaking theme park filled with cloned dinosaurs becomes a fight for survival.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "lost-world",
                        title: "The Lost World: Jurassic Park",
                        year: 1997,
                        description: "A research team returns to Isla Sorna to study dinosaurs living freely in the wild.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "jurassic-park-3",
                        title: "Jurassic Park III",
                        year: 2001,
                        description: "A rescue mission on Isla Sorna becomes a struggle to survive among dangerous prehistoric creatures.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "jurassic-world",
                        title: "Jurassic World",
                        year: 2015,
                        description: "A fully operational dinosaur theme park faces disaster when a genetically engineered predator escapes.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fallen-kingdom",
                        title: "Jurassic World: Fallen Kingdom",
                        year: 2018,
                        description: "Owen and Claire return to Isla Nublar to rescue dinosaurs from an approaching volcanic disaster.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "jurassic-dominion",
                        title: "Jurassic World Dominion",
                        year: 2022,
                        description: "Humans and dinosaurs must find a way to coexist after prehistoric creatures spread around the world.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "jurassic-rebirth",
                        title: "Jurassic World Rebirth",
                        year: 2025,
                        description: "A new expedition ventures into dangerous territory as humanity searches for dinosaurs with valuable genetic properties.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "pirates",

        name: "Pirates of the Caribbean",

        accent: "#004D40",
        accent2: "#D4AF37",

        icon: "pirate",

        tagline:
            "Captain Jack Sparrow and the Pirates saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "pirates-1",
                        title: "The Curse of the Black Pearl",
                        year: 2003,
                        description: "Jack Sparrow joins forces with Will Turner to rescue Elizabeth Swann and reclaim the Black Pearl.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "pirates-2",
                        title: "Dead Man's Chest",
                        year: 2006,
                        description: "Jack Sparrow owes a debt to the legendary Davy Jones and must find a way to escape his fate.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "pirates-3",
                        title: "At World's End",
                        year: 2007,
                        description: "The pirate lords unite for a final battle against the East India Trading Company.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "pirates-4",
                        title: "On Stranger Tides",
                        year: 2011,
                        description: "Jack Sparrow searches for the Fountain of Youth while encountering the pirate Blackbeard.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "pirates-5",
                        title: "Dead Men Tell No Tales",
                        year: 2017,
                        description: "Jack Sparrow faces Captain Salazar, a supernatural enemy seeking revenge.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "narnia",

        name: "The Chronicles of Narnia",

        accent: "#1565C0",
        accent2: "#8D6E63",

        icon: "lion",

        tagline:
            "The Chronicles of Narnia screen saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "narnia-1",
                        title: "The Lion, the Witch and the Wardrobe",
                        year: 2005,
                        description: "Four siblings discover a magical world beyond a wardrobe and become part of a battle between good and evil.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "narnia-2",
                        title: "Prince Caspian",
                        year: 2008,
                        description: "The Pevensie siblings return to Narnia and help Prince Caspian reclaim his throne.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "narnia-3",
                        title: "The Voyage of the Dawn Treader",
                        year: 2010,
                        description: "Edmund and Lucy return to Narnia and join Prince Caspian on a voyage across mysterious seas.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "fast-furious",

        name: "Fast & Furious",

        accent: "#212121",
        accent2: "#FF6D00",

        icon: "car",

        tagline:
            "Family, speed and the Fast Saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "fast-1",
                        title: "The Fast and the Furious",
                        year: 2001,
                        description: "An undercover police officer infiltrates a street racing crew suspected of hijacking trucks.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-2",
                        title: "2 Fast 2 Furious",
                        year: 2003,
                        description: "Brian O'Conner teams up with an old friend to bring down a dangerous criminal.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-3",
                        title: "The Fast and the Furious: Tokyo Drift",
                        year: 2006,
                        description: "A troubled teenager discovers the underground world of drifting in Tokyo.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-4",
                        title: "Fast & Furious",
                        year: 2009,
                        description: "Dom and Brian reunite to take down a dangerous drug trafficker.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-5",
                        title: "Fast Five",
                        year: 2011,
                        description: "Dom and his crew plan an enormous heist in Rio de Janeiro.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-6",
                        title: "Fast & Furious 6",
                        year: 2013,
                        description: "The crew is offered a chance at freedom in exchange for stopping a highly skilled criminal organization.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-7",
                        title: "Furious 7",
                        year: 2015,
                        description: "The crew is targeted by a dangerous enemy seeking revenge.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-8",
                        title: "The Fate of the Furious",
                        year: 2017,
                        description: "Dom unexpectedly turns against his family after being manipulated by a cyberterrorist.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-hobbs-shaw",
                        title: "Hobbs & Shaw",
                        year: 2019,
                        description: "Luke Hobbs and Deckard Shaw reluctantly team up to stop a genetically enhanced terrorist.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-9",
                        title: "F9: The Fast Saga",
                        year: 2021,
                        description: "Dom's past returns when his estranged brother becomes involved with a dangerous enemy.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "fast-x",
                        title: "Fast X",
                        year: 2023,
                        description: "Dom and his family face a powerful enemy seeking revenge for events from their past.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "john-wick",

        name: "John Wick",

        accent: "#111111",
        accent2: "#D4AF37",

        icon: "gun",

        tagline:
            "The John Wick action universe.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "john-wick-1",
                        title: "John Wick",
                        year: 2014,
                        description: "A retired assassin returns to his violent past after criminals steal his car and kill his beloved dog.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "john-wick-2",
                        title: "John Wick: Chapter 2",
                        year: 2017,
                        description: "John Wick is pulled back into the criminal underworld by a blood oath.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "john-wick-3",
                        title: "John Wick: Chapter 3 — Parabellum",
                        year: 2019,
                        description: "John becomes a global target after breaking one of the High Table's most important rules.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "john-wick-4",
                        title: "John Wick: Chapter 4",
                        year: 2023,
                        description: "John Wick searches for a way to defeat the High Table and earn his freedom.",
                        trailer: "",
                        poster: ""
                    }

                ]
            },

            {
                title: "Spin-Offs / Series",

                items: [

                    {
                        id: "john-wick-continental",
                        title: "The Continental",
                        year: 2023,
                        type: "series",
                        description: "A prequel series exploring the origins of the Continental hotel and Winston Scott.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "terminator",

        name: "Terminator",

        accent: "#263238",
        accent2: "#EF5350",

        icon: "robot",

        tagline:
            "The Terminator time-war saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "terminator-1",
                        title: "The Terminator",
                        year: 1984,
                        description: "A cyborg assassin travels back in time to kill the woman whose unborn son will lead humanity's resistance.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "terminator-2",
                        title: "Terminator 2: Judgment Day",
                        year: 1991,
                        description: "A reprogrammed Terminator protects young John Connor from a more advanced killing machine.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "terminator-3",
                        title: "Terminator 3: Rise of the Machines",
                        year: 2003,
                        description: "John Connor attempts to prevent Judgment Day while being hunted by an advanced Terminator.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "terminator-salvation",
                        title: "Terminator Salvation",
                        year: 2009,
                        description: "John Connor leads the human resistance in a future war against Skynet's machines.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "terminator-genisys",
                        title: "Terminator Genisys",
                        year: 2015,
                        description: "A mission to protect Sarah Connor changes the timeline and creates a radically different future.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "terminator-dark-fate",
                        title: "Terminator: Dark Fate",
                        year: 2019,
                        description: "Sarah Connor returns when a new enhanced Terminator arrives to kill a young woman who is crucial to humanity's future.",
                        trailer: "",
                        poster: ""
                    }

                ]
            },

            {
                title: "Animated Series",

                items: [

                    {
                        id: "terminator-zero",
                        title: "Terminator Zero",
                        year: 2024,
                        type: "series",
                        description: "A new story in the Terminator universe involving a scientist, an AI and a battle against machines.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "avatar",

        name: "Avatar",

        accent: "#0277BD",
        accent2: "#7E57C2",

        icon: "water",

        tagline:
            "Pandora and James Cameron's Avatar saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "avatar-1",
                        title: "Avatar",
                        year: 2009,
                        description: "A former Marine becomes involved in the conflict between humanity and the Na'vi on Pandora.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "avatar-2",
                        title: "Avatar: The Way of Water",
                        year: 2022,
                        description: "Jake Sully and Neytiri protect their family while seeking refuge among the ocean-dwelling Metkayina.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "avatar-3",
                        title: "Avatar: Fire and Ash",
                        year: 2025,
                        description: "The story of Pandora continues as the Sully family encounters new dangers and cultures.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "apes",

        name: "Planet of the Apes",

        accent: "#4E342E",
        accent2: "#78909C",

        icon: "ape",

        tagline:
            "The Planet of the Apes screen saga.",

        groups: [

            {
                title: "Original Series",

                items: [

                    {
                        id: "apes-1968",
                        title: "Planet of the Apes",
                        year: 1968,
                        description: "Astronauts land on a mysterious planet ruled by intelligent apes.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-beneath",
                        title: "Beneath the Planet of the Apes",
                        year: 1970,
                        description: "A second astronaut searches for the missing crew and discovers a hidden underground civilization.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-escape",
                        title: "Escape from the Planet of the Apes",
                        year: 1971,
                        description: "Two intelligent apes travel back to present-day Earth and become subjects of public fascination.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-conquest",
                        title: "Conquest of the Planet of the Apes",
                        year: 1972,
                        description: "Caesar leads an uprising against humans in a society where apes are enslaved.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-battle",
                        title: "Battle for the Planet of the Apes",
                        year: 1973,
                        description: "Humans and apes attempt to build a peaceful society after the collapse of civilization.",
                        trailer: "",
                        poster: ""
                    }

                ]
            },

            {
                title: "Caesar Saga",

                items: [

                    {
                        id: "apes-rise",
                        title: "Rise of the Planet of the Apes",
                        year: 2011,
                        description: "A genetically enhanced chimpanzee named Caesar becomes the beginning of a revolution.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-dawn",
                        title: "Dawn of the Planet of the Apes",
                        year: 2014,
                        description: "Caesar and his ape community encounter a group of surviving humans.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-war",
                        title: "War for the Planet of the Apes",
                        year: 2017,
                        description: "Caesar leads his people through a final conflict with a human military force.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "apes-kingdom",
                        title: "Kingdom of the Planet of the Apes",
                        year: 2024,
                        description: "Generations after Caesar, a young ape begins a journey that challenges what his society believes about the past.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "conjuring",

        name: "The Conjuring Universe",

        accent: "#263238",
        accent2: "#9C27B0",

        icon: "ghost",

        tagline:
            "The interconnected Conjuring horror universe.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "conjuring-1",
                        title: "The Conjuring",
                        year: 2013,
                        description: "Ed and Lorraine Warren investigate a terrifying supernatural presence haunting a family home.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "annabelle",
                        title: "Annabelle",
                        year: 2014,
                        description: "A couple discovers that an antique doll has become the center of a terrifying supernatural haunting.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "conjuring-2",
                        title: "The Conjuring 2",
                        year: 2016,
                        description: "The Warrens travel to England to investigate a disturbing haunting involving a young girl.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "annabelle-creation",
                        title: "Annabelle: Creation",
                        year: 2017,
                        description: "An orphanage becomes the target of a terrifying demonic presence connected to a mysterious doll.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "nun",
                        title: "The Nun",
                        year: 2018,
                        description: "A priest and a nun investigate the mysterious death of a nun at a Romanian abbey.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "annabelle-comes-home",
                        title: "Annabelle Comes Home",
                        year: 2019,
                        description: "The Warrens' daughter and her friends unleash a collection of supernatural entities.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "conjuring-devil",
                        title: "The Conjuring: The Devil Made Me Do It",
                        year: 2021,
                        description: "The Warrens investigate a murder case involving a suspected demonic possession.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "nun-2",
                        title: "The Nun II",
                        year: 2023,
                        description: "Sister Irene faces the demonic Valak again years after their first encounter.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "insidious",

        name: "Insidious",

        accent: "#4A148C",
        accent2: "#EF5350",

        icon: "ghost",

        tagline:
            "The Further and the Insidious horror saga.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "insidious-1",
                        title: "Insidious",
                        year: 2010,
                        description: "A family discovers that their son is trapped in a terrifying supernatural realm known as the Further.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "insidious-2",
                        title: "Insidious: Chapter 2",
                        year: 2013,
                        description: "The Lambert family continues to confront the supernatural forces connected to the Further.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "insidious-3",
                        title: "Insidious: Chapter 3",
                        year: 2015,
                        description: "A young woman seeks Elise Rainier's help after experiencing terrifying supernatural activity.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "insidious-last-key",
                        title: "Insidious: The Last Key",
                        year: 2018,
                        description: "Elise returns to the house where she grew up and confronts demons from her childhood.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "insidious-red-door",
                        title: "Insidious: The Red Door",
                        year: 2023,
                        description: "Josh and Dalton Lambert confront their buried memories of the Further.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "scream",

        name: "Scream",

        accent: "#111111",
        accent2: "#E53935",

        icon: "mask",

        tagline:
            "Ghostface and the Scream film series.",

        groups: [

            {
                title: "Films — Release Order",

                items: [

                    {
                        id: "scream-1",
                        title: "Scream",
                        year: 1996,
                        description: "A masked killer begins terrorizing a small town while a group of teenagers attempt to survive.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "scream-2",
                        title: "Scream 2",
                        year: 1997,
                        description: "Ghostface returns while Sidney attends college and tries to leave the events of Woodsboro behind.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "scream-3",
                        title: "Scream 3",
                        year: 2000,
                        description: "A new Ghostface killer targets the cast of a movie based on the Woodsboro murders.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "scream-4",
                        title: "Scream 4",
                        year: 2011,
                        description: "Sidney returns to Woodsboro just as a new Ghostface begins killing again.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "scream-5",
                        title: "Scream",
                        year: 2022,
                        description: "A new generation becomes the target of Ghostface while familiar survivors return.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "scream-6",
                        title: "Scream VI",
                        year: 2023,
                        description: "The survivors leave Woodsboro for New York, where another Ghostface emerges.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    },

    {
        id: "james-bond",

        name: "James Bond",

        accent: "#0B3D2E",
        accent2: "#D4AF37",

        icon: "diamond",

        tagline:
            "James Bond 007 — the official Eon film saga.",

        groups: [

            {
                title: "Eon Films — Release Order",

                items: [

                    {
                        id: "bond-dr-no",
                        title: "Dr. No",
                        year: 1962,
                        description: "James Bond investigates the disappearance of a British agent in Jamaica.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-russia",
                        title: "From Russia with Love",
                        year: 1963,
                        description: "Bond is sent to Istanbul to obtain a Soviet decoding device while being targeted by SPECTRE.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-goldfinger",
                        title: "Goldfinger",
                        year: 1964,
                        description: "Bond investigates billionaire Auric Goldfinger and uncovers a dangerous plan involving Fort Knox.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-thunderball",
                        title: "Thunderball",
                        year: 1965,
                        description: "Bond must recover stolen nuclear weapons before SPECTRE can use them.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-you-only-live-twice",
                        title: "You Only Live Twice",
                        year: 1967,
                        description: "Bond investigates the disappearance of spacecraft and uncovers a SPECTRE plot.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-on-her-majestys",
                        title: "On Her Majesty's Secret Service",
                        year: 1969,
                        description: "Bond attempts to stop Blofeld while becoming personally involved in the mission.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-diamonds",
                        title: "Diamonds Are Forever",
                        year: 1971,
                        description: "Bond investigates a diamond-smuggling operation connected to a massive criminal scheme.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-live-let-die",
                        title: "Live and Let Die",
                        year: 1973,
                        description: "Bond investigates a series of murders connected to a powerful Caribbean drug lord.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-man-golden-gun",
                        title: "The Man with the Golden Gun",
                        year: 1974,
                        description: "Bond is targeted by legendary assassin Francisco Scaramanga.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-spy-loved-me",
                        title: "The Spy Who Loved Me",
                        year: 1977,
                        description: "Bond teams up with a Soviet agent to stop a shipping magnate from starting a nuclear war.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-moonraker",
                        title: "Moonraker",
                        year: 1979,
                        description: "Bond investigates the theft of a space shuttle and uncovers a plan to destroy humanity.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-for-your-eyes",
                        title: "For Your Eyes Only",
                        year: 1981,
                        description: "Bond searches for a communications device while navigating an international weapons conspiracy.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-octopussy",
                        title: "Octopussy",
                        year: 1983,
                        description: "Bond investigates a plot involving a valuable jewel, an international smuggler and nuclear weapons.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-view-kill",
                        title: "A View to a Kill",
                        year: 1985,
                        description: "Bond faces industrialist Max Zorin and a plot targeting Silicon Valley.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-living-daylights",
                        title: "The Living Daylights",
                        year: 1987,
                        description: "Bond protects a defecting Soviet general while uncovering a larger arms conspiracy.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-licence-kill",
                        title: "Licence to Kill",
                        year: 1989,
                        description: "Bond leaves the service to pursue revenge against a drug lord who attacked his friend.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-goldeneye",
                        title: "GoldenEye",
                        year: 1995,
                        description: "Bond investigates a stolen satellite weapon and confronts a former MI6 agent.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-tomorrow",
                        title: "Tomorrow Never Dies",
                        year: 1997,
                        description: "Bond attempts to prevent a media tycoon from engineering a global conflict.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-world-not-enough",
                        title: "The World Is Not Enough",
                        year: 1999,
                        description: "Bond protects an oil heiress while investigating an international terrorist plot.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-die-another-day",
                        title: "Die Another Day",
                        year: 2002,
                        description: "Bond returns to the field after being imprisoned and discovers a dangerous technological weapon.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-casino-royale",
                        title: "Casino Royale",
                        year: 2006,
                        description: "A newly promoted James Bond faces terrorist financier Le Chiffre in a high-stakes poker game.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-quantum",
                        title: "Quantum of Solace",
                        year: 2008,
                        description: "Bond uncovers a secret organization while seeking revenge for Vesper Lynd.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-skyfall",
                        title: "Skyfall",
                        year: 2012,
                        description: "Bond returns to action when an attack threatens MI6 and M's past comes back to haunt her.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-spectre",
                        title: "Spectre",
                        year: 2015,
                        description: "Bond uncovers a mysterious organization connected to events from his past.",
                        trailer: "",
                        poster: ""
                    },

                    {
                        id: "bond-no-time",
                        title: "No Time to Die",
                        year: 2021,
                        description: "Bond is drawn back into action when an old CIA friend asks for help rescuing a kidnapped scientist.",
                        trailer: "",
                        poster: ""
                    }

                ]
            }

        ]
    }

];