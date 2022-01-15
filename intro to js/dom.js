function changeColor() {
  document.getElementById("title").style.color = "red";
}

function changeColorBack() {
  document.getElementById("title").style.color = "black";
}

function updateName() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("name").innerHTML = name;
}

let splitBillCalculated = 0;
let total = 0;
let person = 0;

function splitBill() {
  let bill = document.getElementById("bill");
  let persons = document.getElementById("people");
  let alert = document.getElementById("alert");
  total = bill.value;
  person = persons.value;
  splitBillCalculated = total / person;
  document.getElementById("splitBill").innerHTML = splitBillCalculated;
  bill.value = "";
  persons.value = "";
  alert.classList.remove("d-none");
  setTimeout(function () {
    alert.classList.add("d-none");
  } , 3000);
}
