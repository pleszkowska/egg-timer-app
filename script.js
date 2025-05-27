// Create basic HTML structure using JavaScript
document.body.style.cssText = `
  font-family: Arial, sans-serif;
  background-color: #fefbe9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const container = document.createElement('div');
container.style.cssText = `
  text-align: center;
  background: #fff5c0;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;
document.body.appendChild(container);

// Title
const title = document.createElement('h1');
title.textContent = 'Egg Timer';
container.appendChild(title);

// Egg type dropdown
const select = document.createElement('select');
select.innerHTML = `
  <option value="">-- Select Egg Type --</option>
  <option value="soft">Soft-Boiled (5 min)</option>
  <option value="medium">Medium-Boiled (7 min)</option>
  <option value="hard">Hard-Boiled (10 min)</option>
`;
select.style.fontSize = '16px';
select.style.padding = '8px';
container.appendChild(select);

// Start button
const button = document.createElement('button');
button.textContent = 'Start Timer';
button.style.cssText = `
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
button.onmouseover = () => button.style.backgroundColor = '#ff8c00';
button.onmouseout = () => button.style.backgroundColor = '#ffa500';
container.appendChild(button);

// Timer display
const timerDisplay = document.createElement('div');
timerDisplay.textContent = '00:00';
timerDisplay.style.cssText = `
  font-size: 48px;
  margin: 20px 0;
  color: #ff6347;
`;
container.appendChild(timerDisplay);

// Status message
const statusMessage = document.createElement('div');
statusMessage.style.fontSize = '18px';
statusMessage.style.marginTop = '10px';
container.appendChild(statusMessage);

// Timer logic
const eggTimes = {
  soft: 5 * 60,
  medium: 7 * 60,
  hard: 10 * 60
};

let timerInterval;

function startTimer(duration) {
  let timeLeft = duration;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      statusMessage.textContent = '🥚 Done! Your egg is ready!';
    }

    timeLeft--;
  }, 1000);
}

button.addEventListener('click', () => {
  const selectedType = select.value;
  if (!selectedType) {
    alert('Please select an egg type.');
    return;
  }

  statusMessage.textContent = '';
  startTimer(eggTimes[selectedType]);
});
