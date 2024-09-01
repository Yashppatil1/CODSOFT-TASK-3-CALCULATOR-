document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let expression = '';

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                expression = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (expression && currentInput) {
                    expression += currentInput;
                    display.textContent = eval(expression);
                    expression = '';
                    currentInput = '';
                }
            } else if (['+', '-'].includes(value)) {
                if (currentInput) {
                    expression += currentInput + value;
                    currentInput = '';
                    display.textContent = expression;
                } else if (expression && /[+\-]$/.test(expression)) {
                    // Replace the last operator if user tries to input multiple operators consecutively
                    expression = expression.slice(0, -1) + value;
                    display.textContent = expression;
                }
            } else {
                currentInput += value;
                display.textContent = expression + currentInput;
            }
        });
    });
});
