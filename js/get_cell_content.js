

function getCellContent(array) {
   let cellId, cellSymbol;
   let tempArray = [];
   for (let i = 1; i <= array.length; i++) {

      let get = document.getElementById(String(i));
      get.onclick = () => {

         cellId = get.id;
         cellSymbol = get.innerHTML;
         tempArray = examinationCell(cellId, cellSymbol, array);
         console.log(tempArray); //! отсюда отправить массив на проверку выигрыша
      };

   }
}
export default getCellContent;

function examinationCell(cellId, cellSymbol, array) {

   let up = true;
   let down = true;
   let left = true;
   let right = true;
   // let tempSymbol = "";
   // let strCellSymbol = "";
   let getCellId = "";
   let tempArray = [];


   [1, 5, 9, 13].some(function (el) {
      if (el == cellId) {
         left = false;
         // console.log(`${el}   ${cellId}`);
      }
   });

   [4, 8, 12, 16].some(function (el) {
      if (el == cellId) {
         right = false;
         //console.log(`${el}   ${cellId}`);
      }
   });
   [1, 2, 3, 4].some(function (el) {
      if (el == cellId) {
         up = false;
         // console.log(`${el}   ${cellId}`);
      }
   });
   [13, 14, 15, 16].some(function (el) {
      if (el == cellId) {
         down = false;
         // console.log(`${el}   ${cellId}`);
      }
   });
   //! довавить остальные условия по сторонам проверки
   if (left == true) {

      getCellId = document.getElementById(String(cellId - 1));
      let strCellSymbol = getCellId.innerHTML;
      //console.log(` id ${getCellId.id}   symbol ${strCellSymbol}`);
      if (strCellSymbol == "") {
         getCellId.innerHTML = cellSymbol;
         document.getElementById(String(cellId)).innerHTML = "";

         for (let i = 0; i < array.length; i++) {
            tempArray[i] = document.getElementById(String(i + 1)).innerHTML;
            // console.log(get);
            //! здесь выделить функцию заполнения массива и возврата tempArray
         }

         // console.log(tempArray);
         return tempArray;
      }
   }
}