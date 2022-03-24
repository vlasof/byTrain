const table = document.createElement('table');
table.className = `table`;
const tbody = document.createElement('tbody');
table.appendChild(tbody);
document.getElementById(`container`).appendChild(table);

let colomn = +prompt(`enter number`, 10);

for (let i = 0; i < colomn; i++) {
    let row = document.createElement(`tr`);
    row.id = `colomn${i}`;
    for (let j = 0; j < colomn; j++) {
        let row_child = document.createElement(`td`);
        row_child.id = `line${i}${j}`;
        row_child.innerHTML = `+`;
        row.appendChild(row_child);
    }
    tbody.appendChild(row);
}