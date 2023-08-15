import { stack } from "./stack3.js";

// solving the brakcets question using the stack datastructure (which build on linked list)

function isBracketsBalanced(string) {
  // declaring opening and closing brackets separately with same order
  const opening = "({[";
  const closing = ")}]";
  // creating a brackets stack
  const bracketsStack = stack();
  for (let i of string) {
    // throwing all the open brackets in to the stack
    if (opening.includes(i)) {
      bracketsStack.push(i);
    }
    // if it is a closing bracket check the closing bracket matches with the opening bracket in the stack which is at top
    else if (closing.includes(i)) {
      const newBracket = bracketsStack.pop();
      if (!newBracket || opening.indexOf(newBracket) !== closing.indexOf(i)) {
        return false;
      }
    }
  }
  return bracketsStack.isEmpty();
}

console.log(isBracketsBalanced("[]()")); // true
console.log(isBracketsBalanced("{[()]}")); // true
console.log(isBracketsBalanced("{[sagf(sghdg)]srghrsd}")); // true
console.log(isBracketsBalanced("[{(}]")); // false
console.log(isBracketsBalanced("a[b{c}d]e(f)g")); // true
console.log(isBracketsBalanced(")(][}{")); // false
console.log(isBracketsBalanced("([)]")); // false
