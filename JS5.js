for(let i = 1; i<=10; i++){
  console.log(i);
};



for(let i = 10; i>=0; i--){
  console.log(`あと${i}日`);
};



const number = 20;
let result = 0;
for(let i = 1; i<=number; i++){
  result+=i;
};
console.log(result);



const number2 = 7;
let result2 = 1;
for(let i = 1; i <= number2; i++){
  result2*=i
};
console.log(result2);



for(let i = 1; i<=10; i++){
  if(i%3===0){
    console.log('サァン！');
  } else {
    console.log(i);
  };
};



for(let i =1; i<=30; i++){
  if(i%3===0 && i%5===0) {
    console.log('FizzBuzz');
  } else if (i%3===0){
    console.log('Fizz');
  } else if (i%5===0){
    console.log('Buzz');
  } else {
    console.log(i);
  };
};



const number3 = 24;
let isPrimeNumber = true;
for (let i = 2; i<number3; i++){
  if(number3%i===0){
    isPrimeNumber = false;
  }
};
if(isPrimeNumber){
  console.log(`${number3}は素数です`);
} else {
  console.log(`${number3}は素数ではありません`);
};



let prev2 = 0;
let prev1 = 1;
let result3 =0;
for (let i = 0; i<=20; i++){
  if(i===0){
    console.log(`${i}番目は${prev2}です`);
  } else if (i===1){
    console.log(`${i}番目は${prev1}です`);
  } else {
    result3 = prev2 + prev1;
    console.log(`${i}番目は${result3}です`);
    prev2 = prev1;
    prev1 = result3;
  }
};



for(let i = 1; i<=9; i++){
  console.log(`${i} の位の掛け算`);
  for(let j = 1; j<=9; j++){
    console.log(`${i} * ${j} は ${i*j}`);
  };
};
