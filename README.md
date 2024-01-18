# Vanilla JS Practice

바닐라 자바스크립트로 크롬앱 만들기(feat. nomadcoders)

## 4 LOGIN

### 4.1 Form Submission
- input의 유효성 검사를 작동시키기 위해서는 form 안에 input이 들어가야 함.
- 입력을 하고 버튼(또는 엔터)을 누르면, 새로고침 됨.(웹사이트 재시작 > form이 submit되고 있어서)
- 더이상 button의 click 이벤트를 신경 쓸 필요 없음.
- 문제 : 이제 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하고 싶음.
- 해결사항 : form이 submit 되는 걸 막아주기

### 4.2 Events
- preventDefault() : 브라우저의 기본 동작을 실행하지 못하게 막아줌

### 4.4 Getting Username
- 유저가 이름을 제출하면, form 자체가 없어지기
- 유저에게 인사하는 문구 출력하기
- class name 'hidden' 사용 = display:none;
- classList.add, .remove를 이용하여 html요소 사라지고, 보이게 하기
- ``(백틱), ${} : 변수를 문자열 안에 포함시키는 방법 
- 문제 : 유저를 기억하지 못함. 새로고침할 때마다 새로 로그인 해줘야 한다. 새로고침해도 form 볼 필요없이 이름이 저장되어 있으면 좋겠어.

### 4.5 Saving Username
- 유저 정보를 local Storage에 저장한다.
- localStorage API 사용하기
- setItem : local storage에 정보를 저장할 수 있음.
- getItem : 정보 불러오기
- removeItem : 정보 삭제하기
- 문제 : 로컬스토리지에 username이 저장되어 있지만, 아직도 새로고침하면 form이 표시 됨. 

### 4.6 Loading Username
- 초기 세팅으로 form과 h1 모두 안보이게 처리
- 유저 정보를 확인했을 때 local storage에 유저정보가 있으면 form을 보이지 않고 h1이 보이도록 한다.
- if문을 사용하여 저장된 값이 있는지 확인


## 5 CLOCK

###5.0 Intervals
- clock을 시작하면서 login은 greetings이라는 파일로 변경, 파일을 분리
- setInterval() : 일정 시간 간격으로 원하는 함수를 반복적으로 실행(호출)

### 5.1 Timeouts and Dates
- setTimeout() : 일정 시간이 지난 후에 함수를 실행하는 방법
- 시계 만들기 : Date()의 메서드 사용
- getDate(), getDay(), getFullYear(), getHours(), getMinutes(), getSeconds()
- 문제 : 예를 들어 12시 4분 1초 일 때(10의자리 이하의 숫자), 숫자가 4, 1과 같이 한자리(12:4:1)로 보임. 두자리로 보이고 싶음(ex. 12:04:01)

### 5.2 PadStart
- padStart() : string에 쓸 수 있는 function
- 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환. 채워넣기는 대상 문자열의 시작(좌측)부터 적용
- 문법 : str.padStart(targetLength [, padString])
- padEnd()도 있음 : 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환. 채워넣기는 대상 문자열의 끝(우측)부터 적용
- 문제 : 시계에 padStart()를 사용 > 그러나 error : number에는 쓸 수 없음
- 해결 : String() - number를 str로 변환하기 위해 String()으로 변환대상을 감싸줌


## 6 QUOTES AND BACKGROUND

### 6.0 Quotes 명언
- 화면에 명언을 랜덤으로 나오게 하는 기능 추가하기 
- 명언 10개가 든 Array를 준비
- 각 명언은 object 형식 - 명언, 작가
- randomness 무작위성
    - Math.random()*10 <= 랜덤은 0.xxxx값만 주기 때문에
- 정수로 만들기 : 
    1. Math.round() 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
    2. Math.ceil() 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환 
    3. Math.floor() 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
- 문제 : array를 불러올 때 10이라는 숫자로 하드코딩을 했다는 것 -> 명언을 10개 가지고 있을 때만 동작
- 해결 : array가 얼마나 긴지 알아내는 것이 필요 => [1,2,3,4,5].length

### 6.1 Background
- 배경을 랜덤으로 나오게 하는 기능 추가
- 목표 : 랜덤한 숫자를 얻어서 그걸로 이미지를 고르고 그 이미지를 body에 추가하기
- 랜덤 숫자 얻어서 이미지 고르기 : quote와 거의 같음
- html element 만들기 : document.createElement()
- bgImage를 html의 body 내부에 추가하기 : document.body.appendChild()


## 7 TO DO LIST

### 7.0 setup
- form과 input을 만들고, submit했을 때 기본행동을 초기화

### 7.1 Adding To Dos
- paintToDo(newTodo) 함수 추가
- appendChild() : 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
- greeting과 마찬가지로 submit event를 받고, 기본동작을 막고, input에서 value를 얻어냄, (new기능)paintToDo함수 호출
- 문제 : 1. list item을 지울 수 없다는 것 2. 새로고침하면 list가 사라짐

### 7.2 Deleting To Dos
- 투두 삭제하는 기능
- 버튼을 만들어서 버튼을 누르면 투두가 삭제되도록 하려고 함
- button을 클릭하면 > deleteToDo() 실행
- 문제 : 여러 개의 버튼이 있을 때, 버튼이 클릭되고 있는데 어떤 버튼이 클릭됐는지 알 수 없음
- button을 클릭할 때 deleteToDo 함수에 event를 얻음. 이벤트는 타겟을 가짐
- 타겟 = 버튼, 그 부모요소는 li라는 것을 알아낸 후, 삭제시킴

### 7.3 Saving To Dos
- 투두를 브자우저에 저장하는 기능
- 로컬 스토리지를 사용하기
    1. array 만들기 - 뉴투두가 paint 될 때마다 그 텍스트를 array에 push
    2. array(입력받은 newTodo)를 localStorage에 넣기
    - 문제 : 로컬스토리지에 배열 저장 불가(온리 텍스트만 가능)
    - 문제2 : 새로고침하면 로컬에 남아있다가 새로운 텍스트를 입력하면 이전기록이 사라지고 새로운 텍스트가 저장됨 또는 X버튼으로 li 삭제를 해도 로컬스토리지에는 그대로 남아있음
    - 해결 : JSON.stringify() 사용하면 텍스트를 배열로 저장 가능
- 문제 : 새로고침하면 toDOs가 localStorage에는 남아있지만 화면에는 나타나지 않음

### 7.4 Loading To Dos part One
- 로컬스토리지에 저장된 todo가 있으면 각 todo를 console에 출력되도록 함
- JSON.stringify([1,2,3,4]) :array을 string으로 변환
- => '[1,2,3,4]'
- JSON.parse('[1,2,3,4]') : string을 array로 변환
- => (4) [1, 2, 3, 4]
- forEach : array의 각 item에 대해 function을 실행하게 해줌

### 7.5 Loading To Dos part Two
- parseToDos array의 각 item를 paint하기(브라우저 스크린에 나타내기)
- 문제 : 새로고침 후 투두를 추가하면 로컬스토리지가 빈배열에서 시작 <- 앱 시작할 때 array가 항상 비어있기 때문
- 해결 : toDos = parsedToDos :  이전 todo 가져와서 복원
- 문제2 : 화면에서 삭제를 해도 로컬스토리지에선 삭제가 안됨

### 7.6 Deleting To Dos part One
- 원하는 것 : 투두를 삭제하는 기능 - 투두를 지울 때마다 로컬 스토리지에 업데이트를 하도록 함
- 클릭한 버튼에 대응되는 li를 삭제해야 함
- 그러기 위해 데이터베이스에 id를 저장하는 옵션을 줌(array item을 단순text가 아닌 object({id:random, text:"a"})로 만들고 싶음<-유일성을 부여)
- 랜덤 id 만드는 법 : Date.now()
- 문제 : array에서 item을 지우는 법