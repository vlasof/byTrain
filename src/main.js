let id = 'colomnum0';
let idLine = '';
let changeIdcheck = 0;

let matrixLineId = [];
let matrixId = [];
let matrixNumber = [];
let randomNumberLine = [];

let totalCell = 0;//всего клеток
let amountBoombCell = 0;//количество бомб
let amountOpenCell = 0;//количество открытых клеток

// создание тегов table thead tbody
// связывание тегов с body 
const table = document.createElement('table');
table.className = 'table';
const tbody = document.createElement('tbody');
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

let colomn = +prompt("enter colomt", 10);
let line = prompt("enter colomt", 10);
totalCell = colomn * line;

let count = 0;
for (let c = 0; c < colomn; c++){
    count += 100;
    let row = document.createElement('tr');
    row.id = `colomnum${c}`

    for (let l = 0; l < line; l++) {
        // создание td (строчек таблицы), добавление к ним id и текста через innerHTML
        let row_child = document.createElement('td');
        row_child.id = `line${c}${l}`;
        row_child.innerHTML = '*';
        row_child.style.cssText = 'font-size: 50px';
        row_child.onclick = eventClick; // по нажатию вызывается функция
        row.appendChild(row_child); // связывание столбца со строкой
    }
    
    tbody.appendChild(row); // связывание тега table со столбцок к которому выше привязали строки 
}
table.style.cssText = `width: ${count}px`;
table.className.cssText = `.table`;





for (let i = 0; i < colomn; i++) {
    idLine = document.getElementById(id);
    selection();
    id = changeId(id);
}

console.log(matrixId);

matrixNumberBoxDraw();

//рисовка в косоле (можно удалить)
for (let h = 0; h < matrixNumber.length; h++) {
    console.log(...matrixNumber[h]);
}
console.log(matrixNumber.length);
console.log(matrixNumber);