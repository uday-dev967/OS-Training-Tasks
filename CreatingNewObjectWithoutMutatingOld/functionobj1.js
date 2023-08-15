let person = {
  name: "UDAY KANDA",
  role: "Jr FULLSTACK DEV",
  location: "KAKINADA",
  company: "ORDER STACK",
  contact: { phone: [], email: [] },
};

function newObject(obj) {
  const newPerson = { ...obj };
  newPerson.id = "OS00000015";
  newPerson.contact.phone = "+91 8074316698";
  return newPerson;
}

function newObject2(obj) {
  const newPerson = JSON.parse(JSON.stringify(obj));
  newPerson.id = "OS00000015";
  newPerson.contact.phone = "+91 8074316698";
  newPerson.contact.email = "udaychakravarthi22@gmail.com";
  return newPerson;
}
// console.log(newObject(person));
// console.log(newObject2(person));
console.log(person);
