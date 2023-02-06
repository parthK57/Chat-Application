// @ts-expect-error
const btn = document.querySelector("#submit") as HTMLButtonElement;
const email = sessionStorage.getItem("email");
const password = sessionStorage.getItem("password");
console.log(email, password);
btn.addEventListener("click", sendMsg);

async function sendMsg(event: any) {
  event.preventDefault();
  const msgInputElement = document.querySelector(
    "#message"
  ) as HTMLInputElement;
  const msg: string = msgInputElement.value;

  // @ts-expect-error
  const resp = await axios.post("http://localhost:5000/message/sendmessage", {
    email: email,
    password: password,
    message: msg,
  });

  if (resp.status == 201) {
    const notify = document.createElement("div");
    const messageContainer = document.querySelector(
      "#message-container"
    ) as HTMLDivElement;
    notify.className = "container-fluid text-center notify";
    notify.innerText = `${msg}`;

    messageContainer.appendChild(notify);
  }
}

function getMsg() {
  setInterval(async () => {
    // @ts-expect-error
    const resp = await axios.post("http://localhost:5000/message/getmessage", {
      email: email,
      password: password,
    });
    const data = resp.data;
    if (resp.status === 200) {
      const messageContainer = document.querySelector(
        "#message-container"
      ) as HTMLDivElement;
      for (let i = 0; i < data.length; i++) {
        const notify = document.createElement("div");
        notify.className = "container-fluid text-center notify";
        const email = data[i].email;
        const message = data[i].message;
        notify.innerText = `${email}: ${message}`;

        messageContainer.appendChild(notify);
      }
    }
  }, 1000);
}
getMsg();
