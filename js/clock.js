const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 웹사이트가 load되자마자 getClock()을 실행
setInterval(getClock, 1000); // and 1초마다 getClock을 실행
