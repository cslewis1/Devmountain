const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const userController = require("./controllers/userController");
const {getAllMovies, createMovie, deleteMovie, updateMovie } = userController;

app.get(`/api/movies`, getAllMovies);
app.post("/api/movies", createMovie);
app.delete('/api/movies/:movie_id', deleteMovie)
app.put('/api/movies/:movie_id', updateMovie)


app.listen(4004, () => console.log("Server running on 4004"));
