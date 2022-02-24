//11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
function countSpace(name) {
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (name.charAt(i - 1) == " ") {
      count++;
    }
  }
  return count;
}
// console.log(countSpace("Hoang  Duong"));
//12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
function removeSpace(name) {
  name = name.replace(/\s+/g, "");
  return name;
}
// console.log(removeSpace("  hoang duong    "));
// 13. Hãy viết chương trình đảo ngược sau s

function codeString(name) {
  let result = "";
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  return result;
}
console.log(codeString("Duong"));
//14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.

function findString(s1, s2) {
  let result = s1.indexOf(s2);
  return result;
}
console.log(findString("Hoang Duong", "Duong"));

//15. Viết chương trình lấy  id name của fb.
function getIdOfFb(link) {
  link = link.replace("https://www.facebook.com/", "");
  link = link.replace(/\s|[0-9_]|\W|[#$%^&*().]/g, " ").trim();
  for (let i = 0; i < link.length; i++) {
    if (i == 0 || link.charAt(i - 1) == " ") {
      link =
        link.slice(0, i) + link.charAt(i).toUpperCase() + link.slice(i + 1);
    }
  }
  return link;
}
console.log(getIdOfFb("https://www.facebook.com/tung.nguyenthac.1"));

//17.  Viết hàm số tính min, max của 3 số?
function findMax(arr) {
  let max = 0;
  let a = arr.length;
  for (let i = 0; i < a; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let max = [5, 7, 9];
console.log(findMax(max));
function findMin(arr) {
  let min = 0;
  let a = arr.length;
  for (let i = 0; i < a; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let min = [5, 7, 9];
console.log(findMin(min));
