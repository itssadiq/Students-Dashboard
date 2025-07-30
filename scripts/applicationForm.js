import {
  saveApplicationToDB,
  fetchApplicationDetailFromDB,
} from "../backend/database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const fullNameEl = document.getElementById("fullName");
  const fatherNameEl = document.getElementById("fatherName");
  const emailEl = document.getElementById("email");
  const phoneEl = document.getElementById("phone");
  const dobEl = document.getElementById("dob");
  const genderEl = document.getElementById("gender");
  const addressEl = document.getElementById("address");
  const cityEl = document.getElementById("city");
  const educationEl = document.getElementById("education");
  const passingYearEl = document.getElementById("year");
  const instituteEl = document.getElementById("institute");
  const program1El = document.getElementById("program1");
  const program2El = document.getElementById("program2");

  const User = JSON.parse(localStorage.getItem("User"));

  const id = User.id;

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const full_name = fullNameEl.value;
    const father_name = fatherNameEl.value;
    const email = emailEl.value;
    const phone_number = phoneEl.value;
    const dob = dobEl.value;
    const gender = genderEl.value;
    const address = addressEl.value;
    const city = cityEl.value;
    const qualification = educationEl.value;
    const passing_year = passingYearEl.value;
    const institute_name = instituteEl.value;
    const program_1 = program1El.value;
    const program_2 = program2El.value;

    if (form.checkValidity()) {
      try {
        console.log("successfull");
        saveApplicationToDB(
          id,
          full_name,
          father_name,
          email,
          phone_number,
          dob,
          gender,
          address,
          city,
          qualification,
          passing_year,
          institute_name,
          program_1,
          program_2
        );

        window.location.href = "./submissionSuccess.html";
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    } else {
      form.reportValidity();
    }
  });
});
