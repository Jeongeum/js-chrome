console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

console.log("---변수를 사용하면---");

const a = 5;
const b = 2; // const 사용 시, 값을 새로 업데이트 할 수 없음. 기본적으로 사용함
let myName = "nico"; // 값을 바꿀 수 있음. 필요할때에만 사용

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);

const amIFat = false; //boolean : true / false
console.log(amIFat);

const test1 = null;
console.log(test1);
// null : 정의 되어 있지만 값이 비어있음. 자연적으로 일어나는게 아니라 일부러 비어있다는 것을 표현하기 위해 사용

let something;
console.log(something);
// undefined : 정의되어 있지 않음. 메모리에는 들어가 있지만 값이 없음.

/* ------------- */

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
const daysOfWeek1 = [mon, tue, wed, thu, fri, sat, sun];

console.log(daysOfWeek); // 얘넨 그저 string을 모아놓은 것일 뿐. 여기서 월요일만 빼서 출력할 수도 없음
console.log(daysOfWeek1); // []을 쓰면 배열이 된다.

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"]; // 각 항목은 , 로 구분하고 어떤 값이든 넣을 수 있다.
console.log(nonsense);

const daysOfWeek2 = ["mon", "tue", "wed", "thu", "fri", "sat"]; // 바로 text로 적어서 넣을 수 있음.
console.log(daysOfWeek2);
console.log(daysOfWeek2[5]); // 배열에서 6번째의 데이터를 출력. 주의) 컴퓨터는 0부터 시작!

daysOfWeek2.push("sun");
console.log(daysOfWeek2);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("Kimbab");
console.log(toBuy[2]);

/* ---------- */
const playerName = "mico";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// Name, Points, Handsome, Fat 은 player에 대해 설명하고 있음. 그렇기 때문에 다음과 같이 데이터를 최선으로 정리하는 게 좋음.
/*
player.name
player.points
player.handsome
palyer.fat
*/
//const player = ["nico", 1212, true, "little bit"];  이건 각각의 데이터가 어떤 의미인지를 알 수 없음.

const player = {
  name: "nico",
  points: 10,
  handsome: true,
  fat: "little bit",
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = false; // player라는 const를 변경하는게 아니라 오브젝트를 변경하는거라서 에러 x
console.log(player);

player.points += 15;
console.log(player.points);
player.lastName = "potato"; // property 추가도 가능
console.log(player);

/* --------------- */

console.log("hello my name is Nico");
console.log("hello my name is Dal");
console.log("hello my name is Shigatsu");
console.log("hello my name is Flynn..");

function sayHello(name, age) {
  console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello("Nico", 10);
sayHello("Dal", 23);
sayHello("Shigatsu", 21);
sayHello("Flynn", 30);

function add(a, b) {
  // 데이터를 function 으로 받아옴
  console.log(a + b);
}

add(2, 3); //데이터를 function 에 넣어줌

function div(a, b) {
  console.log(a / b);
}

div(10, 5);

const player2 = {
  name: "nico",
  sayHello2: function (name) {
    console.log("Hello " + name + "! nice to meet you!");
  },
};

player2.sayHello2("lynn"); //object안에 function 을 넣어서 conosle.log() 처럼 만들 수 있다.

/* --------------- */

const first = 5;
let isNicoFat = true;

isNicoFat = false;

/*const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  sub: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    alert(a ** b);
  },
};

calculator.add(5, 2);
calculator.sub(5, 2);
calculator.div(5, 2);
calculator.power(5, 2);
*/

/* 
function에서의 console.log 사용이 안좋은 이유


console.log(calculator.power(5, 2)); //undefined
*/
// console.log , alert에서의 결과를 얻는 것이 아니라 함수에서 결과를 값으로 받고 싶음.
const age = 96;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(5, 2);
console.log(addResult);

const subResult = calculator.sub(addResult, 2);
console.log(subResult);

const divResult = calculator.div(subResult, 2);
console.log(divResult);

const powerResult = calculator.power(divResult, subResult);
console.log(powerResult);
// 이렇게 하면 코드들이 서로 다 연결되게 된다.
// return 을 사용하면 거기서 바로 함수가 끝나버리기 때문에 return 뒤에는 다른 작업을 추가 수행할 수 없다.

/* 조건문 */

//const Age = prompt("How old are you?");  prompt 사용하면 css 입힐 수도 없고 아주 오래된 방법.

//console.log(typeof Age);  기본 값은 string이기 때문에 number로 바꿔야 함.

//console.log(typeof parseInt(Age)); parseInt를 이용해 type을 변경시켜준다.

const Age = parseInt(prompt("How old are you?"));

console.log(Age);

// 나이 계산기 만들기

console.log(isNaN(Age)); // Age가 NaN이면 true, 아니면 false

/*
if(condition) {
    /// condition === true
} else {
    /// condition === false
}
*/

if (isNaN(Age) || Age < 0) {
  console.log("Please write a real positive number");
} else if (Age < 18) {
  console.log("You are too young.");
} else if (Age >= 18 && Age <= 50) {
  console.log("You can drink!");
} else if (Age > 50 && Age <= 80) {
  console.log("You should exercise");
} else if (Age === 100) {
  console.log("wow you are wise"); //순서를 잘 정해줘야 한다.
} else if (Age > 80) {
  console.log("You can do whatever you want.");
}

/* 복습 */

// || OR
true || true === true;
false || true === true;
true || false === true;
false || false === false;

// && AND
true && true === true;
true && false === false;
false && true === false;
false && false === false;
