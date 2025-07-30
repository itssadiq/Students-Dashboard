import { saveSignUpDetailsToDB } from "../backend/database.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameElement = document.querySelector(".full-name");
    const emailElement = document.querySelector(".email");
    const passwordElement = document.querySelector(".password");

    const full_name = nameElement.value;
    const email_address = emailElement.value;
    const password = passwordElement.value;

    try {
      const data = await saveSignUpDetailsToDB(
        full_name,
        email_address,
        password
      );

      window.location.href = "./studentsLogin.html";
    } catch (error) {
      console.error("error signing up", error.message);
    }
  });
});
