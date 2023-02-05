// @ts-expect-error
const btn = document.querySelector("#submit") as HTMLButtonElement;
const email = sessionStorage.getItem("email");
const password = sessionStorage.getItem("password");

btn.addEventListener("click", sendMsg);

async function sendMsg(event: any) {
  event.preventDefault();
  const msgInputElement = document.querySelector(
    "#message"
  ) as HTMLInputElement;
  const msg: string = msgInputElement.value;

  // @ts-expect-error
  const resp = axios.post("http://localhost:5000/message/sendmessage", {
    email: email,
    password: password,
    message: msg,
  });
  console.log(resp);
}
