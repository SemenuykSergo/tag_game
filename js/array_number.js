

function arrayNumbers(arr) {

   let size = Object.keys(arr).length;

   for (let i = 1; i <=size; i++) {
      let get = document.getElementById(String(i));
      let str = String(Object.values(arr)[i-1]);
      get.innerHTML = str;
      if (str == "16") {
         get.innerHTML = "";
      
   }
   }
}

export default arrayNumbers;