const message = 'ぬるぽ';
if(message === 'ぬるぽ'){
  console.log('ガッ');
};

const number = 193;
if(number % 3 === 0){
  console.log('サァン！');
} else {
  console.log(number);
};

if(number % 3 === 0 || /3/.test(number)){
  console.log('サァン！');
} else {
  console.log(number);
};

const numberOfKaraage = 8;
const price = 300;
if(numberOfKaraage >=8 && price <= 300){
  console.log('買う');
} else {
  console.log('他の店を見てみる');
};

const aji = '美味しくない';
if(numberOfKaraage >=6 && price <= 500 && aji === '美味しい'){
  console.log('買う');
} else {
  console.log('他の店を見てみる');
};

const resultColor = 'red';
if (resultColor==='red'){
  console.log('酸性');
} else if (resultColor==='blue') {
  console.log('アルカリ性');
} else {
  console.log('中性');
};

const dice = Math.floor((Math.random()*6+1));
switch (dice) {
  case 1:
    console.log('２マス戻る');
    break
  case 2:
    console.log('１回休み');
    break
  case 3:
    console.log('もう一回サイコロを投げる');
    break
  case 4:
    console.log('３マス進む');
    break
  case 5:  //5と6はdefaultで対応した方がいい？
    console.log('何も無し');
    break
  case 6:
    console.log('何も無し');
    break
  default:
    break
};