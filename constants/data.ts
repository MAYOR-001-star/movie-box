import { icons } from './icons'

export const data = [
    {
        name: "index",
        title: "home",
        url: "/home",
        icon: icons.home,
    },
    {
        name: "search",
        title: "search",
        url: "/search",
        icon: icons.search,
    },
    {
        name: "saved",
        title: "saved",
        url: "/saved",
        icon: icons.saved,
    },
    {
        name: "profile",
        title: "profile",
        url: "/profile",
        icon: icons.profile,
    },
];

export const moviesss = [
    {
        "id": 1,
        special: true, // Hardcoded UI ranking flag
        "name": "Under the Dome",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Science-Fiction", "Thriller"],
        "status": "Ended",
        "runtime": 60,
        "premiered": "2013-06-24",
        "rating": { "average": 6.6 },
        "network": { "id": 2, "name": "CBS" },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg"
        },
        "summary": "<p>A small town is suddenly sealed off from the rest of the world by an enormous transparent dome. Its inhabitants must fight to survive while searching for answers.</p>"
    },
    {
        "id": 2,
        special: true, // Hardcoded UI ranking flag
        "name": "Breaking Bad",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Crime", "Thriller"],
        "status": "Ended",
        "runtime": 45,
        "premiered": "2008-01-20",
        "rating": { "average": 9.5 },
        "network": { "id": 20, "name": "AMC" },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
        },
        "summary": "<p>A chemistry teacher diagnosed with cancer turns to manufacturing illegal drugs to secure his family's financial future.</p>"
    },
    {
        "id": 3,
        special: true, // Hardcoded UI ranking flag
        "name": "Game of Thrones",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Fantasy", "Adventure"],
        "status": "Ended",
        "runtime": 60,
        "premiered": "2011-04-17",
        "rating": { "average": 9.0 },
        "network": { "id": 8, "name": "HBO" },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"
        },
        "summary": "<p>Noble families fight for control of the Iron Throne while ancient threats emerge beyond the kingdom.</p>"
    },
    {
        "id": 4,
        special: true, // Hardcoded UI ranking flag
        "name": "The Walking Dead",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Horror", "Thriller"],
        "status": "Ended",
        "runtime": 60,
        "premiered": "2010-10-31",
        "rating": { "average": 8.1 },
        "network": { "id": 20, "name": "AMC" },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/181.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/181.jpg"
        },
        "summary": "<p>Survivors struggle to stay alive in a world overrun by zombies.</p>"
    },
    {
        "id": 5,
        special: true, // Hardcoded UI ranking flag
        "name": "The Flash",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Action", "Science-Fiction"],
        "status": "Ended",
        "runtime": 60,
        "premiered": "2014-10-07",
        "rating": { "average": 7.5 },
        "network": { "id": 5, "name": "The CW" },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/1511.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/1511.jpg"
        },
        "summary": "<p>A forensic scientist gains superhuman speed and uses his abilities to protect his city.</p>"
    },
    {
        "id": 6,
        special: true, // Hardcoded UI ranking flag
        "name": "Sherlock",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Crime", "Mystery"],
        "status": "Ended",
        "runtime": 90,
        "premiered": "2010-07-25",
        "rating": { "average": 9.1 },
        "network": { "id": 12, "name": "BBC One" },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/6.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg"
        },
        "summary": "<p>Sherlock Holmes and John Watson solve complex crimes in modern-day London.</p>"
    }
];

export const movies = [
    {
        id: 1,
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Science-Fiction", "Thriller"],
        status: "Ended",
        runtime: 60,
        premiered: "2013-06-24",
        rating: { average: 6.6 },
        network: { id: 2, name: "CBS" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg"
        },
        summary: "<p>A small town is suddenly sealed off from the rest of the world by an enormous transparent dome. Its inhabitants must fight to survive while searching for answers.</p>"
    },
    {
        id: 2,
        name: "Breaking Bad",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Crime", "Thriller"],
        status: "Ended",
        runtime: 45,
        premiered: "2008-01-20",
        rating: { average: 9.5 },
        network: { id: 20, name: "AMC" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
        },
        summary: "<p>A chemistry teacher diagnosed with cancer turns to manufacturing illegal drugs to secure his family's financial future.</p>"
    },
    {
        id: 3,
        name: "Game of Thrones",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Fantasy", "Adventure"],
        status: "Ended",
        runtime: 60,
        premiered: "2011-04-17",
        rating: { average: 9.0 },
        network: { id: 8, name: "HBO" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg"
        },
        summary: "<p>Noble families fight for control of the Iron Throne while ancient threats emerge beyond the kingdom.</p>"
    },
    {
        id: 4,
        name: "The Walking Dead",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Horror", "Thriller"],
        status: "Ended",
        runtime: 60,
        premiered: "2010-10-31",
        rating: { average: 8.1 },
        network: { id: 20, name: "AMC" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/181.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/181.jpg"
        },
        summary: "<p>Survivors struggle to stay alive in a world overrun by zombies.</p>"
    },
    {
        id: 5,
        name: "The Flash",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Action", "Science-Fiction"],
        status: "Ended",
        runtime: 60,
        premiered: "2014-10-07",
        rating: { average: 7.5 },
        network: { id: 5, name: "The CW" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/1511.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/1511.jpg"
        },
        summary: "<p>A forensic scientist gains superhuman speed and uses his abilities to protect his city.</p>"
    },
    {
        id: 6,
        name: "Sherlock",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Crime", "Mystery"],
        status: "Ended",
        runtime: 90,
        premiered: "2010-07-25",
        rating: { average: 9.1 },
        network: { id: 12, name: "BBC One" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/6.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg"
        },
        summary: "<p>Sherlock Holmes and John Watson solve complex crimes in modern-day London.</p>"
    },
    {
        id: 7,
        name: "The Boys",
        type: "Scripted",
        language: "English",
        genres: ["Action", "Comedy", "Science-Fiction"],
        status: "Running",
        runtime: 60,
        premiered: "2019-07-26",
        rating: { average: 8.6 },
        network: null,
        webChannel: { id: 3, name: "Prime Video" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/465/1163914.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/465/1163914.jpg"
        },
        summary: "<p>A group of vigilantes takes on corrupt superheroes who abuse their powers.</p>"
    },
    {
        id: 8,
        name: "Stranger Things",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Horror", "Science-Fiction"],
        status: "Running",
        runtime: 60,
        premiered: "2016-07-15",
        rating: { average: 8.7 },
        network: null,
        webChannel: { id: 1, name: "Netflix" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/494/1235647.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/494/1235647.jpg"
        },
        summary: "<p>A group of friends in a small town encounter supernatural mysteries and secret government experiments.</p>"
    },
    {
        id: 9,
        name: "The Last of Us",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Action", "Horror"],
        status: "Running",
        runtime: 60,
        premiered: "2023-01-15",
        rating: { average: 8.7 },
        network: { id: 8, name: "HBO" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/447/1118460.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/447/1118460.jpg"
        },
        summary: "<p>A hardened survivor escorts a teenage girl across a dangerous post-apocalyptic world.</p>"
    },
    {
        id: 10,
        name: "Prison Break",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Crime", "Thriller"],
        status: "Ended",
        runtime: 45,
        premiered: "2005-08-29",
        rating: { average: 8.3 },
        network: { id: 4, name: "FOX" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/174.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/174.jpg"
        },
        summary: "<p>A structural engineer deliberately enters prison to help his brother escape death row.</p>"
    },
    {
        id: 11,
        name: "The Vampire Diaries",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Fantasy", "Romance"],
        status: "Ended",
        runtime: 60,
        premiered: "2009-09-10",
        rating: { average: 7.7 },
        network: { id: 5, name: "The CW" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/397.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/397.jpg"
        },
        summary: "<p>A teenage girl becomes involved in the supernatural world of two vampire brothers.</p>"
    },
    {
        id: 12,
        name: "Suits",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Legal", "Comedy"],
        status: "Ended",
        runtime: 60,
        premiered: "2011-06-23",
        rating: { average: 8.4 },
        network: { id: 30, name: "USA Network" },
        image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/133.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/0/133.jpg"
        },
        summary: "<p>A talented college dropout works as a lawyer alongside a successful attorney at a prestigious New York law firm.</p>"
    }
];

export const movieDetails = {
    "id": 1,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "type": "Scripted",
    "language": "English",
    "genres": [
        "Drama",
        "Science-Fiction",
        "Thriller"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2013-06-24",
    "ended": "2015-09-10",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {
        "time": "22:00",
        "days": [
            "Thursday"
        ]
    },
    "rating": {
        "average": 6.6
    },
    "weight": 100,
    "network": {
        "id": 2,
        "name": "CBS",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        },
        "officialSite": "https://www.cbs.com/"
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
        "tvrage": 25988,
        "thetvdb": 264492,
        "imdb": "tt1553656"
    },
    "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/610/1525272.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg"
    },
    "summary": "\u003Cp\u003E\u003Cb\u003EUnder the Dome\u003C/b\u003E is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.\u003C/p\u003E",
    "updated": 1789071819,
    "_links": {
        "self": {
            "href": "https://api.tvmaze.com/shows/1"
        },
        "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/185054",
            "name": "The Enemy Within"
        }
    }
};

// Bookmarked / Saved Shows (Following TVMaze API Show Response schema: https://www.tvmaze.com/api#shows)
export const savedShows = [
    {
        "id": 169,
        "url": "https://www.tvmaze.com/shows/169/breaking-bad",
        "name": "Breaking Bad",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Crime", "Thriller"],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 47,
        "premiered": "2008-01-20",
        "ended": "2013-09-29",
        "officialSite": "http://www.amc.com/shows/breaking-bad",
        "schedule": {
            "time": "22:00",
            "days": ["Sunday"]
        },
        "rating": {
            "average": 9.2
        },
        "weight": 98,
        "network": {
            "id": 20,
            "name": "AMC",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": null
        },
        "webChannel": null,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg"
        },
        "summary": "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who is diagnosed with Stage III cancer and given two years to live.</p>",
        "savedAt": "Saved 2 days ago"
    },
    {
        "id": 2993,
        "url": "https://www.tvmaze.com/shows/2993/stranger-things",
        "name": "Stranger Things",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Fantasy", "Science-Fiction"],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2016-07-15",
        "ended": null,
        "officialSite": "https://www.netflix.com/title/80057281",
        "schedule": {
            "time": "",
            "days": ["Thursday"]
        },
        "rating": {
            "average": 8.5
        },
        "weight": 99,
        "network": null,
        "webChannel": {
            "id": 1,
            "name": "Netflix",
            "country": null,
            "officialSite": "https://www.netflix.com/"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/396/991288.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/396/991288.jpg"
        },
        "summary": "<p>A love letter to the '80s supernatural classics, <b>Stranger Things</b> is set in Hawkins, Indiana, where a young boy vanishes into thin air.</p>",
        "savedAt": "Saved 4 days ago"
    },
    {
        "id": 46562,
        "url": "https://www.tvmaze.com/shows/46562/the-last-of-us",
        "name": "The Last of Us",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Action", "Horror"],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2023-01-15",
        "ended": null,
        "officialSite": "https://www.hbo.com/the-last-of-us",
        "schedule": {
            "time": "21:00",
            "days": ["Sunday"]
        },
        "rating": {
            "average": 8.8
        },
        "weight": 99,
        "network": {
            "id": 8,
            "name": "HBO",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.hbo.com/"
        },
        "webChannel": null,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/447/1118460.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/447/1118460.jpg"
        },
        "summary": "<p>Twenty years after civilization collapse, Joel is tasked to smuggle 14-year-old Ellie across a treacherous and infected America.</p>",
        "savedAt": "Saved 1 week ago"
    },
    {
        "id": 82,
        "url": "https://www.tvmaze.com/shows/82/game-of-thrones",
        "name": "Game of Thrones",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Adventure", "Fantasy"],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2011-04-17",
        "ended": "2019-05-19",
        "officialSite": "http://www.hbo.com/game-of-thrones",
        "schedule": {
            "time": "21:00",
            "days": ["Sunday"]
        },
        "rating": {
            "average": 9.0
        },
        "weight": 95,
        "network": {
            "id": 8,
            "name": "HBO",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.hbo.com/"
        },
        "webChannel": null,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg"
        },
        "summary": "<p>Noble families of Westeros vie for control over the Iron Throne while ancient threats awaken in the frozen north.</p>",
        "savedAt": "Saved 2 weeks ago"
    },
    {
        "id": 335,
        "url": "https://www.tvmaze.com/shows/335/sherlock",
        "name": "Sherlock",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Crime", "Mystery"],
        "status": "Ended",
        "runtime": 90,
        "averageRuntime": 90,
        "premiered": "2010-07-25",
        "ended": "2017-01-15",
        "officialSite": "http://www.bbc.co.uk/programmes/b018ttws",
        "schedule": {
            "time": "20:30",
            "days": ["Sunday"]
        },
        "rating": {
            "average": 8.9
        },
        "weight": 94,
        "network": {
            "id": 12,
            "name": "BBC One",
            "country": {
                "name": "United Kingdom",
                "code": "GB",
                "timezone": "Europe/London"
            },
            "officialSite": null
        },
        "webChannel": null,
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/154/386401.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/154/386401.jpg"
        },
        "summary": "<p>A high-octane 21st-century reimagining of Sir Arthur Conan Doyle's iconic detective in Victorian London transformed into modern metropolis.</p>",
        "savedAt": "Saved 2 weeks ago"
    },
    {
        "id": 15299,
        "url": "https://www.tvmaze.com/shows/15299/the-boys",
        "name": "The Boys",
        "type": "Scripted",
        "language": "English",
        "genres": ["Action", "Comedy", "Science-Fiction"],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2019-07-26",
        "ended": null,
        "officialSite": "https://www.amazon.com/dp/B0875THX53",
        "schedule": {
            "time": "",
            "days": ["Friday"]
        },
        "rating": {
            "average": 8.4
        },
        "weight": 98,
        "network": null,
        "webChannel": {
            "id": 3,
            "name": "Prime Video",
            "country": null,
            "officialSite": "https://www.primevideo.com"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/465/1163914.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/465/1163914.jpg"
        },
        "summary": "<p>A fun and irreverent take on what happens when superheroes abuse their superpowers rather than use them for good.</p>",
        "savedAt": "Saved 3 weeks ago"
    },
    {
        "id": 44781,
        "url": "https://www.tvmaze.com/shows/44781/severance",
        "name": "Severance",
        "type": "Scripted",
        "language": "English",
        "genres": ["Drama", "Science-Fiction", "Thriller"],
        "status": "Running",
        "runtime": 55,
        "averageRuntime": 55,
        "premiered": "2022-02-18",
        "ended": null,
        "officialSite": "https://tv.apple.com/show/severance/umc.cmc.1srk2goyh2q2zdxcx60pfw6t3",
        "schedule": {
            "time": "",
            "days": ["Friday"]
        },
        "rating": {
            "average": 8.6
        },
        "weight": 97,
        "network": null,
        "webChannel": {
            "id": 310,
            "name": "Apple TV+",
            "country": null,
            "officialSite": "https://tv.apple.com/"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/402/1006509.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/402/1006509.jpg"
        },
        "summary": "<p>Mark leads a team of office employees whose memories have been surgically divided between their work and personal lives.</p>",
        "savedAt": "Saved 1 month ago"
    },
    {
        "id": 44342,
        "url": "https://www.tvmaze.com/shows/44342/arcane",
        "name": "Arcane",
        "type": "Animation",
        "language": "English",
        "genres": ["Action", "Adventure", "Animation", "Fantasy"],
        "status": "Running",
        "runtime": 40,
        "averageRuntime": 41,
        "premiered": "2021-11-06",
        "ended": null,
        "officialSite": "https://www.netflix.com/title/81435684",
        "schedule": {
            "time": "",
            "days": ["Saturday"]
        },
        "rating": {
            "average": 9.0
        },
        "weight": 96,
        "network": null,
        "webChannel": {
            "id": 1,
            "name": "Netflix",
            "country": null,
            "officialSite": "https://www.netflix.com/"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/375/938062.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/375/938062.jpg"
        },
        "summary": "<p>Set in utopian Piltover and the oppressed underground of Zaun, the story follows two iconic League champions and the power that tears them apart.</p>",
        "savedAt": "Saved 1 month ago"
    }
];

// User Critic Reviews (following TVMaze show structure)
export const userCriticReviews = [
    {
        "id": 169,
        "name": "Breaking Bad",
        "rating": 10,
        "review": "Absolute pinnacle of television drama. Walter White's descent is legendary.",
        "date": "Oct 2026",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg"
    },
    {
        "id": 335,
        "name": "Sherlock",
        "rating": 9.5,
        "review": "Sharp, witty, and masterfully paced. Cumberbatch and Freeman chemistry is peak television.",
        "date": "Sep 2026",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/154/386401.jpg"
    },
    {
        "id": 82,
        "name": "Game of Thrones",
        "rating": 9.0,
        "review": "World-building and political intrigue at monumental scale.",
        "date": "Aug 2026",
        "image": "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg"
    }
];

// Cast & People Avatars (Following TVMaze API People/Cast Response schema: https://www.tvmaze.com/api#people)
export const tvmazePeople = [
    {
        "id": 1374,
        "url": "https://www.tvmaze.com/people/1374/bryan-cranston",
        "name": "Bryan Cranston",
        "character": "Walter White",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        },
        "birthday": "1956-03-07",
        "deathday": null,
        "gender": "Male",
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/0/2403.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/0/2403.jpg"
        }
    },
    {
        "id": 16060,
        "url": "https://www.tvmaze.com/people/16060/pedro-pascal",
        "name": "Pedro Pascal",
        "character": "Joel Miller",
        "country": {
            "name": "Chile",
            "code": "CL",
            "timezone": "America/Santiago"
        },
        "birthday": "1975-04-02",
        "deathday": null,
        "gender": "Male",
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/447/1118461.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/447/1118461.jpg"
        }
    },
    {
        "id": 70131,
        "url": "https://www.tvmaze.com/people/70131/millie-bobby-brown",
        "name": "Millie Bobby Brown",
        "character": "Eleven",
        "country": {
            "name": "United Kingdom",
            "code": "GB",
            "timezone": "Europe/London"
        },
        "birthday": "2004-02-19",
        "deathday": null,
        "gender": "Female",
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/262/655762.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/262/655762.jpg"
        }
    },
    {
        "id": 1007,
        "url": "https://www.tvmaze.com/people/1007/emilia-clarke",
        "name": "Emilia Clarke",
        "character": "Daenerys Targaryen",
        "country": {
            "name": "United Kingdom",
            "code": "GB",
            "timezone": "Europe/London"
        },
        "birthday": "1986-10-23",
        "deathday": null,
        "gender": "Female",
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/3652.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/3652.jpg"
        }
    },
    {
        "id": 3532,
        "url": "https://www.tvmaze.com/people/3532/benedict-cumberbatch",
        "name": "Benedict Cumberbatch",
        "character": "Sherlock Holmes",
        "country": {
            "name": "United Kingdom",
            "code": "GB",
            "timezone": "Europe/London"
        },
        "birthday": "1976-07-19",
        "deathday": null,
        "gender": "Male",
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4096.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4096.jpg"
        }
    }
];

// export default {data, movies, movieDetails, savedShows, userCriticReviews, tvmazePeople};