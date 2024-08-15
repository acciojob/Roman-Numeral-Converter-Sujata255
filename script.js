function romanConverter(num) {
    const romanNumerals = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];
  
    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        const [symbol, value] = romanNumerals[i];

        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

document.getElementById('convertButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('numberInput').value);
    
    if (isNaN(num) || num < 0 || num > 100000) {
        document.getElementById('result').textContent = 'Please enter a number between 0 and 100000';
    } else {
        const romanNumeral = romanConverter(num);
        document.getElementById('result').textContent = `Roman Numeral: ${romanNumeral}`;
    }
});
