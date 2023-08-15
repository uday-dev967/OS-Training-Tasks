const brackets = "{[({((})]}";

function check(brackets) {
  const bracketsArray = brackets.split("");
  if (bracketsArray.length % 2 !== 0) return false;

  while (bracketsArray.length > 0) {
    // faced problem when i used the below method
    /* if (bracketsArray.shift() === "(") {
         if(bracketsArray.pop() !== ")") retrun false
    }
    */
    const openBracket = bracketsArray.shift();
    const closingBracket = bracketsArray.pop();
    if (openBracket === "(") {
      if (closingBracket !== ")") return false;
    } else if (openBracket === "{") {
      if (closingBracket !== "}") return false;
    } else if (openBracket === "[") {
      if (closingBracket !== "]") return false;
    } else return false;
  }
  return true;
}

isBracketsBalanced = check(brackets);
console.log(isBracketsBalanced);
