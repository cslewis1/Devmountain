const db = require("./db.json");
let id = db.length;

module.exports = {
  getHouses: (req, res) => {
    let allHouses = db;
    res.status(200).send(allHouses);
  },

  createHouse: (req, res) => {
    id++;
    let newHouse = { ...req.body, id: id };
    db.push(newHouse);
    res.status(200).send(db);
  },

  updateHouse: (req, res) => {
    const { houseID } = req.params;
    const { type } = req.body;

    for (let i of db) {
      if (type === "plus") i.price++;
      if (type === "minus") i.price--;
    }
    res.status(200).send(db);
  },

  deleteHouse: (req, res) => {
    const { houseID } = req.params;
    const del = db.filter((house) => house.id === +houseID);
    db.splice(del[0], 1);
    res.status(200).send(db);
  },
};
