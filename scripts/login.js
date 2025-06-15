import { fetchUserDetailsFromDB } from "../backend/database.js";

let loginDetails = [];
document.addEventListener("DOMContentLoaded", async () => {
  const buttonElement = document.querySelector(".sign-in-button");
  const emailElement = document.querySelector(".email-address");
  const passwordElement = document.querySelector(".password");
  const form = document.querySelector("form");
  loginDetails = await fetchUserDetailsFromDB();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      userLogin(emailElement, passwordElement);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
});

async function userLogin(emailElement, passwordElement) {
  const email = emailElement.value;
  const password = passwordElement.value;

  let matchingUser;

  // if (email == "" || password == "") {
  //   alert("Inputs cannot be empty");
  // } else {
  loginDetails.forEach((user) => {
    if (email === user.email_address) {
      matchingUser = user;
      localStorage.setItem("User", JSON.stringify(matchingUser));
    }
  });

  if (matchingUser) {
    if (matchingUser.password === password) {
      window.location.href = "./studentsDashboard.html";
    } else {
      alert("worng password");
    }
    // }
  }
}
