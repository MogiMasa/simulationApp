
var count = 0;

var td_array = document.getElementsByTagName("td");
var cells = [];
var ans   = [];
var index = 0;
for (let row = 0; row < 40; row++) {
  cells[row] = []; // 配列のそれぞれの要素を配列にする(2次元配列にする)
  for (let col = 0; col < 40; col++) {
    cells[row][col] = td_array[index];
    
    index++;
  }
}

for (let row = 0; row < 44; row++) { 
    ans[row]   = [];// 配列のそれぞれの要素を配列にする(2次元配列にする)
    for (let col = 0; col < 44; col++) {
      ans[row][col] = td_array[index];
      index++;
    }
  }





let paused = false
const timerId = setInterval(function(){
  if(paused){ 
    console.log('処理を一時停止')
    return 
  }
        /*近傍の生存数によって生死をきめるライフゲームプログラム*/
        for (let row = 1; row < 39; row++) { 
          for (let col = 1; col < 39; col++) {
              let sum = 0;

              //近傍の生存数カウント
              if(cells[row+1][col].className !== ""){sum++;}
              if(cells[row][col+1].className !== ""){sum++;}
              if(cells[row-1][col].className !== ""){sum++;}
              if(cells[row][col-1].className !== ""){sum++;}
              if(cells[row+1][col+1].className !== ""){sum++;}
              if(cells[row-1][col+1].className !== ""){sum++;}
              if(cells[row-1][col-1].className !== ""){sum++;}
              if(cells[row+1][col-1].className !== ""){sum++;}

              //近傍の生存セルが２、３でない場合死亡
              if(cells[row][col].className !== ""){
                  if(sum !== 2 && sum !== 3){
                    ans[row+1][col+1].className = "";
                  }
                  else{
                    ans[row+1][col+1].className = "i";
                  }
                }
              else{
                if(sum === 3){
                  ans[row+1][col+1].className = "i";
                }
              }
          }
        }
      /*近傍の生存数によって生死をきめるライフゲームプログラム*/

            /*生存セルの上下左右のセルを生存させる。生存セルは死亡するプログラム*/
        // for (let row = 0; row < 10; row++) { 
        //     for (let col = 0; col < 10; col++) {
        //         if(cells[row][col].className !== ""){
        //         ans[row][col+1].className = "i";
        //         ans[row+2][col+1].className = "i";
        //         ans[row+1][col].className   = "i";
        //         ans[row+1][col+2].className = "i";
        //         }
        //     }
        //   }

        // for (let row = 0; row < 10; row++) { 
          //   for (let col = 0; col < 10; col++) {
          //       if(cells[row][col].className !== ""){
          //       ans[row+1][col+1].className = "";
          //       }
          //   }
          // }
      /*生存セルの上下左右のセルを生存させる。生存セルは死亡するプログラム*/

              for (let row = 0; row < 40; row++) { 
            for (let col = 0; col < 40; col++) {
              cells[row][col].className = ans[row+1][col+1].className;
            }
          }
  
  console.log('ただいま実行中')
}, 200)
 
document.getElementById('btnPause').onclick 
= function(){
  paused = true
}
document.getElementById('btnStart').onclick 
= function(){
  paused = false
}







  




