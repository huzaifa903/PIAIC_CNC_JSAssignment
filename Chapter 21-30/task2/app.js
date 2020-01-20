var inputValue = prompt('Enter a string');
inputValue = inputValue.toLowerCase();
inputValue = inputValue.split(' ');

for (var i = 0; i < inputValue.length; i++) {
    inputValue[i] =
        inputValue[i].charAt(0).toUpperCase() + inputValue[i].substring(1);
    inputValue.join(' ');
}
console.log(inputValue);