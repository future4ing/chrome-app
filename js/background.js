// 목표 : 랜덤한 숫자를 얻어서 그걸로 이미지를 고르고 그 이미지를 body에 추가하기

const images = ["0.jpg", "1.jpg", "2.jpg"];
// 랜덤 숫자 얻어서 이미지 고르기
const chosenImage = images[Math.floor(Math.random()*images.length)]; 

// console.log(chosenImage); // 검사

// html element 만들기
const bgImages = document.createElement("img");
bgImages.src = `img/${chosenImage}`;

// console.log(bgImages); // 검사

// bgImage를 html의 body 내부에 추가하기
document.body.appendChild(bgImages); // 젤 끝에 추가해 줌