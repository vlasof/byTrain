
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

document.getElementById('body').appendChild(table);

let colomn = +prompt("enter colomt", 5);
let line = prompt("enter colomt", 5);
let count = 0;

for (let c = 0; c < colomn; c++){
    count += 100;
    let row = document.createElement('tr');
    row.id = `colomnum${c}`
    for (let l = 0; l < line; l++) {

        // создание td (строчек таблицы), добавление к ним id и текста через innerHTML
        let row_child = document.createElement('td');
        row_child.id = `line${c}${l}`;
        row_child.innerHTML = c + l;
        row_child.onclick = kaif; // по нажатию вызывается функция
        row.appendChild(row_child); // связывание столбца со строкой
    }
    tbody.appendChild(row); // связывание тега table со столбцок к которому выше привязали строки 
}

table.style.cssText = `width: ${count}px`;
table.className.cssText = `.table`

