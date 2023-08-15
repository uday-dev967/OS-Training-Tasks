const company = {
  id: 1,
  name: "John Doe",
  role: "CEO",
  subordinates: [
    {
      id: 2,
      name: "Alice Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 3,
          name: "Bob Smith",
          role: "Team Lead",
          subordinates: [
            {
              id: 4,
              name: "Charlie Brown",
              role: "Developer",
              subordinates: [],
            },
            {
              id: 5,
              name: "David Lee",
              role: "Developer",
              subordinates: [],
            },
          ],
        },
        {
          id: 6,
          name: "Eve Taylor",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
  ],
};

function countEmployeesByRole(company, obj = {}) {
  let out = obj;
  //   console.log(company);
  const { role } = company;
  if (out[role]) {
    out[role] = out[role] + 1;
  } else {
    out[role] = 1;
  }
  if (company.subordinates.length > 0) {
    for (let each of company.subordinates) {
      out = countEmployeesByRole(each, out);
    }
  }
  return out;
}

const roleCounts = countEmployeesByRole(company);
console.log(roleCounts);
