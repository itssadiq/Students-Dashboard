import { fetchApplicationDetailFromDB } from "../backend/database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const applications = await fetchApplicationDetailFromDB();

  const User = JSON.parse(localStorage.getItem("User"));

  document.querySelector(".js-userName").innerHTML = User.full_name;

  const userID = User.id;
  let userApplication;

  applications.forEach((application) => {
    if (userID === application.id) {
      userApplication = application;
    }
  });

  if (userApplication) {
    const applicationDate = userApplication.created_at;

    const cleanedDateStr = applicationDate.replace(/\.\d+/, "");

    const date = new Date(cleanedDateStr);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    document.querySelector(".application-status").innerHTML =
      userApplication.application_status;

    document.querySelector(
      ".application-date"
    ).innerHTML = `Applied On: ${formattedDate}`;
  }
});
