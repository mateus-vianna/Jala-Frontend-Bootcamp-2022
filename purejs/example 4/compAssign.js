let a = 5;
let b = '5';

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

//This is here because i want
if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
