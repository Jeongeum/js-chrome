const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 별로 중요하지 않은 건 변수 명을 대문자로 적는다.
const USERNAME_KEY = "username"; // 반복되는 string은 변수에 저장해서 사용하는게 개발자의 오타 오류로 인한 에러를 방지할 수 있다.

function onLoginSubmit(e) {
  e.preventDefault(); //event의 기본 행동이 발생되지 않도록 함. 여기서는 form을 submit하면 브라우저는 기본적으로 새로고침 하는 기본 동작을 하는데 그것을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME); // form을 숨겨준다.
  const username = loginInput.value; //input에 입력한 값을 username에 저장한다.
  localStorage.setItem(USERNAME_KEY, username); //입력한 유저명을 저장해서 기억해줌.
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`; // "Hello + username" 보다 훨씬 좋음!
  greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 클래스를 삭제한다. (h1 태그가 보여야 하니까 form은 안보이게 함.)
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form (만약 저장된 username이 없으면 hidden 클래스 삭제하고 폼을 띄운다.)
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit); //submit 이벤트 발생 시 onLoginSubmit 함수 실행
} else {
  // show the greetings (만약 저장된 username이 있으면 h1태그에 username 넣어서 띄운다.)
  paintGreetings(savedUsername);
}

/* 
정리
: 처음에는 form과 h1은 hidden 클래스때문에 숨겨져 있음.
js가 username_key를 가지고 localStorage 확인함.
처음엔 없으니까 form을 보여줌. (hidden 클래스 삭제)
서브밋 기다렷다가 이벤트 발생 시 onLoginSubmit 함수 실행.
기본 동작 못하게 막고 from을 다시 숨긴 후, input에 적은 값을 username에 저장.
입력한 유저명을 저장하고 paintGretings 함수 실행.

h1태그에 text 적어주고 띄워야하기 때문에 hidden 클래스 삭제함.

그럼 localStorage에서 username이 key인 값을 가져와서 savedUsername에 넣고 다시 if문 돌림.
로컬스토리지에서 값 받아와서 null이 아니니까 paintGreetings 함수 실행 (h1 태그 보여줌)


*/
