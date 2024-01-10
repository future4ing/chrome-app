

###4.2 Form Submission
- input의 유효성 검사를 작동시키기 위해서는 form 안에 input이 들어가야 함.
- 입력을 하고 버튼(또는 엔터)을 누르면, 새로고침 됨.(웹사이트 재시작 > form이 submit되고 있어서)
- 더이상 button의 click 이벤트를 신경 쓸 필요 없음.
- 문제 : 이제 브라우저가 새로고침하지 않고 user 정보를 저장하도록 하고 싶음.
- 해결사항 : form이 submit 되는 걸 막아주기