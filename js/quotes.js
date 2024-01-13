const quotes = [
    {
        quote: "성공은 열심히 노력하며 기다리는 사람에게 찾아온다.",
        author: "토마스 A. 에디슨",
    },
    {
        quote: "옥은 다듬지 않으면 그릇을 이루지 못하고, 사람은 배우지 않으면 도를 알지 못한다.",
        author: " 예기 학기 편",
    },
    {
        quote: "배우기만 하고 생각을 하지 않으면 어둡고, 생각만 하고 배우지 않으면 위태롭다.",
        author: "공자",
    },
    {
        quote: "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.",
        author: "생텍쥐페리",
    },
    {
        quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
        author: "데모스테네스"
    },
    {
        quote: "성공이란 대담무쌍하게 가는 아이이다.",
        author: "C.N. 보비",
    },
    {
        quote: "성공은 대개 그를 좇을 겨를도 없이 바쁜 사람에게 온다.",
        author: "헨리 데이비드 소로우",
    },
    {
        quote: "성공은 실패가능성과 패배의 위험을 무릅쓰고 얻어야 한다. 위험 없이는 성취의 보람도 없다.",
        author: "레어 크록",
    },
    {
        quote: "성공은 영원하지 않고, 실패는 치명적이지 않다.",
        author: "마이크 디트카",
    },
    {
        quote: "성공을 확신하는 것이 성공에의 첫걸음이다.",
        author: "로버트 슐러",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 랜덤으로 명언과 작가 불러오기
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; // array[]

// 화면에 출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;