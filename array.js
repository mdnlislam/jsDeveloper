const mens = [
  {
    id: 1,
    Name: "Rony",
    Bangla: 30,
    English: 10,
  },
  {
    id: 2,
    Name: "Raki",
    Bangla: 40,
    English: 90,
  },
  {
    id: 3,
    Name: "Baki",
    Bangla: 50,
    English: 11,
  },
];

const map = mens.map((item) => {
  if (item.id === 1) {
    item["Bangla"] = 90;
  }
  return item;
});

console.log(map);
