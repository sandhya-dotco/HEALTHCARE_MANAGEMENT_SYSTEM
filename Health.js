// Health Care Management System - Basic JavaScript

// Dummy data storage
let users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "doctor", password: "doc123", role: "doctor" },
  { username: "patient", password: "pat123", role: "patient" }
];

let patients = [];
let appointments = [];

// Login Function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    alert(`Login successful as ${user.role}`);
    localStorage.setItem("role", user.role);
  } else {
    alert("Invalid username or password");
  }
}

// Add Patient
function addPatient() {
  const name = document.getElementById("pname").value;
  const age = document.getElementById("page").value;
  const disease = document.getElementById("pdisease").value;

  if (name && age && disease) {
    patients.push({ name, age, disease });
    alert("Patient added successfully");
  } else {
    alert("Fill all fields");
  }
}

// Book Appointment
function bookAppointment() {
  const patientName = document.getElementById("apname").value;
  const doctorName = document.getElementById("docname").value;
  const date = document.getElementById("date").value;

  if (patientName && doctorName && date) {
    appointments.push({ patientName, doctorName, date });
    alert("Appointment booked");
  } else {
    alert("Fill all fields");
  }
}

// Display Patients
function showPatients() {
  let output = "";
  patients.forEach((p, i) => {
    output += `${i + 1}. ${p.name} - ${p.age} - ${p.disease}\n`;
  });
  alert(output || "No patients found");
}

// Display Appointments
function showAppointments() {
  let output = "";
  appointments.forEach((a, i) => {
    output += `${i + 1}. ${a.patientName} with ${a.doctorName} on ${a.date}\n`;
  });
  alert(output || "No appointments found");
}
