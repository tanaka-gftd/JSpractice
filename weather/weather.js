'use strict'

console.log('デフォルト設定では、dockerコンテナ内から外部への通信は行えない');

function requestWeather() {

  document.getElementById('prefecture').value = '';
  document.getElementById('city').value = '';
  document.getElementById('telop').value = '';
  document.getElementById('text').value ='';

  const code = document.getElementById('code').value;

  //URLにパラメータをつける
  let url = `https://weather.tsukumijima.net/api/forecast?city=${code}`;

  //XMLHttpRequestオブジェクト生成
  let xhr = new XMLHttpRequest();

  //指定したURLにはGETメソッドでアクセスするようにする
  xhr.open('GET', url);

  //リクエストのヘッダを設定
  xhr.setRequestHeader('Api-User-Agent', 'Nyobikou');

  //レスポンスの形式を設定
  xhr.responseType = 'json';

  //リクエスト送信
  xhr.send();

  //レスポンスが返ってきたら実行
  xhr.onload = function() {
    console.log(xhr.response); //デバッグ用
    if(!xhr.response||!xhr.response.error){ //レスポンスが返ってきて、かつレスポンスにエラーが含まれてないなら、各データを入力欄に表示していく
          document.getElementById('prefecture').value = xhr.response.location.prefecture;
          document.getElementById('city').value = xhr.response.location.city;
          document.getElementById('telop').value = xhr.response.forecasts[2].telop;
          document.getElementById('text').value = xhr.response.description.text;
      } else {
          //レスポンスにエラーがあれば、アラートを表示
          alert('天気データを取得できませんでした');
      };
  };
};