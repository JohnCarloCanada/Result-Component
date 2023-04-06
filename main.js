const resultsContainer = document.querySelector("#resultsContainer");
const data = [
  {
    category: "Reaction",
    score: 70,
    icon: "./assets/images/icon-reaction.svg",
    color: "hsl(0, 100%, 67%)",
  },
  {
    category: "Memory",
    score: 50,
    icon: "./assets/images/icon-memory.svg",
    color: "hsl(39, 100%, 56%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "hsl(166, 100%, 37%)",
  },
  {
    category: "Visual",
    score: 32,
    icon: "./assets/images/icon-visual.svg",
    color: "hsl(234, 85%, 45%)",
  },
];

data.forEach((data) => {
  const section = document.createElement("section");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  img.setAttribute("src", data.icon);
  img.setAttribute("alt", data.category);
  h3.innerText = data.category;
  h3.style.color = data.color;

  div.appendChild(img);
  div.appendChild(h3);
  section.appendChild(div);

  p.innerHTML = `<span>${data.score} </span> / 100`;
  section.appendChild(p);

  resultsContainer.appendChild(section);
});
