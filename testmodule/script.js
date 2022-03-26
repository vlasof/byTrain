let con = (colomn, diver) => {
    diver.className = `rep `
    if (colomn > 50 || colomn < 0) {
    } else if (colomn > 30) {
        diver.className += `barz-3`;
    } else if (colomn > 19) {
        diver.className += `barz-2`;
    } else if (colomn > 0) {
        diver.className += `barz`;
    }
    return diver;
}

const table = document.createElement('table');
table.className = `table`;
const tbody = document.createElement('tbody');
table.appendChild(tbody);
document.getElementById(`tableborder`).appendChild(table);

let colomn = +prompt(`enter number`, 10);

for (let i = 0; i < colomn; i++) {
    const row = document.createElement(`tr`);
    row.id = `colomn${i}`;
    for (let j = 0; j < colomn; j++) {
        const row_child = document.createElement(`td`);
        row_child.id = `line${i}${j}`;
        //row_child.innerHTML = `+`;
        row.appendChild(row_child);
        const diver = document.createElement(`div`);
        const divm = con(colomn, diver);
        divm.id = `barz${i}${j}`;
        divm.innerHTML = `+`;
        row_child.appendChild(divm);
    }
    tbody.appendChild(row);
}