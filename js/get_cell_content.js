import arrayWin from "./array_win.js";


function getCellContent(array) {
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
         arrayWin(tempArray);
      };

   }
}
export default getCellContent;

function examinationCell(cellId, cellSymbol, array) {

   let up = true;
   let down = true;
   let left = true;
   let right = true;
   let getCellId = "";
   let tempArray = [];


   [1, 5, 9, 13].some(function (el) {
      if (el == cellId) {
         left = false;
      }
   });

   [4, 8, 12, 16].some(function (el) {
      if (el == cellId) {
         right = false;
      }
   });
   [1, 2, 3, 4].some(function (el) {
      if (el == cellId) {
         up = false;
      }
   });
   [13, 14, 15, 16].some(function (el) {
      if (el == cellId) {
         down = false;
      }
   });

   //! добавить условие клика по пустой клетке и клеткам не +-1,+-4
   //! чтобы не было ошибок 
   //! может заменить здесь все if на switch case ?
   if (left == true) {
      getCellId = document.getElementById(String(cellId - 1));
      let strCellSymbol = getCellId.innerHTML;
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";
         tempArray = returnTempArray(array);

         return tempArray;
      }
   }
   if (right == true) {
      getCellId = document.getElementById(String(Number(cellId) + 1));
      let strCellSymbol = getCellId.innerHTML;
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";
         tempArray = returnTempArray(array);

         return tempArray;
         // }
      }
   }
   if (up == true) {
      getCellId = document.getElementById(String(cellId - 4));
      let strCellSymbol = getCellId.innerHTML;
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";
         tempArray = returnTempArray(array);

         return tempArray;
      }
   }
   if (down == true) {
      getCellId = document.getElementById(String(Number(cellId) + 4));
      let strCellSymbol = getCellId.innerHTML;
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";
         tempArray = returnTempArray(array);

         return tempArray;
      }
   }

   function returnTempArray(array) {
      let tempArray = [];
      for (let i = 0; i < array.length; i++) {
         tempArray[i] = document.getElementById(String(i + 1)).innerHTML;
      }
      return tempArray;
   }

   //! подумать и вынести эту проверку из верхних условий!!!
   //! где-то возникает путаница с возвращаемыми массивами, вроде.
   /* function cellCheck(condition) {

      getCellId = document.getElementById(String(condition));
      let strCellSymbol = getCellId.innerHTML;
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";
         tempArray = returnTempArray(array);
         return tempArray;
      }


   } */
}
