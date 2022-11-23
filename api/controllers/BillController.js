"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
  get: (req, res) => {
    let sql = "SELECT * FROM bill";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO bill SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
};
