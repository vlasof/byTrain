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

let check = () => {
    let num = 0;
    do {
        num = +prompt(`ENTER NUMBER`, 5);
    } while (num == NaN)
    return num;
}

let myCord = (colomn) => {
    const mainwindow = 100;
    let cord;
    cord = (mainwindow * 1) / colomn;
    return cord;
}

// функция для клика

let kaif = () => {
    alert(`kaif`);
}
// создание тегов table thead tbody
// связывание тегов с body 

const table = document.createElement('table');
table.className = 'table';
const tbody = document.createElement('tbody');
table.appendChild(tbody);

document.getElementById('cont').appendChild(table);

let colomn = check();
if (colomn == 0 || colomn == 1) {
    colomn = 2;
}
if (colomn > 50) {
    colomn = 50;
}
let countY = 0;
let countX = 0;

for (let c = 0; c < colomn; c++){
    countY += 25;
    let row = document.createElement('tr');
    row.id = `colomnum${c}`
    countX = 0;
    for (let l = 0; l < colomn; l++) {
        countX += 25;
        // создание td (строчек таблицы), добавление к ним id и текста через innerHTML
        let row_child = document.createElement('td');
        row_child.id = `line${c}${l}`;
        //row_child.innerHTML = c + l;
        row_child.onclick = kaif; // по нажатию вызывается функция
        row_child.style.cssText = `width: ${myCord(colomn) * 6}px; height: ${myCord(colomn) * 6}px;`
        row.appendChild(row_child); // связывание столбца со строкой
    }
    tbody.appendChild(row); // связывание тега table со столбцок который выше привязали строки 
}

//table.style.cssText = `width: ${countY}px; height: ${countX}px;`;
table.className.cssText = `.table`

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
