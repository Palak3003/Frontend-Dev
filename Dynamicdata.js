const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

apiData.forEach((item) => {
  const asString = String(item);
  const asBoolean = Boolean(item);
  const asNumber = Number(item);

  if (!isNaN(asNumber) && asString.trim() !== "" && /^\s*-?\d+(\.\d+)?\s*$/.test(asString)) {
    validNumbers.push(asNumber);
    console.log(`Original: ${item} → String: "${asString}", Boolean: ${asBoolean}, Number: ${asNumber}`);
  } else {
    invalidNumbers.push(item);
    console.log(`Invalid number detected: ${item}`);
  }
});

console.log("Valid numeric data array:", validNumbers);
console.log("Invalid numeric data array:", invalidNumbers);
