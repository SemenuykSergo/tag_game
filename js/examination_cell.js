function examinationCell(cellId, cellSymbol, array) {

   let up = true;
   let down = true;
   let left = true;
   let right = true;  
   let getCellId = "";
   let tempArray = [];
   let condition;


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
  

   if (cellId) {

      if (left == true && document.getElementById(String(cellId - 1)).innerHTML == "") {
         condition = cellId - 1;
      }
      if (up == true && document.getElementById(String(cellId - 4)).innerHTML == "") {
         condition = cellId - 4;
      }

      if (right == true && document.getElementById(String(Number(cellId) + 1)).innerHTML == "") {
         condition = Number(cellId) + 1;
      }
      if (down == true && document.getElementById(String(Number(cellId) + 4)).innerHTML == "") {
         condition = Number(cellId) + 4;
      }

   }


   if (condition) {
      tempArray = cellCheck(condition, array);
      return tempArray;
   } else return array;



   function cellCheck(condition, array) {

      getCellId = document.getElementById(String(condition));
      let strCellSymbol = getCellId.innerHTML;
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";
         tempArray = returnTempArray(array);
         return tempArray;
      }


   }

}

function returnTempArray(array) {
   let tempArray = [];
   for (let i = 0; i < array.length; i++) {
      tempArray[i] = document.getElementById(String(i + 1)).innerHTML;
   }
   return tempArray;
}

export { examinationCell };