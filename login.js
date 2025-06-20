document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("login-form");
    let idInput = document.getElementById("id");
    let pwInput = document.getElementById("password");
    let idMsg = document.getElementById("id_msg");

    loginForm.addEventListener("submit", function (event) {
        if (idInput.value.trim() === "") {
            alert("아이디를 입력하세요.");
            idInput.focus();
            event.preventDefault();
            return false;
        } else if (pwInput.value.trim() === "") {
            alert("비밀번호를 입력하세요.");
            pwInput.focus();
            event.preventDefault();
            return false;
        }
    });

    idInput.addEventListener("keyup", function () {
        let idValue = idInput.value.trim();
        if (idValue.length === 0) {
            idMsg.classList.remove("id_success", "id_fail");
            idMsg.classList.add("id_init");
            idMsg.textContent = "아이디를 입력해주세요.";
        } else if (idValue.length < 4) {
            idMsg.textContent = "아이디는 4자 이상입니다.";
            idMsg.classList.remove("id_init", "id_success");
            idMsg.classList.add("id_fail");
        } else {
            idMsg.textContent = "정상적인 아이디입니다.";
            idMsg.classList.remove("id_init", "id_fail");
            idMsg.classList.add("id_success");
        }
    });
});