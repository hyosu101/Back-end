"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
    const req = {
      id: id.value,
      pw: pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "applicaton/json"
        },
        body : JSON.stringify(req)
    });
}

/* (btn).on('click', function(){
    if((id).val() == "") {
        (id).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    }
    else if((pw).val() == "") {
        (pw).next('label').addClass('warning');
        setTimeout(function() {
            $('label').removeClass('warning');
        },1500);
    }
    else if((id).val() == "김효수" && (pw).val() == "201810458") {
        (".login_form").css({"display" : "none"});
        (".npoint").css({"display" : "flex"});
        (".id-text").css({"color" : "#fff"});
    const name = (id).val();
        (".id-text").text(name);

    } else {
        alert("정보가 일치하지 않습니다.");
    }
}); */