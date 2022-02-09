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
