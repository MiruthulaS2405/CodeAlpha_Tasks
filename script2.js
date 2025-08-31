const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let expression = '';
function updateDisplay() {
  display.value = expression;
}
function evaluateExpression() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch {
    display.value = 'Error';
    expression = '';
  }
}
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');

    if (key === 'C') {
      expression = '';
    } else if (key === 'Backspace') {
      expression = expression.slice(0, -1);
    } else if (key === 'Enter') {
      evaluateExpression();
      return;
    } else {
      expression += key;
    }
    updateDisplay();
  });
});
document.addEventListener('keydown', e => {
  const allowedKeys = '0123456789/*-+.';

  if (allowedKeys.includes(e.key)) {
    expression += e.key;
    updateDisplay();
  } else if (e.key === 'Enter') {
    evaluateExpression();
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (e.key.toLowerCase() === 'c') {
    expression = '';
    updateDisplay();
  }
});
