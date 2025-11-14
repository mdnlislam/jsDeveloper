let items = [
  { id: 1, text: "A" },
  { id: 2, text: "B" },
  { id: 3, text: "C" },
];

items.push({ id: 4, text: "alhamdulillah" });
let deleteId = { id: 1, text: "updated B" };

let newList = items.map((i) => {
  if (i.id === deleteId.id) {
    return { ...i, text: deleteId.text };
  } else {
    return i;
  }
});

console.log(newList);
