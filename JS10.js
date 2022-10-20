let playerMap = new Map();
playerMap.set('player1',{name:'太郎', score:0});
playerMap.set('player2',{name:'次郎', score:0});
playerMap.set('player3',{name:'三年寝太郎', score:0});
console.log(playerMap);
/* 
  //別解
  //似たようなデータなので、繰り返し処理でも追加できる
  let playersMap = new Map();
  let names = [`太郎`, `次郎`, `三年寝太郎`]; // 名前の入った配列を用意します。
  for (let i = 0; i < names.length; i++) {
    playersMap.set(`player${i + 1}`, {  //'player'と${i + 1}を結合するのがコツ
      name: names[i],
      score: 0
    });
  }
*/



const yarinage = () => {
  let r = Math.floor(Math.random() * 100);  //模範解答では小数点以下切り捨てを行なっていない
  let m = Math.floor(Math.random() * 100);  //模範解答では小数点以下切り捨てを行なっていない
  return [r,m];
};
for (let [playerID, playerData] of playerMap) {
  const score = yarinage();

  for(let i = 0; i < 2; i++){
    console.log(`${playerData.name}さんの${i + 1}本目は${score[i]}mでした。`);
  };

  if (score[0] > playerData.score || score[1] > playerData.score) {
    if(score[0] > score[1]){
      playerData.score = score[0];
    } else {
      playerData.score = score[1];
    };
  };
};
console.log(playerMap);



let maxScore = 0;
let maxPlayerName = '';
for (let [playerID, playerData] of playerMap) {
  if(playerData.score > maxScore){
    maxScore = playerData.score;
    maxPlayerName = playerData.name;
  };
};
console.log(`${maxPlayerName}さんが 記録${maxScore}mで 金メダル獲得です！`);
