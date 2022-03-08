var readlineSync = require("readline-sync");
const shortid = require("shortid");
var fs = require("fs");

var showMenu = function () {
  console.log("               Student Managerment                  ");
  console.log("====================================================");
  console.log(" 1. Show all student ");
  console.log(" 2.Create student and return Menu");
  console.log(" 3.Delete student");
  console.log(" 4.Edit student");
  console.log(" 5.Find student by name");
  console.log(" 6.Sort student by name ascending");
  console.log(" 7.Sort student by age ascending");
  console.log(" 8.Delete all student");
  console.log(" 9. Sum student age");
  console.log(" 10.Exit");
};

showMenu();
var studentStr = "";
var choise = readlineSync.question("Your choice");
let studentFile = fs.readFileSync("./dataJSON.txt", "utf8", (err, data) => {
  if (err) {
    console.log("err", err);
    return;
  }
});
let student = JSON.parse(studentFile);

let listStudent = [
  { id: 1, name: "Duong", age: 27 },
  { id: 2, name: "Uyen", age: 21 },
  { id: 3, name: "Thanh", age: 24 },
];

function showAllStudent() {
  return listStudent;
}

function createStudent() {
  let id = parseInt(readlineSync.question("id?"));
  let name = readlineSync.question("name?");
  let age = parseInt(readlineSync.question("age?"));
  return listStudent.push({
    id: id,
    name: name,
    age: age,
  });
}

function deleteStudent() {
  let id = parseInt(readlineSync.question("id?"));
  let remove = listStudent.findIndex((item) => item.id === id);
  listStudent.spice(remove, 1);
}

function updateStudent() {
  let id = parseInt(readlineSync.question("id?"));
  let name = readlineSync.question("name?");
  let age = parseInt(readlineSync.question("age?"));
  const editStudent = listStudent.map((item) => {
    if (item.id == id) {
      return { ...item, name: name, age: age };
    }
    return item;
  });
}

function findStudentByName() {
  let name = readlineSync.question("name?");
  return listStudent.findIndex((item) => item.name === name);
}

function sortStudentByName() {
  listStudent.sort((sv1, sv2) => {
    let a = sv1.name.localeCompare();
    let b = sv2.name.localeCompare();
    return a === b ? 0 : a > b ? 1 : -1;
  });
}
function sortStudentByAge() {
  listStudent.sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
  });
}

function deleteAllStudent() {}
function sumAge() {
  let sumAge = listStudent.reduce((ac, el) => {
    return (ac += el.age);
  }, 0);
}

while (true) {
  switch (parseInt(choise)) {
    case 0:
      showMenu();
      choise = readlineSync.question("Your choise?");
      break;
    case 1:
      showAllStudent();
      break;
    case 2:
      createStudent();
      break;
    case 3:
      deleteStudent();
      break;
    case 4:
      updateStudent();
      break;
    case 5:
      findStudentByName();
      break;
    case 6:
      sortStudentByName();
      break;
    case 7:
      sortStudentByAge();
      break;
    case 8:
      deleteAllStudent();
      break;
    case 9:
      sumAge();
      break;
  }
}
