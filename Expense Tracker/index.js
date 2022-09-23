const incomeBox = document.getElementById("income-box");
const expenseBox = document.getElementById("expense-box");
const expenseName = document.getElementsByClassName("expense-name");
const expenseAmount = document.getElementsByClassName("expense-amount");
const lists = document.getElementById("expense-lists");

//* input box

const typeIncome = document.getElementById("income");
const typeTitle = document.getElementById("title");
const typeExpense = document.getElementById("expense");



function add() {

  const income = typeIncome.value;
  const title = typeTitle.value;
  const expense = typeExpense.value;

  incomeBox.innerText = "$" + income;
  expenseBox.innerText = "$" + expense;

  const list = document.createElement("div");
  list.classList.add("list");

  const h3 = document.createElement("h3");
  h3.classList.add("expense-name");
  h3.innerText = title;
  list.appendChild(h3);

  const span = document.createElement("span");
  span.classList.add("expense-amount");
  span.innerText = "$" + expense;
  list.appendChild(span);

  lists.appendChild(list);

  // disabled income input
  typeIncome.setAttribute("disabled", "true");
  typeIncome.classList.add("disabled");

  // clear all  inputs
  typeTitle.value = "";
  typeExpense.value = "";
  typeIncome.value = "";
}
