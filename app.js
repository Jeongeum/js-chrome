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
  /* js에 바로 style을 적는 건 별로임! style은 css 파일에...
    const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
  */

  /*
  const clickedClass = "clicked"; // string으로 된 이름을 하나하나 적다가 개발자의 실수로 오류가 날 수 있기 때문에 변수로 정해주는게 좋다.
  if (h1.classList.contains(clickedClass)) {
    // 클릭 시, h1의 클래스목록에 clickedClass라는 이름을 가진 클래스가 있다면
    h1.classList.remove(clickedClass); // clickedClass 클래스를 지운다
  } else {
    h1.classList.add(clickedClass); // 목록에 없다면 clickedClass 클래스를 추가한다.
  }
  */

  h1.classList.toggle("clicked"); //toggle은 h1의 classList에 clicked 라는 클래스가 있는지 확인해서 있다면 제거하고 없다면 추가해준다. 한줄로 끝나는 코드라서 아주 베리굿..
}
/* 기존의 클래스를 유지하면서 추가로 클래스를 넣고 싶다면 classList를 사용한다. className은 아예 바꿔버리는건데 List는 목록화를 해준다.*/
h1.addEventListener("click", handleTitleClick); //title에서 클릭이벤트 발생 시 handleTitleClick 함수 실행! 이때 함수에 () 넣으면 안되고 이름만 넣어서 js가 함수를 실행하게끔 해야 한다.
//h1.onclick = handleTitleClick; 이렇게도 할 수 있음!
