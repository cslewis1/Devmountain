const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const houseController = require("./controller");
const { getHouses, createHouse, deleteHouse, updateHouse } = houseController;

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:houseID", updateHouse);
app.delete("/api/houses/:houseID", deleteHouse);

app.listen(4004, () => console.log("Server running on 4040"));
