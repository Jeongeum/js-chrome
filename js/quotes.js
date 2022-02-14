const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/* 정리
 * Math.random() : 0~1 사이의 숫자를 랜덤으로 출력
 * Math.random() * 10 하면 0~9 사이 숫자 랜덤 출력 가능하지만 소수점이 붙음.
 * Math.round(숫자) : 실수를 정수로 반올림해줌.
 * Math.ceil(숫자) : 실수를 가장 위의 숫자로 올려줌. (ex. 1.1을 2로 반올림한다. 1.0만 1이 될 수 있음)
 * Math.floor(숫자) : 실수를 가장 바닥의 숫자로 내려줌. (ex. 1.999를 1로 내려줌.)
 */

// console.log(quotes[Math.floor(Math.random() * 10)]);  quotes 배열의 0~9 사이의 값을 랜덤으로 출력. 근데 이건 딱 10개를 가지고 있을 때에만 가능. 배열의 길이만큼 랜덤되게 할 필요가 있음.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `<${todaysQuote.author}>`;
