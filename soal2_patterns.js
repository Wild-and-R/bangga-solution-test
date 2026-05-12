// =============================================================
//  SOAL 2 - LOGICAL PATTERNS (For / While / Do-While)
// =============================================================

function separator(label) {
  console.log("\n" + "=".repeat(40));
  console.log(label);
  console.log("=".repeat(40));
}

// A) Segitiga bintang 
/*
  *
  **
  ***
  ****
  *****
*/
separator("A) Segitiga Bintang");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// B) Segitiga angka descending 
/*
  5 4 3 2 1
  5 4 3 2
  5 4 3
  5 4
  5
*/
separator("B) Segitiga Angka Descending");
for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 5; j >= 5 - i + 1; j--) {
    row += j + (j > 5 - i + 1 ? " " : "");
  }
  console.log(row);
}

// C) Angka ganjil ascending 
/*
  1
  1 3
  1 3 5
  1 3 5 7
  1 3 5 7 9
*/
separator("C) Angka Ganjil Ascending");
let rowC = 1;
while (rowC <= 5) {
  let row = "";
  let num = 1;
  let col = 1;
  while (col <= rowC) {
    row += num + (col < rowC ? " " : "");
    num += 2;
    col++;
  }
  console.log(row);
  rowC++;
}

// D) Pola diamond 
/*
  3 2 1
  3 2
  3
  3 2
  3 2 1
*/
separator("D) Pola Diamond");
// Top half (descending columns): 3 cols → 1 col
let d = 3;
do {
  let row = "";
  for (let j = 3; j >= 3 - d + 1; j--) {
    row += j + (j > 3 - d + 1 ? " " : "");
  }
  console.log(row);
  d--;
} while (d >= 1);

// Bottom half (ascending columns): 2 cols → 3 cols
for (let i = 2; i <= 3; i++) {
  let row = "";
  for (let j = 3; j >= 3 - i + 1; j--) {
    row += j + (j > 3 - i + 1 ? " " : "");
  }
  console.log(row);
}

// E) Bilangan prima 
/*
  2 3 5 7 11
*/
separator("E) Bilangan Prima (5 pertama)");

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let primes = [];
let num = 2;
while (primes.length < 5) {
  if (isPrime(num)) primes.push(num);
  num++;
}
console.log(primes.join(" "));
