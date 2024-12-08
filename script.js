function clearDisplay() {
    document.getElementById('display').value = '';
}
function appendValue(value) {
    document.getElementById('display').value += value;
}
function appendSymbol(symbol) {
    if (symbol === '×') {
        document.getElementById('display').value += '*';
    } else if (symbol === '÷') {
        document.getElementById('display').value += '/';
    }
}
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}