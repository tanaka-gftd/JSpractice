const ageGame = {
  age:17,
  start:function(){
    ageGame.age = Math.floor(Math.random()* 101);
    console.log('ゲームの開始です。私の年齢を当ててください。');
    console.log(ageGame.age);
  },
  guess:function(num){
    if(num === ageGame.age){
      console.log(`正解！${ageGame.age}歳だよ。`);
    } else if(num > ageGame.age){
      console.log('もっと下だよ。');
    } else if (num < ageGame.age){
      console.log('もっと上だよ。');
    };
  }
};
//console.log(ageGame.age);
ageGame.start();
ageGame.guess(48);


/* Dockerコンテン内からでは外部ネットワークにアクセスできないので、以下はweatherフォルダ内にまとめて記述*/
/* let city = 130010;
let url = `https://weather.tsukumijima.net/api/forecast?city=${city}`;
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.setRequestHeader('Api-User-Agent', 'Nyobikou');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function(){
  console.log(xhr.response);
}; */


