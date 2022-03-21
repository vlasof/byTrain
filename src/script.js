
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

let colomn = +prompt("enter colomt", 5);
let line = prompt("enter colomt", 5);
let countY = 0;
let countX = 0

for (let c = 0; c < colomn; c++){
    countY += 25;
    let row = document.createElement('tr');
    row.id = `colomnum${c}`
    countX = 0;
    for (let l = 0; l < line; l++) {
        countX += 25;
        // создание td (строчек таблицы), добавление к ним id и текста через innerHTML
        let row_child = document.createElement('td');
        row_child.id = `line${c}${l}`;
        row_child.innerHTML = c + l;
        row_child.onclick = kaif; // по нажатию вызывается функция
        row.appendChild(row_child); // связывание столбца со строкой
    }
    tbody.appendChild(row); // связывание тега table со столбцок который выше привязали строки 
}

table.style.cssText = `width: ${countY}px; height: ${countX}px;`;
table.className.cssText = `.table`

