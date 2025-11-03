const user = {
  name: "talim",
  id: 21,
  permissions: ["project:creation"],
};

// console.log(user);

const Team = [
  {
    name: "Rakib",
    id: 24,
    permissions: ["project:creation"],
  },
  {
    name: "Abdulillah",
    id: 27,
    permissions: ["project:vew"],
  },
  {
    name: "Rony",
    id: 30,
    permissions: ["project:check"],
  },
];

// console.log(Team[0]);

// function checkUser(users) {
//   return users === user;
// }

// const findUser = Team.find(checkUser);
// console.log(findUser);

const num = { name: "alamin", id: 34, roll: "yrry" };

const number = [
  { name: "rakib", id: 11 },
  { name: "alamin", id: 34 },
];
const number2 = [
  { name: "rakib", id: 11 },
  { name: "alamin", id: 34 },
];

function check(age) {
  console.log(age.name && age.id, "ee");
  if (!num.roll) {
    return false;
  }
  return age.name === num.name && age.id === num.id;
}

const find = number.find(check);

console.log(find);

const v1 = undefined;
const v2 = undefined;
console.log(typeof NaN, parseInt("rakib"));
