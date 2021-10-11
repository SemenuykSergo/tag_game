

function arrayNumbers(array) {
//! здесь ввести дополнительный параметр функции, если он true, то заполняем, 
//! меняя 16 на "",иначе блок if неактивен.

   for (let i = 1; i <= array.length; i++) {
      let get = document.getElementById(String(i));
      let str = String(Object.values(array)[i - 1]);
      get.innerHTML = str;
      if (str == "16") {
         get.innerHTML = "";
      }
   }

   return array;
}
export default arrayNumbers;