

function arrayNumbers(array) {

   //let size = Object.keys(array).length;
  // console.log(array.length);

   

   for (let i = 1; i <=array.length; i++) {
      let get = document.getElementById(String(i));
      //console.log(get);
      let str = String(Object.values(array)[i-1]);
      //console.log(str);
      get.innerHTML = str;     
      if (str == "16") {
         get.innerHTML = "";
      
   }
   
   }

   return array;
}

export default arrayNumbers;