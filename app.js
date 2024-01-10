const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 매직 상수

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 실행하지 못하게 막아줌
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    // greeting.innerText = "Hello " + username; // string과 변수를 합치는 방법
    greeting.innerText =`Hello ${username}`; // ``(백틱)을 사용하여 변수(사용예시:${변수})를 string 안에 포함시킴
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);