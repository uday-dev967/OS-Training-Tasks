const n = 8;

// method using only for loops

for (let i = 1; i <= n * 2 - 1; i++) {
  let stars = "";
  let spaces = "";

  for (let j = 1; i < n ? j <= n - i : j <= i - n; j++) {
    spaces += " ";
  }
  for (let j = 1; i < n ? j <= i : j <= n - (i - n); j++) {
    stars += "* ";
  }
  console.log(spaces + stars);
}

//method1
// for (let i = 1; i <= n * 2 - 1; i++) {
//   let out = "";
//   if (i <= n) (out = " ".repeat(n - i) + "* ".repeat(i)), console.log(out);
//   else (out = " ".repeat(i - n) + "* ".repeat(n + (n - i))), console.log(out);
// }
// method 2
// const out = [];
// for (let i = 1; i <= n; i++) {
//   const leftSpace = " ".repeat(n - i);
//   const stars = "* ".repeat(i);
//   const string = leftSpace + stars;
//   out.push(string);
// }

// for (let i = 0; i <= 2 * n - 2; i++) {
//   i <= n - 1 ? console.log(out[i]) : console.log(out[n + (n - 2 - i)]);
// }

// method 3
// const out = [];
// const out1 = [];
// for (let i = 1; i <= n; i++) {
//   const leftSpace = " ".repeat(n - i);
//   const stars = "* ".repeat(i);
//   const string = leftSpace + stars;
//   i < n
//     ? { opt1: out.push(string), opt2: out1.unshift(string) }
//     : out.push(string);
// }
// for (let i of out) {
//   console.log(i);
// }

// for (let i of out1) {
//   console.log(i);
// }
