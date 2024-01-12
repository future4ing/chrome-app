const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 매직 상수
const USERNAME_KEY = "username"; // 대문자 쓰임은 실수를 만들고 싶지 않은 string이라는 사실을 상기시키기 좋음

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 실행하지 못하게 막아줌
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeting(username);
}

function paintingGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 저장된 username유무에 따라 show하는 게 달라짐 -> 두개 다 안보이게 기본 세팅
if(savedUsername === null) { // 저장된 username이 없다면
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintingGreeting(savedUsername);
}
