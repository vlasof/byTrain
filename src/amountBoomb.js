function matrixNumberBoxDraw() {
    
    for (let i = 0; i < matrixNumber.length; i++) {
        
        for (let j = 0; j < (matrixNumber[i].length); j++) {
            
            if (matrixNumber[i][j] == 'e') matrixNumber[i][j] = nubmerBox(i, j);
            else matrixTable[i][j].value = 'b';
            
        }
    }

}

function nubmerBox(i, j) {
    let sum = 0;
    
    if (i !== 0) {//вверх
        if (matrixNumber[i - 1][j] == 'b') sum++;
    }

    if (j !== (matrixNumber.length - 1) && i !== 0) {
        if (matrixNumber[i - 1][1 + j] == 'b') sum++;
    }

    if (j !== (matrixNumber.length - 1)) {//право
        if (matrixNumber[i][1 + j] == 'b') sum++;
    }

    if (j !== (matrixNumber.length - 1) && i !== (matrixNumber.length - 1) ) {
        if (matrixNumber[1 + i][1 + j] == 'b') sum++;
    }

    if (i !== (matrixNumber.length - 1)) {//низ
        if (matrixNumber[1 + i][j] == 'b') sum++;
    }

    if (j !== 0 && i !== (matrixNumber.length - 1)) {
        if (matrixNumber[1 + i][j - 1] == 'b') sum++;
    }

    if (j !== 0) {//лево
        if (matrixNumber[i][j - 1] == 'b') sum++;
    }

    if (j !== 0 && i !== 0) {
        if (matrixNumber[i - 1][j - 1] == 'b') sum++;
    }

    matrixTable[i][j].value = sum;
    return sum;

}