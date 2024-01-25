document.getElementById('inputText').addEventListener('input', function() {
    let inputValue = this.value;
document.getElementById('output1').innerText = 'Sử dụng DOM: ' + inputValue;
});
document.getElementById('inputText').addEventListener('input', displayInput);
function displayInput() {
    let inputValue = this.value;
document.getElementById('output2').innerText = 'Sử dụng Event: ' + inputValue;
    }
