function romanConverter(num) {
  // Define the Roman numeral symbols and their corresponding values
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

  // Loop through each Roman numeral, subtracting from the number and adding to the result
  for (let i = 0; i < romanNumerals.length; i++) {
    const [symbol, value] = romanNumerals[i];

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example usage:
console.log(romanConverter(14)); // Output: XIV
console.log(romanConverter(798));