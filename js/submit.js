document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const seat = document.querySelector('input[name="seat"]:checked')?.value || "未指定";
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  localStorage.setItem("seat", seat);
  localStorage.setItem("date", date);
  localStorage.setItem("time", time);

  window.location.href = "thank.html";
})