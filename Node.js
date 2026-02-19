// server.js
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "healthcare_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username=? AND password=?";
  db.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ success: true, role: result[0].role });
    } else {
      res.send({ success: false });
    }
  });
});

// Add Patient
app.post("/addPatient", (req, res) => {
  const { name, age, disease } = req.body;
  const sql = "INSERT INTO patients (name, age, disease) VALUES (?, ?, ?)";
  db.query(sql, [name, age, disease], err => {
    if (err) throw err;
    res.send({ message: "Patient added" });
  });
});

// Book Appointment
app.post("/appointment", (req, res) => {
  const { patient, doctor, date } = req.body;
  const sql =
    "INSERT INTO appointments (patient_name, doctor_name, date) VALUES (?, ?, ?)";
  db.query(sql, [patient, doctor, date], err => {
    if (err) throw err;
    res.send({ message: "Appointment booked" });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
