import { fetchUserDetailsFromDB } from "../backend/database.js";

let loginDetails = [];
document.addEventListener("DOMContentLoaded", async () => {
  const buttonElement = document.querySelector(".sign-in-button");
  const emailElement = document.querySelector(".email-address");
  const passwordElement = document.querySelector(".password");
  loginDetails = await fetchUserDetailsFromDB();

  buttonElement.addEventListener("click", async () => {
    try {
      userLoginIn(emailElement, passwordElement);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
});

function userLoginIn(emailElement, passwordElement) {
  const email = emailElement.value;
  const password = passwordElement.value;

  let matchingUser;

  if (email == "" || password == "") {
    alert("Inputs cannot be empty");
  } else {
    loginDetails.forEach((user) => {
      if (email === user.email_address) {
        matchingUser = user;
      }
    });

    if (matchingUser) {
      if (matchingUser.password === password) {
        alert("Login successfull");
      } else {
        alert("worng password");
      }
    }
  }
}
