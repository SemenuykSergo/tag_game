

function getCellContent(array) {
   let cellId, cellSymbol;
   for (let i = 1; i <= array.length; i++) {

      //let str = String(Object.values(array)[i - 1]);

      let get = document.getElementById(String(i));

      //console.log();

      //get.id = (Object.values(array)[i - 1]);

      //get.id=str;

      get.onclick = () => {

         cellId = get.id;
         cellSymbol = get.innerHTML;
         // console.log(cellId+" "+cellSymbol);

         //console.log(get.innerHTML + "  " + get.id)
         examinationCell(cellId, cellSymbol, array);
      };

   }
}
export default getCellContent;

function examinationCell(cellId, cellSymbol, array) {

   if (array[cellId] == 16) { console.log("ALERT +1 " + array[cellId]); }
   if (array[cellId - 2] == 16) { console.log("ALERT -1 " + array[cellId - 2]); }
   if (array[cellId - 5] == 16) { console.log("ALERT -4 " + array[cellId - 5]); }
   if (array[(Number(cellId) + 3)] == 16) { console.log("ALERT +4 " + array[(Number(cellId) + 3)]); }

//! упорядочить и добавить границы проверки полей, не меньше 0, не больше 16
//! и +-1, если возле края поле, получается по диагонали
}