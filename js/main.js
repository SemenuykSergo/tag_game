import createTable from "./create_table.js";
import arrayNumbers from "./array_number.js";
import shuffle from "./array_random.js";
import arrayCreate from "./array_create.js";
import getCellContent from "./get_cell_content.js";



let element = document.querySelector('#element');
createTable(element, 4, 4);// создаём таблицу
let arrayTemp = arrayCreate(16);// создаем новый массив
arrayTemp = shuffle(arrayTemp);// перемешиваем его значения 
arrayTemp = arrayNumbers(arrayTemp);// передаём перемешанный массив,
// чтобы вывести его в таблицу

//console.log(typeof arrayTemp);
//console.log(arrayTemp);

getCellContent(arrayTemp);// получаем содержимое клетки 
 //! возможно здесь прописать в while , что если функция проверки массива 
 //! не возвращает true, то перемещение и проверка клеток активны
 //!