// на клетки вешается обработчик нажатий
// проверяется возможность хода и выигрышная комбинация

import arrayWin from "./array_win.js";
import { examinationCell } from "./examination_cell.js";

function getCellContent(array) {

   let win;
   let cellId, cellSymbol;
   let tempArray = [];
   let audio = document.getElementById("myAudio");

   for (let i = 1; i <= array.length; i++) {
      let get = document.getElementById(String(i));
      get.onclick = () => {
         audio.play();
         cellId = get.id;
         cellSymbol = get.innerHTML;
         tempArray = examinationCell(cellId, cellSymbol, array);             
         win = arrayWin(tempArray);
         if (win == true) { console.log('WIN!'); }else{console.log(win);}
      };
   }

   
   return array;
}
export default getCellContent;





