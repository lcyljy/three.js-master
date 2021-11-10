const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector("#container");

open.addEventListener("click", () => {
  container.classList.add("active");
});

close.addEventListener("click", () => {
  container.classList.remove("active");
});

const submitBtn = document.querySelector(".submitBtn");

let subName = document.querySelector("#name");
let subDesc = document.querySelector("#description");
let list = document.querySelector(".sideNav ul");
console.log(list);

submitBtn.addEventListener("click", () => {
  let addList = document.createElement("li");
  let addDesc = document.createElement("span");
  addList.innerText = subName.value;
  addDesc.innerText = subDesc.value;
  // addList.innerText = addDesc;
  // list.appendChild(addList).appendChild(addDesc);
  // list.appendChild(addList).appendChild(addDesc);
  let addResive = document.createElement("button")
  addResive.className = "resiveBtn"
  addResive.innerText = "수정"
  list.appendChild(addList).appendChild(addDesc).after(addResive);
  container.classList.remove("active");
  subName.value = "";
  subDesc.value = "";
});

// 수정버튼 만들기
const resiveBtn = document.querySelector(".resiveBtn");

resiveBtn.addEventListener("click", () => {
  container.classList.add("active");
})

// const deleteBtn = document.querySelector(".deleteBtn");

// deleteBtn.addEventListener("click", () => {

// })