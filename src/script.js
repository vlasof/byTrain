// создание тегов table thead tbody
// связывание тегов с body 

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

const row_1 = document.createElement('tr');
const row_1_data_1 = document.createElement('tr');

let colomn = +prompt("enter colomt", 5);
let line = prompt("enter colomt", 5);

for (let c = 0; c < colomn; c++){
    let row = document.createElement('tr');
    row.id = `colomnum${c}`
    for (let l = 0; l < line; l++) {
        let row_child = document.createElement('td');
        row_child.id = `line${c}${l}`;
        row_child.className = 'linestyle';
        row_child.innerHTML = c + l;
        row.appendChild(row_child);
    }
    tbody.appendChild(row);
}