import { signInUser } from "../backend/database.js";

let loginDetails = [];
document.addEventListener("DOMContentLoaded", async () => {
  const emailElement = document.querySelector(".email-address");
  const passwordElement = document.querySelector(".password");
  const form = document.querySelector("form");

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
  try {
    loginDetails = await signInUser(email, password);

    if (loginDetails.session) {
      window.location.href = "studentsDashboard.html";
    }
  } catch (error) {
    console.log("error", error.message);
  }
}
