
let startBtn = document.getElementById('startBtn');
let message = document.getElementById('message');

let countdownInterval;

startBtn.addEventListener('click', () => {
  let timeEnd = 5;

  clearInterval(countdownInterval); 

  message.textContent = `Уақыт аяқталуына: ${timeEnd}`;

  countdownInterval = setInterval(() => {
    timeEnd--;
    if (timeEnd > 0) {
      message.textContent = `Уақыт аяқталуына: ${timeEnd}`;
    } else {
      clearInterval(countdownInterval);
      message.textContent = 'Уақытыңыз аяқталды! 😊';
    }
  }, 1000);
});