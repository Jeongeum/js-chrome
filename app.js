const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
function onLoginSubmit(e) {
  //js는 기본적으로 현재 일어난 이벤트에 대한 정보를 함수에게 준다.
  /*
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long");
  }
  */
  e.preventDefault(); //event의 기본 행동이 발생되지 않도록 함. 여기서는 form을 submit하면 브라우저는 기본적으로 새로고침 하는 기본 동작을 하는데 그것을 막아준다.
}
loginForm.addEventListener("submit", onLoginSubmit);
/*
function handleLinkClick(event) {
  event.preventDefault(); // 해당 사이트로 이동하는 기본 행동을 막고있음.
  console.dir(event);
}
*/

// link.addEventListener("click", handleLinkClick);
