"use strict";


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw = document.querySelector("#pw"),
    confirmPw = document.querySelector("#confirm-pw"),
    rbtn = document.querySelector("#button");

rbtn.addEventListener("click", reigster);

function reigster() {
    const req = {
    id : id.value,
    name : name.value,
    pw : pw.value,
    confirmPw : confirmPw.value,
    };

    fetch("/reigster", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}