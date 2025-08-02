import {
  fetchApplicationDetailFromDB,
  checkAuthentication,
  signOutUser,
} from "../backend/database.js";

document.addEventListener("DOMContentLoaded", async () => {
  let user;

  try {
    const data = await checkAuthentication();

    if (data.session == null) {
      window.location.href = "studentsLogin.html";
    }
    user = data.session.user;
  } catch (error) {
    console.log("error", error.message);
  }
  const applications = await fetchApplicationDetailFromDB();

  document.querySelector(".js-userName").innerHTML =
    user.user_metadata.full_name;

  const userID = user.id;
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

  document.getElementById("logout").addEventListener("change", async () => {
    try {
      const data = await signOutUser();
      window.location.href = "./studentsLogin.html";
    } catch (error) {
      console.log("error", error.message);
    }
  });
});
