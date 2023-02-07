// @ts-expect-error
const btn = document.querySelector("#submit") as HTMLButtonElement;
const email = sessionStorage.getItem("email");
const password = sessionStorage.getItem("password");
console.log(email, password);
btn.addEventListener("click", sendMsg);

// @ts-expect-error
const socket = io();
console.log(socket.id);

async function sendMsg(event: any) {
  event.preventDefault();
  const msgInputElement = document.querySelector(
    "#message-input-box"
  ) as HTMLInputElement;
  const msg: string = msgInputElement.value;

  // @ts-expect-error
  const resp = await axios.post("http://localhost:5000/message/sendmessage", {
    email: email,
    password: password,
    message: msg,
  });

  if (resp.status == 201) {
    const message = document.createElement("span");
    const pTag = document.createElement("p");
    const messageContainer = document.querySelector(
      ".client-message"
    ) as HTMLDivElement;
    message.className = "message-user";
    pTag.innerText = `${msg}`;
    
    message.appendChild(pTag);
    messageContainer.appendChild(message);
  }
}

