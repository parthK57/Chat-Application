"use strict";
// @ts-expect-error
const btn = document.querySelector("#submit");
const email = sessionStorage.getItem("email");
const password = sessionStorage.getItem("password");
btn.addEventListener("click", sendMsg);
async function sendMsg(event) {
    event.preventDefault();
    const msgInputElement = document.querySelector("#message");
    const msg = msgInputElement.value;
    // @ts-expect-error
    const resp = axios.post("http://localhost:5000/message/sendmessage", {
        email: email,
        password: password,
        message: msg,
    });
    console.log(resp);
}
