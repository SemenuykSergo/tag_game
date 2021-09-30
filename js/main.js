import createTable from "./create_table.js";
import arrayNumbers from "./array_number.js";
import shuffle from "./array_random.js";
import arrayCreate  from "./array_create.js";



let element = document.querySelector('#element');
createTable(element, 4, 4);
let arrayTemp=arrayCreate(16);// создаем новый массив
arrayTemp=shuffle(arrayTemp);// перемешиваем его значения
arrayTemp=arrayNumbers(arrayTemp);// передаём перемешанный массив, чтобы вывести его в таблицу