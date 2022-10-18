/* 関数式の書き方に慣れるため、ここでは関数の宣言の仕方を変更しています*/



const naruhodo = () => {
  console.log('なるほど');
};
naruhodo();



const calcTax = (price) => {
  return Math.floor(price * (100 + 10) / 100);
};
console.log(calcTax(100));  //関数を実行した後、その結果をconsole.logで表示するのを忘れないように
console.log(calcTax(350));
console.log(calcTax(999));
console.log(calcTax(1980));



const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(3,9));
console.log(`53654 + 32413 は、${add(53654, 32413)} です。`);



const ageCheck = (age) => {
  if(age >= 20){  //法律変更で18歳成年になったが、問題文では20際になっているので、ここでは20にしておく
    return '成年';
  } else {
    return '未成年';
  };
};
console.log(`9歳は${ageCheck(9)}です。`);
console.log(`19歳は${ageCheck(19)}です。`);
console.log(`20歳は${ageCheck(20)}です。`);
console.log(`60歳は${ageCheck(60)}です。`);



const createRandomArray = (size) => {
  const randomArray = [];
  for(let i = 0; i < size; i++){
    const num = Math.floor(Math.random() * 99 + 1);
    randomArray.push(num);
  };
  return randomArray;
};
console.log(createRandomArray(7));
console.log(createRandomArray(12));



const createDungeon = (width=10, height=10) => {
  let dungeon = [];
  for(let i = 0; i < width; i++){
    dungeon.push([]); //配列dungeonに、配列を要素として追加していく
  };
  for(let j = 0; j < width; j++){
    for(let k = 0; k < height; k++){

      dungeon[j][k] = '道';
  
      if(j >= 3 && k >= 3){
        if(Math.floor(Math.random() * 4) === 0)
        dungeon[j][k] = '壁';
      };
    };
  };
  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);
  dungeon[x][y] = '宝';
  console.log(`ダンジョンが生成されました。宝の座標は[${x}][${y}]です。`);
  return dungeon;
};
console.log(createDungeon());
/* 
  //模範解答 
  function createDungeon(width=10, height=10) {
  let dungeon = [[]];  //JavaScriptの２重配列の宣言は [[]] とする。（ [][] ではない）
  for (let y = 0; y < height; y++) {
    dungeon[y] = [];
    for (let x = 0; x < width; x++) {
      dungeon[y][x] = `道`;
      if ((x < 3 && y < 3)) continue;
      if (Math.floor(Math.random() * 4) === 0) {
        dungeon[y][x] = `壁`;
      }
    }
  }
  let randomX = Math.floor(Math.random() * width);
  let randomY = Math.floor(Math.random() * height);
  dungeon[randomY][randomX] = `宝`;
  console.log(`ダンジョンができました。宝は [${randomY}][${randomX}] に隠したよ。`);
  console.log(dungeon);
  return dungeon;
}
createDungeon();
*/



const fibonacci = (n) => {
  if(n === 0){
    return 0;
  } else if(n === 1){
    return 1;
  };
  return fibonacci(n - 2) + fibonacci(n - 1);  //何となく書いてみたら正解だった
};
console.log(`20番目のフィボナッチ数列は${fibonacci(20)}です。`);



const collatz = (n) => {
  if(!Number.isInteger(n) || n <= 0){  //nが1以上の自然数出ない時
    console.log('本関数を呼び出すときは、1以上の自然数を引数としてください');  
    return;  
  };
  console.log(`nの値が${n}になりました。`);
  if(n === 1){   //nが1の時
    console.log('終了');
    return; 
  } else if (n % 2 === 0){  //nが偶数の時
    collatz(n / 2);  
  } else {  //nが奇数の時 
    collatz(n * 3 + 1);  
  };
};
collatz(100); //偶数
collatz(81);  //奇数
collatz(59);  //奇数かつ素数
collatz(1/3);  //ここから4行はエラー確認用
collatz(8.1);
collatz(-59);
collatz(0);



const gcd = (x, y) => {
  if((!Number.isInteger(x) || x <= 0) || (!Number.isInteger(y) || y <= 0)){  //xとyが1以上の自然数出ない時
    return '求められません。本関数の引数には1以上の自然数を設定してほしい'; 
  };

  if (x < y) { //xの方が大きな値になるようにする
    const tmp = x;
    x = y;
    y = tmp;
  };
  
  const r = x % y;
  
  if(r === 0){
    return y;
  } else {
    return gcd(y, r);
  };
};
console.log(`1920と1080の最大公約数は${gcd(1920, 1080)}です。`);
console.log(`570と950の最大公約数は${gcd(570, 950)}です。`);  //第二引数の方が大きい場合
console.log(`97と13の最大公約数は${gcd(97, 13)}です。`); //素数同士
console.log(`-1920と1080の最大公約数は${gcd(-1920, 1080)}です。`); //ここから3行はエラーチェック
console.log(`1920と-1080の最大公約数は${gcd(1920, -1080)}です。`);
console.log(`0と1080の最大公約数は${gcd(0, 1080)}です。`);


