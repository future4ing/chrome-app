const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    const username = loginInput.value;

    event.preventDefault(); // 브라우저의 기본 동작을 실행하지 못하게 막아줌
    console.log(event);
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);