const seat = localStorage.getItem("seat");
const date = localStorage.getItem("date");
const time = localStorage.getItem("time");

document.getElementById("result").innerHTML = `
  <p>座席：${seat}</p>
  <p>日付：${date}</p>
  <p>時間：${time}</p>
`;

localStorage.removeItem("seat");
localStorage.removeItem("date");
localStorage.removeItem("time");
