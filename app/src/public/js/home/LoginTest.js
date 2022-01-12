"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
    const req = {
      id : id.value,
      pw : pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "applicaton/json",
        },
        body: JSON.stringify(req),
    });
};