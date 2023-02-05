const loginBtn = document.querySelector("#submit") as HTMLButtonElement;

const loginUser = async (e) => {
  e.preventDefault();
  try {
    const emailElement = document.querySelector("#email") as HTMLInputElement;
    const passwordElement = document.querySelector(
      "#password"
    ) as HTMLInputElement;

    const email = emailElement.value;
    const password = passwordElement.value;
    const resp = await axios.post("https://localhost:5000/users/login", {
      email: email,
      password: password,
    });

    if (resp.status == 200) {
      const notify = document.createElement("div");
      const body = document.querySelector("body") as HTMLBodyElement;
      notify.className =
        "container d-flex justify-content-center align-content-center success-notify";
      notify.innerText = "Logging In";

      body.appendChild(notify);
      setTimeout(() => {
        body.removeChild(notify);
        sessionStorage.setItem("email", `${email}`);
        sessionStorage.setItem("password", `${password}`);
        window.location.href = "http://127.0.0.1:5500/Frontend/home.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
};
