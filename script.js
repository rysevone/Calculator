const display = document.getElementById('display');
const historyDiv = document.getElementById('history');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  const expression = display.value.trim(); // Убираем лишние пробелы и переносы строк

  if (expression === '') {
    alert('Поле ввода пустое');
    return;
  }

  try {
    const result = eval(expression);
    display.value = result;
    addToHistory(`${expression} = ${result}`);
  } catch (e) {
    alert('Ошибка в выражении');
    console.error('Ошибка вычисления:', e); // Для отладки в консоли браузера
    addToHistory(`${expression} = Ошибка`);
  }
}

function addToHistory(entry) {
  const p = document.createElement('p');
  p.textContent = entry;
  historyDiv.appendChild(p);
  historyDiv.scrollTop = historyDiv.scrollHeight;
}

// Обработчики событий для кнопок
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('btn_clear')) {
      clearDisplay();
    } else if (button.classList.contains('btn_equals')) {
      calculate();
    } else if (button.classList.contains('btn_remainder')) {
      addToDisplay('%');
    } else if (button.classList.contains('btn_power')) {
      addToDisplay('**');
    } else {
      addToDisplay(value);
    }
  });
});