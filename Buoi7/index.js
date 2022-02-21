//Cau 8:  Kiểm tra số n có toàn số lẻ tạo thành hay không?
function checkNumberOdd(n) {
  let check = 0;
  while (n > 0) {
    let temp = n % 10;
    if (temp % 2 == 0) {
      check++;
    }
    n = n / 10;
  }
  if (check == 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
// checkNumberOdd(333336);

function reverse_num(n) {
  let rem,
    sum = 0,
    temp;
  temp = n;
  while (n >= 1) {
    rem = n % 10;
    sum = sum * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (temp == sum) {
    console.log("Yes!");
  } else {
    console.log("No!");
  }
}
reverse_num(12321);
//bang cuu chuonh
function bangcuuchuong() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} =`, i * j);
    }
  }
}
bangcuuchuong();
