//Câu 0: Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
let n = 5;
if (n < 2) console.log(`${n} Không phải là số nguyên tố!`);

let count = 0;
for (let i = 2; i < Math.sqrt(n); i++) {
  if (n % i == 0) count++;
}
if (count == 0) {
  console.log(`${n} là số nguyên tố!`);
} else console.log(`${n} Không phải là số nguyên tố!`);

//Câu 1: Viết chương trình in ra các số từ 1 đến n

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Câu 2: Viết chương trình in ra số lẻ từ 1 đến n

for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) console.log(i);
}

//Câu 3: Viết chương trình in ra số chẵn từ 1 đến n

let n3 = 10;
for (let i = 1; i <= n3; i++) {
  if (i % 2 == 0) console.log(i);
}

//Câu 4: Viết chương trình in ra số nguyên tố từ 1-n?

let n4 = 100;
for (let i = 2; i < n4; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) break;
    else {
      if (i == j + 1) console.log(i);
    }
  }
}

//Câu 5:Viết chương trình tính tổng từ 1-n?
let n5 = 10;
console.log(`Tổng các cố tự nhiên từ 1 đến ${n5} là: ` + (n5 * (n5 - 1)) / 2);
