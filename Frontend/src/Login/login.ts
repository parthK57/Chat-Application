const loginBtn = document.querySelector("#submit") as HTMLButtonElement;

loginBtn.addEventListener("click", loginUser);

async function loginUser(event: any) {
  event.preventDefault();
  try {
    const emailElement = document.querySelector("#email") as HTMLInputElement;
    const passwordElement = document.querySelector(
      "#password"
    ) as HTMLInputElement;

    const email = emailElement.value;
    const password = passwordElement.value;
    console.log(email, password);

    // @ts-expect-error
    const resp = await axios.post("http://localhost:5000/users/login", {
      email: email,
      password: password,
    });

    if (resp.status == 200) {
      const notify = document.createElement("div");
      const body = document.querySelector("body") as HTMLBodyElement;
      notify.className =
        "container d-flex justify-content-center align-content-center notify";
      notify.innerText = "Logging In";

      body.appendChild(notify);
      setTimeout(() => {
        body.removeChild(notify);
        sessionStorage.setItem("email", `${email}`);
        sessionStorage.setItem("password", `${password}`);
        window.location.href = "http://127.0.0.1:5500/Frontend/src/Home/home.html";
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}
