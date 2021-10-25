// создание таблицы в передаваемом размере

function createTable(parent, cols, row) {
   let idItem = 1;
   let table = document.createElement('table');    
   for (let i = 0; i < row; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < cols; j++) {
         let td = document.createElement('td');
         tr.appendChild(td);
         td.id = `${idItem}`;
         idItem++;
      }
      table.appendChild(tr);
   }
   parent.appendChild(table);
}


export default createTable;
