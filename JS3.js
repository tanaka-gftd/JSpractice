const box = "クマのぬいぐるみ";
console.log(box);

console.log(`箱の中身は${box}です。`);

const japaneseScore = 100; // 国語の得点
const englishScore  = 60;  // 英語の得点
const mathScore     = 80;  // 数学の得点
console.log(`合計点は ${japaneseScore+englishScore+mathScore} 点です。`);  //合計点を求めて変数に格納し、それを表示した方がいい
console.log(`平均点は ${(japaneseScore+englishScore+mathScore)/3} 点です。`);

let total = 9000;
const input = 1000;
total = total + input;
console.log(`現在の貯金額は ${total} 円です。`);

let leftHand = `あたり`;
let rightHand = `ハズレ`;
let tmp = leftHand;
leftHand = rightHand;
rightHand = tmp;
console.log(`左手の中身は ${leftHand} です。`);
console.log(`右手の中身は ${rightHand} です。`);

let onikuWeight = 200;
let pricePer100Gram = 100;
let resultPrice = onikuWeight*pricePer100Gram/100;
console.log(resultPrice);

onikuWeight = 600;
pricePer100Gram = 98;
resultPrice = onikuWeight*pricePer100Gram/100;
console.log(resultPrice);
