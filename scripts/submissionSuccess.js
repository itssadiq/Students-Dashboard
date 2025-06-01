import { fetchApplicationDetailFromDB } from "../backend/database.js";

document.addEventListener("DOMContentLoaded", async () => {
  const applications = await fetchApplicationDetailFromDB();
  console.log(applications);

  const User = JSON.parse(localStorage.getItem("User"));

  applications.forEach((application) => {
    if (User.id === application.id) {
      userApplication = application;
    }
  });

  const applicationID = userApplication.id;
  const trimmed = applicationID.substring(0, 7);
  const appID = `APP-${trimmed}`;
  const program1 = userApplication.program_1;
  const program2 = userApplication.program_2;
  const today = new Date();
  const formattedDate = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;

  document.querySelector(".application-id").innerHTML = appID;
  document.querySelector(".program1").innerHTML = program1;
  document.querySelector(".program2").innerHTML = program2;
  document.querySelector(".current-date").innerHTML = formattedDate;

  const dashboardButton = document.querySelector(".dashboard-button");

  dashboardButton.addEventListener("click", () => {
    window.location.href = "./studentsDashboard.html";
  });
});
