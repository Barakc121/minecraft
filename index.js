const tails = document.getElementsByClassName("tails")[0];

const container = document.querySelector('#container')

// יוצר את כל העמוד עצמו

for (let i = 0; i < 3000; i++) {
  const div = document.createElement("div");
  if (i < 1200) {
    div.className = "AllElemnts sky";
    div.id = i;
  } else if (1199 < i && i < 1300) {
    div.className = "AllElemnts soil";
  } else if (1299 < i && i < 1700) {
    div.className = "AllElemnts sand";
  } else if (1699 < i && i < 2700) {
    div.className = "AllElemnts stone";
  } else if (2699 < i && i < 3000) {
    div.className = "AllElemnts iron";
  }
  container.appendChild(div);
}

container.addEventListener("click", (e) => {
  if (e.target !== container) e.target.classList.toggle("transparent");
});

// יכול לבחור עם מה לבנות
const tailsList = ["soil", "sand", "stone", "iron"];
for (let i = 0; i < tailsList.length; i++) {
  console.log(tailsList[i]);
  const div = document.createElement("div");
  div.className = tailsList[i];
  tails.append(div);
}

let choice = "sky";
container.addEventListener("click", (e) => {
  if (e.target !== container) e.target.className = choice;
});

tails.addEventListener("click", (e) => {
  choice = e.target.className;
});



// בניית עץ
function tree() {
  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j += 500) {
      const div = document.getElementById(`${j + 1132}`);
      div.className = "tree";
    }
  }
}
// tree();
