const btn = document.querySelector("#submit__signUp") as HTMLButtonElement;

const registerUser = async (e) => {
  e.preventDefault();
  const usernameElement = document.querySelector(
    "#username"
  ) as HTMLInputElement;
  const emailElement = document.querySelector("#email") as HTMLInputElement;
  const phoneNumberElement = document.querySelector(
    "#phonenumber"
  ) as HTMLInputElement;
  const passwordElement = document.querySelector(
    "#password"
  ) as HTMLInputElement;

  const username: string = usernameElement.value;
  const email: string = emailElement.value;
  const phoneNumber: string = phoneNumberElement.value;
  const password: string = passwordElement.value;
  console.log(email);
  const resp = await axios.post("http://localhost:5000/users/register", {
    username: username,
    email: email,
    phonenumber: phoneNumber,
    password: password,
  });
  console.log(resp);
};

btn.addEventListener("click", registerUser);
