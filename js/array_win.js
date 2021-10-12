import arrayCreate from "./array_create.js";

function arrayWin(tempArray) {

   let startArray = arrayCreate(16);  
   tempArray[tempArray.indexOf("",0)]=16;
  console.log(tempArray); 

   

   for (let i = 0; i < startArray.length; i++) {

      //console.log(startArray);
      //console.log(tempArray.indexOf("",0));

      if (startArray[i] != tempArray[i]) {
         return false;
      }
   }

   console.log("Feel so good!");

}

export default arrayWin;