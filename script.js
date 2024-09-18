// Function to convert a given number into a Roman numeral
function convertToRoman(num) {
  // Array of Roman numerals and their corresponding values
  const romanSymbols = [
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

  // Initialize an empty string for the result
  let romanNumeral = '';

  // Loop through the Roman symbols array
  for (let [symbol, value] of romanSymbols) {
    // While the number is greater than or equal to the current value
    while (num >= value) {
      // Subtract the value from the number
      num -= value;
      // Append the corresponding Roman symbol to the result
      romanNumeral += symbol;
    }
  }

  // Return the resulting Roman numeral
  return romanNumeral;
}

// Example usage:
console.log(convertToRoman(14));   // Output: "XIV"
console.log(convertToRoman(798));  // Output: "DCCXCVIII"
console.log(convertToRoman(100));  // Output: "C"
console.log(convertToRoman(3999)); // Output: "MMMCMXCIX"
