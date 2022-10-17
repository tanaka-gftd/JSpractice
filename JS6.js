console.log(Math.floor(Math.random() * 2));



const randomNum = Math.floor(Math.random() * 2);
//console.log(randomNum);
if(randomNum){
  console.log('表');
} else {
  console.log('裏');
};



const randomFlower = Math.floor(Math.random() * 2 + 9);
//console.log(randomFlower);
if(randomFlower % 2 === 1){
  console.log('スキ');
} else {
  console.log('キライ');
};



const omikuji = Math.floor(Math.random() * 4);
console.log(omikuji);
switch (omikuji){
  case 0:
    console.log('凶');
    break;
  case 1:
    console.log('小吉');
    break;
  case 2:
    console.log('中吉');
    break;
  case 3:
    console.log('大吉');
    break;
  default:
    break;
};



for(let i = 1; i <= 5; i++){
  if(Math.floor(Math.random() * 10)  === 0){
    console.log('あたり');
  } else {
    console.log('はずれ');
  };
};



for(let i = 1; i >= 1; i++){  //思いつかなかったのでこの方法（意図的に無限ループを作り、breakでループを抜ける）
  if(Math.floor(Math.random() * 10)  === 0){
    console.log(`あたり！ ${i}回目であたりが出ました。`);
    break;  //ループを抜ける
  } else {
    console.log('はずれ');
  };
};
/* 
  //模範解答
  let counter = 1;
  while(Math.floor(Math.random() * 10)  === 0){
    console.log('はずれ');
    counter+=1;
  };
  console.log(`あたり！ ${counter}回目であたりが出ました。`);
*/



const dice1 =  Math.floor(Math.random() * 6 + 1);
const dice2 =  Math.floor(Math.random() * 6 + 1);
console.log(`一つ目のサイコロの目は${dice1}`, `二つ目のサイコロの目は${dice2}`, `二つのサイコロの合計は${dice1+dice2}です。`);



let sum = 0;
for(let i = 1; i <= 10; i++){
  let dice =  Math.floor(Math.random() * 6 + 1);
  console.log(`${i}回目の目は${dice}`);
  sum+=dice;
};
console.log(`出目の合計は${sum}です。`);



const lots = ['大吉', '吉', '中吉', '小吉', '凶'];
let daikitiCount = 0;
for(let i = 1; i <= 10000; i++){  
  let unsei = lots[Math.floor(Math.random() * 5)];
  if(unsei === '大吉'){
    daikitiCount+=1;
  }
};
console.log(`大吉のでた回数は${daikitiCount}回、大吉の出現率は${daikitiCount/10000*100}%です`);
/* 
  //模範解答
  //ループ回数の変更に柔軟に対応できるよう、ループ回数は変数に格納しておくといい
  const lots = [`大吉`, `吉`, `中吉`, `小吉`, `凶`];
  const loopTimes = 10000;
  let counter = 0;
  for (let i = 1; i <= loopTimes; i++) {
    const unsei = lots[Math.floor(Math.random() * lots.length)];
    if (unsei === `大吉`) counter += 1;
  }
  console.log(`大吉を引く確率は約 ${counter / loopTimes} です。`);
*/



const dice =  () => Math.floor(Math.random() * 6 + 1);
const loopTimes = 100000;
let evenCount = 0;
let oddCount = 0;
for(let i = 1; i <= 100000; i++){
  if ((dice() + dice()) % 2 === 0){
    evenCount+=1;
  } else {
    oddCount+=1;
  };
};
console.log(`２つのサイコロの目の合計が偶数になった割合は${evenCount/loopTimes*100}%、奇数になった割合は${oddCount/loopTimes*100}%`);



const zahyou = () => Math.random() * 2 - 1;
const squareHen = 2;
const loopTimes2 = 10000000;
let point = 0;
for(let i = 1; i <= loopTimes2; i++){
  let dis = Math.sqrt(zahyou() ** 2 + zahyou() ** 2);  //１個目のlength()はX座標、２個目はY座標
  if(dis <= 1){
    point+=1;
  };
};
const pi = (squareHen**2)*(point/loopTimes2)/((squareHen/2)**2);  //（四角形の面積）÷（座標が円内の割合）✖️（半径の2乗）...おおよその円周率
console.log(`円周率はおおよそ${pi}です。`);



let winCount = 0;
let loseCount = 0;
const TRIALS = 100000;
for(let i = 1; i <= TRIALS; i++){
  while(true){
    if(Math.floor(Math.random() * 2) === 1) {
      winCount+=1;
      break;
    } else if (Math.floor(Math.random() * 2) === 1) {
      loseCount+=1;
      break;
    };
  };
};
console.log(`勝率は ${Math.round(winCount / TRIALS * 100)}%です。`)
