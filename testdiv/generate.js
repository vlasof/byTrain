let con = (colomn) => {
    const wid = 100;
    let size = wid / colomn;
    return size;
}

const table = document.createElement(`div`);
table.className = `table`;
table.id = `tablediv`;
const tbody = document.createElement(`div`);
tbody.className = `tablebody`;
tbody.id = `bodytable`;
table.appendChild(tbody);
document.getElementById(`tableborder`).appendChild(table);

let colomn = +prompt(`enter number`, `0`);

for (let i = 0; i < colomn; i++) {
    const line = document.createElement(`div`);
    line.className = `line`;
    line.style.cssText = `width: 100%; height: ${con(colomn)}%;`;
    for (let j = 0; j < colomn; j++) {
        const block = document.createElement(`div`);
        block.className = `block`;
        block.style.cssText = `width: ${con(colomn)}%; height: auto;`;
        line.appendChild(block);
    }
    tbody.appendChild(line);
}
