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
        row_child.style.cssText = `width: ${myCord}%; heidth: $${myCord}%`;
        row.appendChild(row_child); // связывание столбца со строкой
    }
    tbody.appendChild(row); // связывание тега table со столбцок который выше привязали строки 
}

//table.style.cssText = `width: ${countY}px; height: ${countX}px;`;
table.className.cssText = `.table`

