const universes = [

/* =========================================================
   MARVEL
========================================================= */

{
    id: "marvel",

    name: "Marvel",

    description:
        "A massive Marvel collection covering the MCU, X-Men, Spider-Man, Fantastic Four and other major Marvel film branches.",

    background:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80",

    sections: [

        /* ================= MCU ================= */

        {
            id: "mcu",

            name: "Marvel Cinematic Universe — MCU",

            items: [

                {
                    id: "mcu-001",
                    title: "Iron Man",
                    year: 2008,
                    description:
                        "Tony Stark, a billionaire weapons manufacturer, builds a powered suit after being captured and becomes Iron Man.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Iron+Man+2008+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-002",
                    title: "The Incredible Hulk",
                    year: 2008,
                    description:
                        "Bruce Banner searches for a cure while hiding from the military and struggling to control the Hulk.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Incredible+Hulk+2008+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-003",
                    title: "Iron Man 2",
                    year: 2010,
                    description:
                        "Tony Stark faces government pressure and a dangerous new enemy while continuing to develop his Iron Man technology.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Iron+Man+2+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-004",
                    title: "Thor",
                    year: 2011,
                    description:
                        "Thor is banished from Asgard and learns humility on Earth while his brother Loki pursues power.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Thor+2011+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-005",
                    title: "Captain America: The First Avenger",
                    year: 2011,
                    description:
                        "Steve Rogers becomes Captain America and fights HYDRA during World War II.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Captain+America+The+First+Avenger+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-006",
                    title: "The Avengers",
                    year: 2012,
                    description:
                        "Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye unite to stop Loki and an alien invasion.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Avengers+2012+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1635863138275-d9864d0f193c?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-007",
                    title: "Iron Man 3",
                    year: 2013,
                    description:
                        "Tony Stark faces the Mandarin and struggles with the psychological aftermath of the Battle of New York.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Iron+Man+3+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-008",
                    title: "Thor: The Dark World",
                    year: 2013,
                    description:
                        "Thor battles the Dark Elves and their leader Malekith to protect the Nine Realms.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Thor+Dark+World+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-009",
                    title: "Captain America: The Winter Soldier",
                    year: 2014,
                    description:
                        "Captain America discovers a conspiracy inside S.H.I.E.L.D. involving the mysterious Winter Soldier.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Captain+America+Winter+Soldier+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-010",
                    title: "Guardians of the Galaxy",
                    year: 2014,
                    description:
                        "A group of unlikely criminals joins forces to stop Ronan from using a powerful Infinity Stone.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-011",
                    title: "Avengers: Age of Ultron",
                    year: 2015,
                    description:
                        "The Avengers create an artificial intelligence that turns against humanity.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Avengers+Age+of+Ultron+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-012",
                    title: "Ant-Man",
                    year: 2015,
                    description:
                        "Scott Lang becomes Ant-Man and must master his shrinking technology to pull off an impossible heist.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Ant-Man+2015+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-013",
                    title: "Captain America: Civil War",
                    year: 2016,
                    description:
                        "The Avengers split into opposing sides over government oversight and accountability.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Captain+America+Civil+War+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-014",
                    title: "Doctor Strange",
                    year: 2016,
                    description:
                        "A brilliant surgeon discovers the mystical arts after a devastating accident ends his medical career.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Doctor+Strange+2016+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-015",
                    title: "Guardians of the Galaxy Vol. 2",
                    year: 2017,
                    description:
                        "The Guardians discover the truth about Peter Quill's mysterious father.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+Vol+2+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-016",
                    title: "Spider-Man: Homecoming",
                    year: 2017,
                    description:
                        "Peter Parker tries to balance high school life with his responsibilities as Spider-Man.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Homecoming+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-017",
                    title: "Thor: Ragnarok",
                    year: 2017,
                    description:
                        "Thor must escape Sakaar and stop Hela from destroying Asgard.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Thor+Ragnarok+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-018",
                    title: "Black Panther",
                    year: 2018,
                    description:
                        "T'Challa returns home to become king of Wakanda while facing a powerful challenger.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Black+Panther+2018+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-019",
                    title: "Avengers: Infinity War",
                    year: 2018,
                    description:
                        "Thanos begins his quest to collect all six Infinity Stones.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Avengers+Infinity+War+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-020",
                    title: "Ant-Man and the Wasp",
                    year: 2018,
                    description:
                        "Scott Lang teams with Hope van Dyne while exploring the mysterious Quantum Realm.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Ant-Man+and+the+Wasp+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-021",
                    title: "Captain Marvel",
                    year: 2019,
                    description:
                        "Carol Danvers discovers her past and becomes one of the universe's most powerful heroes.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Captain+Marvel+2019+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-022",
                    title: "Avengers: Endgame",
                    year: 2019,
                    description:
                        "The surviving Avengers attempt to undo Thanos' devastating victory.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Avengers+Endgame+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-023",
                    title: "Spider-Man: Far From Home",
                    year: 2019,
                    description:
                        "Peter Parker travels to Europe but finds himself facing a new threat after the events of Endgame.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Far+From+Home+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-024",
                    title: "Black Widow",
                    year: 2021,
                    description:
                        "Natasha Romanoff confronts her past and the people she left behind.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Black+Widow+2021+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-025",
                    title: "Shang-Chi and the Legend of the Ten Rings",
                    year: 2021,
                    description:
                        "Shang-Chi confronts his past and the mysterious Ten Rings organization.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Shang-Chi+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-026",
                    title: "Eternals",
                    year: 2021,
                    description:
                        "Ancient cosmic beings return from hiding to protect humanity from a powerful threat.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Eternals+2021+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-027",
                    title: "Spider-Man: No Way Home",
                    year: 2021,
                    description:
                        "Peter Parker's identity crisis opens the door to villains and heroes from other realities.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+No+Way+Home+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-028",
                    title: "Doctor Strange in the Multiverse of Madness",
                    year: 2022,
                    description:
                        "Doctor Strange travels through alternate realities while facing a dangerous multiversal threat.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Doctor+Strange+Multiverse+of+Madness+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-029",
                    title: "Thor: Love and Thunder",
                    year: 2022,
                    description:
                        "Thor faces Gorr the God Butcher and reunites with Jane Foster.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Thor+Love+and+Thunder+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-030",
                    title: "Black Panther: Wakanda Forever",
                    year: 2022,
                    description:
                        "Wakanda faces a new threat while mourning the loss of King T'Challa.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Black+Panther+Wakanda+Forever+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-031",
                    title: "Ant-Man and the Wasp: Quantumania",
                    year: 2023,
                    description:
                        "The Ant-Man family becomes trapped in the Quantum Realm and encounters Kang.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Ant-Man+Quantumania+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-032",
                    title: "Guardians of the Galaxy Vol. 3",
                    year: 2023,
                    description:
                        "The Guardians embark on a dangerous mission to save Rocket's life.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+Vol+3+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-033",
                    title: "The Marvels",
                    year: 2023,
                    description:
                        "Carol Danvers, Kamala Khan and Monica Rambeau become mysteriously connected.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Marvels+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-034",
                    title: "Deadpool & Wolverine",
                    year: 2024,
                    description:
                        "Deadpool is pulled into a multiversal adventure involving Wolverine.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Deadpool+and+Wolverine+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-035",
                    title: "Captain America: Brave New World",
                    year: 2025,
                    description:
                        "Sam Wilson embraces the Captain America mantle and faces an international crisis.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Captain+America+Brave+New+World+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-036",
                    title: "Thunderbolts*",
                    year: 2025,
                    description:
                        "A group of unconventional heroes and antiheroes are brought together for a dangerous mission.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Thunderbolts+2025+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-037",
                    title: "The Fantastic Four: First Steps",
                    year: 2025,
                    description:
                        "The Fantastic Four face a cosmic threat while protecting their retro-futuristic world.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Fantastic+Four+First+Steps+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mcu-038",
                    title: "Spider-Man: Brand New Day",
                    year: 2026,
                    description:
                        "Peter Parker begins a new chapter as Spider-Man following the events of No Way Home.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Brand+New+Day+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
                }

            ]
        },


        /* ================= X-MEN ================= */

        {
            id: "xmen",

            name: "X-Men / Fox Universe",

            items: [

                {
                    id: "xmen-001",
                    title: "X-Men",
                    year: 2000,
                    description:
                        "Mutants led by Professor Xavier face Magneto and his Brotherhood.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X-Men+2000+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-002",
                    title: "X2: X-Men United",
                    year: 2003,
                    description:
                        "The X-Men join forces with an unlikely enemy when mutants are targeted by a dangerous military plan.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X2+X-Men+United+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-003",
                    title: "X-Men: The Last Stand",
                    year: 2006,
                    description:
                        "A controversial mutant cure divides the X-Men and threatens to ignite a war.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X-Men+Last+Stand+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-004",
                    title: "X-Men Origins: Wolverine",
                    year: 2009,
                    description:
                        "Wolverine's mysterious past and transformation into Weapon X are revealed.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X-Men+Origins+Wolverine+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-005",
                    title: "X-Men: First Class",
                    year: 2011,
                    description:
                        "A young Charles Xavier and Erik Lehnsherr work together before becoming Professor X and Magneto.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X-Men+First+Class+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-006",
                    title: "The Wolverine",
                    year: 2013,
                    description:
                        "Wolverine travels to Japan and faces enemies connected to his past.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Wolverine+2013+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-007",
                    title: "X-Men: Days of Future Past",
                    year: 2014,
                    description:
                        "The X-Men attempt to change history and prevent a future dominated by Sentinels.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X-Men+Days+of+Future+Past+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-008",
                    title: "Deadpool",
                    year: 2016,
                    description:
                        "Wade Wilson becomes the wisecracking mercenary Deadpool after an experimental treatment.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Deadpool+2016+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-009",
                    title: "X-Men: Apocalypse",
                    year: 2016,
                    description:
                        "The X-Men face Apocalypse, an ancient mutant determined to reshape civilization.",
                    trailer:
                        "https://www.youtube.com/results?search_query=X-Men+Apocalypse+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-010",
                    title: "Logan",
                    year: 2017,
                    description:
                        "An aging Wolverine protects a mysterious young mutant while facing the end of an era.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Logan+2017+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-011",
                    title: "Deadpool 2",
                    year: 2018,
                    description:
                        "Deadpool forms an unconventional team to protect a young mutant from a time-travelling soldier.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Deadpool+2+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-012",
                    title: "Dark Phoenix",
                    year: 2019,
                    description:
                        "Jean Grey struggles to control a cosmic force that threatens the X-Men.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Dark+Phoenix+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-013",
                    title: "The New Mutants",
                    year: 2020,
                    description:
                        "Young mutants discover their abilities while trapped in a mysterious facility.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+New+Mutants+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "xmen-014",
                    title: "Deadpool & Wolverine",
                    year: 2024,
                    description:
                        "Deadpool's multiverse adventure brings him together with Wolverine.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Deadpool+Wolverine+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                }

            ]
        },


        /* ================= SPIDER-MAN ================= */

        {
            id: "spiderman",

            name: "Spider-Man — All Major Film Universes",

            items: [

                {
                    id: "spidey-001",
                    title: "Spider-Man",
                    year: 2002,
                    description:
                        "Peter Parker gains spider-like abilities and becomes Spider-Man.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+2002+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-002",
                    title: "Spider-Man 2",
                    year: 2004,
                    description:
                        "Peter struggles with his responsibilities while facing Doctor Octopus.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+2+2004+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-003",
                    title: "Spider-Man 3",
                    year: 2007,
                    description:
                        "Peter faces Sandman, Venom and the darker side of his own powers.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+3+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-004",
                    title: "The Amazing Spider-Man",
                    year: 2012,
                    description:
                        "Peter Parker discovers secrets surrounding his parents while becoming Spider-Man.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Amazing+Spider-Man+2012+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-005",
                    title: "The Amazing Spider-Man 2",
                    year: 2014,
                    description:
                        "Peter faces Electro while struggling to protect Gwen Stacy.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Amazing+Spider-Man+2+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-006",
                    title: "Spider-Man: Homecoming",
                    year: 2017,
                    description:
                        "Peter tries to prove himself as a hero while dealing with the Vulture.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Homecoming+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-007",
                    title: "Spider-Man: Into the Spider-Verse",
                    year: 2018,
                    description:
                        "Miles Morales discovers a multiverse filled with different Spider-People.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Into+the+Spider-Verse+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-008",
                    title: "Spider-Man: Far From Home",
                    year: 2019,
                    description:
                        "Peter travels through Europe while facing the mysterious Mysterio.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Far+From+Home+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-009",
                    title: "Spider-Man: No Way Home",
                    year: 2021,
                    description:
                        "Peter's attempt to fix his identity problem opens a multiversal crisis.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+No+Way+Home+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-010",
                    title: "Spider-Man: Across the Spider-Verse",
                    year: 2023,
                    description:
                        "Miles encounters a huge Spider-Man multiverse and must make his own choice.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Across+the+Spider-Verse+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "spidey-011",
                    title: "Spider-Man: Brand New Day",
                    year: 2026,
                    description:
                        "Peter Parker enters a new chapter of his life as Spider-Man.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Spider-Man+Brand+New+Day+2026+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=800&q=80"
                }

            ]
        },


        /* ================= FANTASTIC FOUR ================= */

        {
            id: "fantastic-four",

            name: "Fantastic Four",

            items: [

                {
                    id: "ff-001",
                    title: "The Fantastic Four",
                    year: 2005,
                    description:
                        "Four astronauts gain extraordinary powers after exposure to cosmic radiation.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Fantastic+Four+2005+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "ff-002",
                    title: "Fantastic Four: Rise of the Silver Surfer",
                    year: 2007,
                    description:
                        "The Fantastic Four encounter the Silver Surfer and a cosmic threat.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Fantastic+Four+Rise+Silver+Surfer+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "ff-003",
                    title: "Fantastic Four",
                    year: 2015,
                    description:
                        "A new group of scientists develops extraordinary abilities after an experiment goes wrong.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Fantastic+Four+2015+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "ff-004",
                    title: "The Fantastic Four: First Steps",
                    year: 2025,
                    description:
                        "Marvel's First Family faces a cosmic threat in a retro-futuristic alternate Earth.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Fantastic+Four+First+Steps+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
                }

            ]
        }

    ]
},


/* =========================================================
   DC
========================================================= */

{
    id: "dc",

    name: "DC",

    description:
        "DC's cinematic multiverse including Batman, Superman, DCEU, The Dark Knight and animated universes.",

    background:
        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=1600&q=80",

    sections: [

        {
            id: "dark-knight",

            name: "The Dark Knight Trilogy",

            items: [

                {
                    id: "tdk-001",
                    title: "Batman Begins",
                    year: 2005,
                    description:
                        "Bruce Wayne becomes Batman and begins his mission to fight crime in Gotham.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+Begins+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tdk-002",
                    title: "The Dark Knight",
                    year: 2008,
                    description:
                        "Batman faces the Joker, a criminal mastermind determined to plunge Gotham into chaos.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tdk-003",
                    title: "The Dark Knight Rises",
                    year: 2012,
                    description:
                        "Batman returns to Gotham to face Bane and protect the city from destruction.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Dark+Knight+Rises+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                }

            ]
        },


        {
            id: "dceu",

            name: "DC Extended Universe",

            items: [

                {
                    id: "dceu-001",
                    title: "Man of Steel",
                    year: 2013,
                    description:
                        "Clark Kent discovers his Kryptonian heritage and embraces his destiny as Superman.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Man+of+Steel+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-002",
                    title: "Batman v Superman: Dawn of Justice",
                    year: 2016,
                    description:
                        "Batman and Superman clash while a larger threat emerges.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+v+Superman+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-003",
                    title: "Suicide Squad",
                    year: 2016,
                    description:
                        "A group of dangerous criminals is recruited for a secret government mission.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Suicide+Squad+2016+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-004",
                    title: "Wonder Woman",
                    year: 2017,
                    description:
                        "Diana leaves Themyscira and enters the world of men during World War I.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Wonder+Woman+2017+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-005",
                    title: "Justice League",
                    year: 2017,
                    description:
                        "Batman assembles a team of heroes to stop an extraterrestrial invasion.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Justice+League+2017+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-006",
                    title: "Aquaman",
                    year: 2018,
                    description:
                        "Arthur Curry discovers his heritage and fights for the throne of Atlantis.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Aquaman+2018+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-007",
                    title: "Shazam!",
                    year: 2019,
                    description:
                        "A teenager gains the ability to transform into an adult superhero.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Shazam+2019+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-008",
                    title: "Birds of Prey",
                    year: 2020,
                    description:
                        "Harley Quinn and a group of powerful women take on Gotham's criminal underworld.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Birds+of+Prey+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-009",
                    title: "Wonder Woman 1984",
                    year: 2020,
                    description:
                        "Wonder Woman faces two dangerous new adversaries in the 1980s.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Wonder+Woman+1984+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-010",
                    title: "The Suicide Squad",
                    year: 2021,
                    description:
                        "A new team of expendable criminals is sent on a dangerous mission.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Suicide+Squad+2021+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-011",
                    title: "Black Adam",
                    year: 2022,
                    description:
                        "An ancient superpowered champion is released into the modern world.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Black+Adam+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-012",
                    title: "Shazam! Fury of the Gods",
                    year: 2023,
                    description:
                        "Billy Batson and his family face powerful new enemies.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Shazam+Fury+of+the+Gods+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-013",
                    title: "The Flash",
                    year: 2023,
                    description:
                        "Barry Allen travels through time and accidentally changes the multiverse.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Flash+2023+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-014",
                    title: "Blue Beetle",
                    year: 2023,
                    description:
                        "Jaime Reyes becomes the host of an alien technological weapon.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Blue+Beetle+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "dceu-015",
                    title: "Aquaman and the Lost Kingdom",
                    year: 2023,
                    description:
                        "Aquaman must work with an unlikely ally to stop Black Manta.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Aquaman+Lost+Kingdom+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                }

            ]
        },


        {
            id: "dc-batman",

            name: "Other Batman Live-Action Films",

            items: [

                {
                    id: "bat-001",
                    title: "Batman",
                    year: 1966,
                    description:
                        "Batman faces several classic villains in the colorful 1960s Gotham.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+1966+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "bat-002",
                    title: "Batman",
                    year: 1989,
                    description:
                        "Batman battles the Joker in Tim Burton's dark vision of Gotham.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+1989+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "bat-003",
                    title: "Batman Returns",
                    year: 1992,
                    description:
                        "Batman faces the Penguin and Catwoman during a dark Christmas in Gotham.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+Returns+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "bat-004",
                    title: "Batman Forever",
                    year: 1995,
                    description:
                        "Batman faces Two-Face and the Riddler while taking on a new partner.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+Forever+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "bat-005",
                    title: "Batman & Robin",
                    year: 1997,
                    description:
                        "Batman and Robin battle Mr. Freeze and Poison Ivy.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Batman+Robin+1997+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "bat-006",
                    title: "The Batman",
                    year: 2022,
                    description:
                        "A young Batman investigates corruption in Gotham while hunting the Riddler.",
                    trailer:
                        "https://www.youtube.com/results?search_query=The+Batman+2022+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                }

            ]
        }

    ]
},


/* =========================================================
   TRANSFORMERS
========================================================= */

{
    id: "transformers",

    name: "Transformers",

    description:
        "Autobots, Decepticons and the cinematic Transformers universe.",

    background:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",

    sections: [

        {
            id: "transformers-films",

            name: "Transformers Films",

            items: [

                {
                    id: "tf-001",
                    title: "Transformers",
                    year: 2007,
                    description:
                        "The Autobots and Decepticons bring their war to Earth.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Transformers+2007+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tf-002",
                    title: "Transformers: Revenge of the Fallen",
                    year: 2009,
                    description:
                        "Sam Witwicky becomes involved in an ancient conflict between Transformers.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Transformers+Revenge+of+the+Fallen+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tf-003",
                    title: "Transformers: Dark of the Moon",
                    year: 2011,
                    description:
                        "A secret Cybertronian discovery threatens Earth.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Transformers+Dark+of+the+Moon+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tf-004",
                    title: "Transformers: Age of Extinction",
                    year: 2014,
                    description:
                        "Humanity turns against Transformers while a new threat emerges.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Transformers+Age+of+Extinction+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tf-005",
                    title: "Transformers: The Last Knight",
                    year: 2017,
                    description:
                        "The hidden history of Transformers on Earth is revealed.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Transformers+Last+Knight+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tf-006",
                    title: "Bumblebee",
                    year: 2018,
                    description:
                        "Bumblebee finds refuge with a teenager while hiding from the Decepticons.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Bumblebee+2018+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "tf-007",
                    title: "Transformers: Rise of the Beasts",
                    year: 2023,
                    description:
                        "The Autobots encounter the Maximals and a powerful new enemy.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Transformers+Rise+of+the+Beasts+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                }

            ]
        }

    ]
},


/* =========================================================
   JOHN WICK
========================================================= */

{
    id: "john-wick",

    name: "John Wick",

    description:
        "The complete John Wick action saga.",

    background:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",

    sections: [

        {
            id: "john-wick-films",

            name: "John Wick Films",

            items: [

                {
                    id: "jw-001",
                    title: "John Wick",
                    year: 2014,
                    description:
                        "A retired assassin returns to the criminal underworld after a devastating personal attack.",
                    trailer:
                        "https://www.youtube.com/results?search_query=John+Wick+2014+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "jw-002",
                    title: "John Wick: Chapter 2",
                    year: 2017,
                    description:
                        "John is forced back into the assassin world by an old blood oath.",
                    trailer:
                        "https://www.youtube.com/results?search_query=John+Wick+Chapter+2+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "jw-003",
                    title: "John Wick: Chapter 3 – Parabellum",
                    year: 2019,
                    description:
                        "John becomes an international target after breaking the rules of the High Table.",
                    trailer:
                        "https://www.youtube.com/results?search_query=John+Wick+Chapter+3+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "jw-004",
                    title: "John Wick: Chapter 4",
                    year: 2023,
                    description:
                        "John discovers a path to freedom by challenging the High Table.",
                    trailer:
                        "https://www.youtube.com/results?search_query=John+Wick+Chapter+4+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                }

            ]
        }

    ]
},


/* =========================================================
   MISSION IMPOSSIBLE
========================================================= */

{
    id: "mission-impossible",

    name: "Mission: Impossible",

    description:
        "Ethan Hunt's complete impossible-mission saga.",

    background:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80",

    sections: [

        {
            id: "mi-films",

            name: "Mission: Impossible Films",

            items: [

                {
                    id: "mi-001",
                    title: "Mission: Impossible",
                    year: 1996,
                    description:
                        "Ethan Hunt becomes a fugitive after a mission goes catastrophically wrong.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+1996+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mi-002",
                    title: "Mission: Impossible II",
                    year: 2000,
                    description:
                        "Ethan Hunt races to stop a deadly biological weapon.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+2+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1535378437327-b710c3cce9d3?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mi-003",
                    title: "Mission: Impossible III",
                    year: 2006,
                    description:
                        "Ethan comes out of retirement to face arms dealer Owen Davian.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+3+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mi-004",
                    title: "Mission: Impossible – Ghost Protocol",
                    year: 2011,
                    description:
                        "The IMF is shut down and Ethan must clear its name.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+Ghost+Protocol+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mi-005",
                    title: "Mission: Impossible – Rogue Nation",
                    year: 2015,
                    description:
                        "Ethan hunts a mysterious organization known as the Syndicate.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+Rogue+Nation+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mi-006",
                    title: "Mission: Impossible – Fallout",
                    year: 2018,
                    description:
                        "Ethan races to prevent nuclear destruction after plutonium is stolen.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+Fallout+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                },

                {
                    id: "mi-007",
                    title: "Mission: Impossible – Dead Reckoning",
                    year: 2023,
                    description:
                        "Ethan Hunt faces a powerful artificial intelligence and a global conspiracy.",
                    trailer:
                        "https://www.youtube.com/results?search_query=Mission+Impossible+Dead+Reckoning+official+trailer",
                    image:
                        "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=80"
                }

            ]
        }

    ]
}

];