const express = require('express');
const cors = require('cors');

const app = express();

//Keyword use is strictly for middleware
app.use(express.json());
app.use(cors());

let songs = [
    {
        id: 1,
        name: "Living on the edge",
        singer: "Bon Jovi",
        category: [ "Rock", "pop-rock"]
    },

    {
        id: 2,
        name: "Comfortably numb",
        singer: "Pink Floyd",
        category: [ "Rock", "psychedelic-rock"]
    },

    {
        id: 3,
        name: "As it was",
        singer: "Harry styles",
        category: [ "pop"]
    },
    {
        id: 4,
        name: "Unforgiven",
        singer: "Metallica",
        category: [ "Rock", "heavy-metal"]
    },
    {
        id: 5,
        name: "Dark-days",
        singer: "Nirvana",
        category: [ "grunge", "rock"]
    },
    {
        id: 6,
        name: "Smells Like teen spirig ",
        singer: "Bon Jovi",
        category: [ "Rock", "pop-rock"]
    }
]

//Req is anything requested from the font end
//Res is anything sent from the backend

let id = 7

app.get('/api/songs', (req, res) => {
    res.status(200).send(songs)
})

app.post('/api/song', (req, res) => {
    const { name, singer, category } = req.body
    let newSong = {
        id,
        name,
        singer,
        category
    }
    songs.push(newSong)
    res.status(200).send(songs)
})

app.listen(4004, () =>console.log('Up & Running on port 4004'))