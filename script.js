document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('#buttons-grid button');
    let inputString = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            switch (value) {
                case '=':
                    try {
                        inputString = inputString.replace('^', '**')
                                                 .replace('√', 'Math.sqrt')
                                                 .replace('ln', 'Math.log')
                                                 .replace('log', 'Math.log10');

                        inputString = inputString.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1})`);
                        inputString = inputString.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1})`);
                        inputString = inputString.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1})`);

                        inputString = inputString.replace(/(\d+(\.\d+)?)%/g, (match, p1) => `(${p1} / 100)`);

                        inputString = inputString.replace(/(\d+)!/g, (match, p1) => factorial(parseInt(p1)));

                        inputBox.value = eval(inputString);
                        inputString = inputBox.value;
                    } catch (e) {
                        inputBox.value = 'Error';
                        inputString = '';
                    }
                    break;

                case 'AC':
                    inputString = '';
                    inputBox.value = '0';
                    break;

                case 'DEL':
                    inputString = inputString.slice(0, -1);
                    inputBox.value = inputString || '0';
                    break;

                case 'sin':
                case 'cos':
                case 'tan':
                case 'log':
                case 'ln':
                case '√':
                    inputString += value + '(';
                    inputBox.value = inputString;
                    break;

                default:
                    inputString += value;
                    inputBox.value = inputString;
            }
        });
    });

    inputBox.addEventListener('input', () => {
        inputString = inputBox.value;
    });

    inputBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            try {
                inputString = inputString.replace('^', '**')
                                         .replace('√', 'Math.sqrt')
                                         .replace('ln', 'Math.log')
                                         .replace('log', 'Math.log10');

                inputString = inputString.replace(/sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${p1})`);
                inputString = inputString.replace(/cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${p1})`);
                inputString = inputString.replace(/tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1})`);

                inputString = inputString.replace(/(\d+(\.\d+)?)%/g, (match, p1) => `(${p1} / 100)`);

                inputString = inputString.replace(/(\d+)!/g, (match, p1) => factorial(parseInt(p1)));

                inputBox.value = eval(inputString);
                inputString = inputBox.value;
            } catch (e) {
                inputBox.value = 'Error';
                inputString = '';
            }
            e.preventDefault();
        }
    });

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
});
