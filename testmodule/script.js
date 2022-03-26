let con = (colomn, diver) => {
    const wid = 100;
    let size = wid / colomn;
    diver.style.cssText = `width: ${size}%; height: ${size}%;`;
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
        const row_childWRT = document.createElement(`td`);
        const row_child = con(colomn, row_childWRT);
        row_child.id = `line${i}${j}`;
        row.appendChild(row_child);
        const divm = document.createElement(`div`);
        divm.className = `barz`;
        divm.id = `barz${i}${j}`;
        divm.innerHTML = `+`;
        row_child.appendChild(divm);
    }
    tbody.appendChild(row);
}