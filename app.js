const h1 = document.querySelector(".hello h1"); // 같은 클래스에 같은 h1이 있다면 처음 것만 가져옴
// const title_1 = document.querySelector(".hello h1:first-child");

// const titleId = document.querySelector("#helloid");
// const titleId2 = document.getElementById("helloid");

const h12 = document.querySelectorAll(".hello h1"); // 같은 클래스에 같은 h1이 있다면 모두 다 가져옴

// console.log(title, title_1);

// console.log(titleId);
// console.log(titleId2);

// console.log(title2);

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD~!");
}
//title.addEventListener("click", handleTitleClick); title에서 클릭이벤트 발생 시 handleTitleClick 함수 실행! 이때 함수에 () 넣으면 안되고 이름만 넣어서 js가 함수를 실행하게끔 해야 한다.
h1.onclick = handleTitleClick; //이렇게도 할 수 있음!

h1.addEventListener("mouseenter", handleMouseEnter); // title에 마우스를 올리는 이벤트 발생
h1.addEventListener("mouseleave", handleMouseLeave); // title에서 마우스를 떼는 이벤트 발생

window.addEventListener("resize", handleWindowResize); // window의 크기가 변경되는 이벤트 발생
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline); // 와이파이 연결 끊기는 이벤트 발생
window.addEventListener("online", handleWindowOnline); // 와이파이 연결 되는 이벤트 발생
