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
