import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const start = () => {
  rl.question("Convert Decimal: ", (userInput) => {
    if (isNaN(userInput)) {
      console.log("It must be a decimal!");
      rl.close();
      return;
    }
    
    let decimal = parseInt(userInput);
    if (decimal <= 0) {
      console.log("It must be greater than 0");
      rl.close();
      return;
    }
    
    console.log(`Binary: ${toBinary(decimal)}`);
    console.log(`Octal: ${toOctal(decimal)}`);
    console.log(`Hexadecimal: ${toHexadecimal(decimal)}`);
    rl.close();
  });
};

const toBinary = (decimal) => {
  let binaryRemainder = [];
  while (decimal !== 0) {
    let remainder = decimal % 2;
    binaryRemainder.push(remainder);
    decimal = Math.floor(decimal / 2);
  }
  return binaryRemainder.reverse().join('');
};

const toOctal = (decimal) => {
  let octal = [];
  let quotient = decimal;
  while (quotient !== 0) {
    let remainder = quotient % 8;
    octal.push(remainder);
    quotient = Math.floor(quotient / 8);
  }
  return octal.reverse().join('');
};

const toHexadecimal = (decimal) => {
  const hexDigits = '0123456789ABCDEF';
  let hex = [];
  while (decimal !== 0) {
    let remainder = decimal % 16;
    hex.push(hexDigits[remainder]);
    decimal = Math.floor(decimal / 16);
  }
  return hex.reverse().join('');
};

start();
