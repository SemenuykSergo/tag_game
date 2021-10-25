// на клетки вешается обработчик нажатий
// проверяется возможность хода и выигрышная комбинация

import arrayWin from "./array_win.js";
import { examinationCell } from "./examination_cell.js";

let score = 0;

function getCellContent(array) {

   let win;
   let cellId, cellSymbol;
   let tempArray = [];
   let audio = document.getElementById("myAudio");
   let getScore = document.getElementById("score");


   for (let i = 1; i <= array.length; i++) {
      let get = document.getElementById(String(i));
      get.onclick = () => {
         audio.play();
         cellId = get.id;
         cellSymbol = get.innerHTML;
         tempArray = examinationCell(cellId, cellSymbol, array);
         win = arrayWin(tempArray);
         if (win == true) {
            setTimeout(() => {
               alert(`You win,congratulations! Score is ${score}`);
               window.location = "index.html";
            }, 250);
         }
         else {
            score++;
            getScore.innerText = score;
         }
      };
   }

   return array;
}
export default getCellContent;





