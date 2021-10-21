// создание массива значений , размер - игровое поле
// дальше массив передастся и перемешается


function arrayCreate(item) {
   
   let arrayStart=[];
   for (let i = 1; i <= item; i++) {
      arrayStart[i - 1] = i;     
   }   
   
   return arrayStart;
}

export default arrayCreate;