const names = ['アリス', 'ウサギ', 'ボーシャ'];
console.log(names[0]);



const sushis = ['まぐろ', 'サーモン', 'えんがわ'];
sushis.push('いくら');
console.log(sushis[3]);
sushis[3] = 'うなぎ';
console.log(sushis);



const gameMap = [
  ['✖️',' ',' '],
  [' ','◯',' '],
  [' ',' ',' ']
];
console.log(gameMap[1][1]);



const lists = ['玉ねぎ','牛豚合い挽き肉','卵','ニンニク','パン粉','牛乳','ケチャップ','ウスターソース'];
console.log('今日買う物');
for(let list of lists){
  console.log(list);
};



const lists2 = [
  '玉ねぎをみじん切りにします',
  '玉ねぎを炒めます',
  '玉ねぎ、パン粉、牛乳、塩をしっかりと混ぜ合わせます',
  '丸く整えます',
  '空気抜きをします',
  'フライパンで焼き上げます',
  '肉じるとソースを混ぜ合わせます',
  'お皿に盛り付けます'
];
console.log('作り方');
for(let [key, value] of lists2.entries()){
  console.log(`${1 + key}番、${value}`);
};



const scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore = 0;
for(let score of scores ){  //繰り返し処理ではあるが、ここはconst変数でも問題なく処理される
  if(maxScore < score){
    maxScore = score;
  };
};
console.log(maxScore);
/* 
  //別解
  //スプレッド構文とMath.max()を利用
  const scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
  console.log(`最高得点は ${Math.max(...scores)}点 です！`);
*/



const nums = [78, 16, 32, 4, 91, 45, 23, 66, 57, 89];
const buckets = [];  //一時置き場
const sorted = [];  //並び替え後の配列
for(let num of nums){
  buckets[num] = num;  //配列内の数値を、数値の値と同じインデックスに格納する
};
for(let i = 0; i < 100; i++){
  //一時置き場の配列の、for文で指定したインデックス(i)に値があれば、並び替え後の配列に加えていく
  if(buckets[i])
    sorted.push(buckets[i]);  //if句、elseif句、else句の後の{}は省略できる（処理内容が複雑になると判りづらくので注意）
};
console.log(sorted);



const unsei = ['大吉','中吉','小吉','吉','凶'];
const result = Math.floor(Math.random() * unsei.length);
console.log(unsei[result]);



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let takarakuji = [];  //結果は数字を並べたものなので、文字列で取得した方が扱いやすく、模範解答では空文字で宣言している
for(let i = 0; i < 6; i++){
  let numbersIndex = Math.floor(Math.random() * numbers.length);
  takarakuji[i] = numbers[numbersIndex];  //結果を文字列で取得する場合は、+で文字列を結合していく
  numbers.splice(numbersIndex, 1);
};
console.log(takarakuji);



const ingredients = [
  ['トマト','バジル','きのこ','コーン'],
  ['生ハム','サラミ','アンチョビ','オリーブ'],
  ['汎用チーズ','モッツァレラ','マスカルポーネ','ゴルゴンゾーラ'],
  ['鶏肉','豚肉','牛肉','海老','蟹']
];
let gyou, retsu;
for(let i = 0; i < ingredients.length; i++){
  for(let j = 0; j < ingredients[i].length; j++){
    if(ingredients[i][j]==='モッツァレラ'){
      gyou = i;
      retsu = j;
    };
  };
};
console.log(`モッツァレラのある場所は${gyou + 1}行目の${retsu + 1}列目です`); //模範解答では+1していない



let seats = [
  ['藤井','永瀬','渡辺','豊島'],
  ['千田','羽生','斎藤','菅井'],
  ['佐々木','久保','木村','佐藤'],
  ['広瀬','糸谷','丸山']
];
let tmpArray = [];
for(let i = 0; i < seats.length; i++){
  for(let j = 0; j < seats[i].length; j++){
    tmpArray.push(seats[i][j]);
  }
}
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
for(let i = 0; i < 4; i++){
  const n = Math.floor(Math.random()*tmpArray.length);
  array1.push(tmpArray[n]);
  tmpArray.splice(n,1);
};
for(let i = 0; i < 4; i++){
  const n = Math.floor(Math.random()*tmpArray.length);
  array2.push(tmpArray[n]);
  tmpArray.splice(n,1);
};
for(let i = 0; i < 4; i++){
  const n = Math.floor(Math.random()*tmpArray.length);
  array3.push(tmpArray[n]);
  tmpArray.splice(n,1);
};
for(let i = 0; i < 3; i++){
  const n = Math.floor(Math.random()*tmpArray.length);
  array4.push(tmpArray[n]);
  tmpArray.splice(n,1);
};
let resultArray = [array1,array2,array3,array4];
console.log(resultArray);   //答えは正しいが、冗長すぎてNG
/* 
  //模範解答
  //2次元配列の中の2つの要素のインデックスを取得し、それを入れ替える処理を繰り返せばOK
  // 現在の座席の二次元配列
  let seats = [
    ['藤井', '永瀬', '渡辺', '豊島'],
    ['千田', '羽生', '斎藤', '菅井'],
    ['佐々木', '久保', '木村', '佐藤'],
    ['広瀬', '糸谷', '丸山']
  ];

  // シャッフル開始
  for (let i = 0; i < 100; i++) {
    let row1 = Math.floor(Math.random() * seats.length); // ランダムな行の添字を取得
    let col1 = Math.floor(Math.random() * seats[row1].length); // ランダムな列の添字を取得
    let name1 = seats[row1][col1]; // 座席の人の名前を取得

    let row2 = Math.floor(Math.random() * seats.length); // ランダムな行の添字を取得
    let col2 = Math.floor(Math.random() * seats[row2].length); // ランダムな列の添字を取得
    let name2 = seats[row2][col2]; // 座席の人の名前を取得

    seats[row1][col1] = name2; // 入れ替え
    seats[row2][col2] = name1; // 入れ替え
  }
  // 結果の出力
  console.log(seats);
*/



//わからなかったので、模範解答を記載
const nums2 = [10, 40, 72, 66, 10, 15, 91, 6, 10, 99, 6];
const buckets2 = []; //一時的に値を保管する配列
const sorted2 = [];  //昇順でデータを入れる配列
for(let num of nums2){

  //指定した要素に値がなかったら、配列を値として追加
  if(!buckets2[num]){
    buckets2[num] = [];
  };

  //pushで配列に値を追加
  //pushを使うことで、配列内の配列に値を追加できる（インデックスを気にせずに追加できる）
  buckets2[num].push(num);
};
for(let i = 0; i < 100; i++){

  if(buckets2[i]){

    //配列buckets2に値として格納されている配列から値を取り出し、ソート済み配列に追加していく（buckets2[i]には配列が値として格納されている）
    //buckets2[i]から値が全て取り出されたら、次のforループに入る
    for(let num of buckets2[i]){
      sorted2.push(num);
    }
  };
};
console.log(sorted2);
