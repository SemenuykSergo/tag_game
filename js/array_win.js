// проверка выигрышной комбинации

import arrayCreate from "./array_create.js";

function arrayWin(tempArray) {

   let win=false;

   let startArray = arrayCreate(16);
   tempArray[tempArray.indexOf("",0)]=16;   

   for (let i = 0; i < startArray.length; i++) {
      if (startArray[i] != tempArray[i]) {
         return false;
      }
   }
   return win=true;
}

export default arrayWin;