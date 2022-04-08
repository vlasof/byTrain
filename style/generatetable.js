let con = (colomn) => {
    const wid = 100;
    let size = wid / colomn;
    if (colomn > 30) {
        size = 0.5;
    }
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

let colomn = 10;
totalCell = colomn * colomn;

for (let i = 0; i < colomn; i++) {

    const line = document.createElement(`div`);
    line.className = `line`;
    line.id = `colomnum${i}`;
    line.style.cssText = `width: 100%; height: ${con(colomn)}%;`;

    for (let j = 0; j < colomn; j++) {
        const block = document.createElement(`div`);
        block.className = `block`;
        block.id = `line${i}:${j}`;
        block.onclick = eventClick;
        block.oncontextmenu = eventClickRight;
        block.style.cssText = `width: ${con(colomn)}%; height: auto;`;
        const text = document.createElement(`div`);
        text.className = `texttable`;
        text.id = `text${i}${j}`;
        block.appendChild(text);
        line.appendChild(block);
    }
    tbody.appendChild(line);
}
