const myObj = {
  name: { first: "Robert", middle: "", last: "Smith" },
  age: 25,
  DOB: "-",
  hobbies: ["running", "coding", "-", { a: "", b: "b" }],
  education: { highschool: "N/A", college: "Yale" },
};

function cleanArray(arr, arr2 = []) {
  arr.forEach((el) => {
    if (typeof el != "object") {
      if (el !== "N/A" && el !== "" && el !== "-") {
        arr2.push(el);
      }
    } else if (Array.isArray(el)) {
      arr2.push(cleanArray(el));
    } else {
      arr2.push(cleanObject(el));
    }
  });
  return arr2;
}

function cleanObject(obj, obj2 = {}) {
  let keys = Object.keys(obj);
  for (const key of keys) {
    const val = obj[key];
    if (typeof val != "object") {
      if (val !== "N/A" && val !== "" && val !== "-") {
        obj2[key] = val;
      }
    } else if (Array.isArray(val)) {
      obj2[key] = cleanArray(val);
    } else if (typeof val === "object") {
      obj2[key] = cleanObject(val);
    }
  }
  return obj2;
}

// const newMyObj = cleanObject(myObj);
// console.log(newMyObj);
// let out = {
//   name: { first: "Robert", last: "Smith" },
//   age: 25,
//   hobbies: ["running", "coding"],
//   education: { college: "Yale" },
// };

const myObj2 = {
  name: { first: "Robert", middle: "", last: "Smith" },
  age: 25,
  DOB: "-",
  hobbies: [
    "running",
    "coding",
    "-",
    { highschool: "N/A", college: "Yale", ellect: "-" },
  ],
  education: {
    highschool: "N/A",
    college: "Yale",
    kl: "",
    t: ["", "-", "N/A", "", "-", "N/A"],
  },
};

const new2 = cleanObject(myObj2);
console.log(new2);
