# Vanilla JS Practice

바닐라 자바스크립트로 크롬앱 만들기(feat. nomadcoders)

###4.1 Form Submission
- input의 유효성 검사를 작동시키기 위해서는 form 안에 input이 들어가야 함.
- 입력을 하고 버튼(또는 엔터)을 누르면, 새로고침 됨.(웹사이트 재시작 > form이 submit되고 있어서)
- 더이상 button의 click 이벤트를 신경 쓸 필요 없음.
- 문제 : 이제 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하고 싶음.
- 해결사항 : form이 submit 되는 걸 막아주기

###4.2 Events
- preventDefault() : 브라우저의 기본 동작을 실행하지 못하게 막아줌

###4.4 Getting Username
- 유저가 이름을 제출하면, form 자체가 없어지기
- 유저에게 인사하는 문구 출력하기
- class name 'hidden' 사용 = display:none;
- classList.add, .remove를 이용하여 html요소 사라지고, 보이게 하기
- ``(백틱), ${} : 변수를 문자열 안에 포함시키는 방법 
- 문제 : 유저를 기억하지 못함. 새로고침할 때마다 새로 로그인 해줘야 한다. 새로고침해도 form 볼 필요없이 이름이 저장되어 있으면 좋겠어.

###4.5 Saving Username
- 유저 정보를 local Storage에 저장한다.
- localStorage API 사용하기
- setItem : local storage에 정보를 저장할 수 있음.
- getItem : 정보 불러오기
- removeItem : 정보 삭제하기
- 문제 : 로컬스토리지에 username이 저장되어 있지만, 아직도 새로고침하면 form이 표시 됨. 

###4.6 Loading Username
- 초기 세팅으로 form과 h1 모두 안보이게 처리
- 유저 정보를 확인했을 때 local storage에 유저정보가 있으면 form을 보이지 않고 h1이 보이도록 한다.
- if문을 사용하여 저장된 값이 있는지 확인