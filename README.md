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