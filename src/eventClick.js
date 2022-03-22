// функция для клика
function eventClick() {

    let elementId = document.getElementById( this.id);

    if (elementId.boomb == 'boomb') {

        console.log('boomb!');

    }

    if (elementId.boomb == 'empty') {

        console.log('empty!');
        checkEmpty(elementId);

    }

}

function checkEmpty(elementId) {
    

    for (let i = 0; i < matrixId.length; i++) {

        for (let j = 0; j < matrixId[i].length; j++) {

            if (elementId.id == matrixId[i][j]) {
                checkEmptyBox(i, j);
            }

        }

    }

    console.log('----------------------')
    //рисовка в косоле (можно удалить)
    for (let h = 0; h < matrixNumber.length; h++) {
        console.log(...matrixNumber[h]);
    }

}

function checkEmptyBox(i, j) {

    
    // if (i !== 0) {//вверх
    //     if (matrixNumber[i - 1][j] == 0) checkEmptyBox( (i - 1), j );
    // }

    // if (j !== (matrixNumber.length - 1) && i !== 0) {
    //     if (matrixNumber[i - 1][1 + j] == 0) checkEmptyBox( (i - 1), (1 + j) );
    // }

    // if (j !== (matrixNumber.length - 1)) {//право
    //     if (matrixNumber[i][1 + j] == 0) checkEmptyBox(j, ( 1 + j) );
    // }

    // if (j !== (matrixNumber.length - 1) && i !== (matrixNumber.length - 1) ) {
    //     if (matrixNumber[1 + i][1 + j] == 0) checkEmptyBox( (1 + i), ( 1 + j) );
    // }

    // if (i !== (matrixNumber.length - 1)) {//низ
    //     if (matrixNumber[1 + i][j] == 0) checkEmptyBox( (1 + i), j);
    // }

    // if (j !== 0 && i !== (matrixNumber.length - 1)) {
    //     if (matrixNumber[1 + i][j - 1] == 0) checkEmptyBox( (1 + i), (j - 1) );
    // }

    // if (j !== 0) {//лево
    //     if (matrixNumber[i][j - 1] == 0) checkEmptyBox( i, (j - 1) );
    // }

    // if (j !== 0 && i !== 0) {
    //     if (matrixNumber[i - 1][j - 1] == 0) sucheckEmptyBox( (i - 1), (j - 1) );
    // }
    console.log(matrixNumber[i][j]);

    if (matrixNumber[i][j] == 0) {
        matrixNumber[i][j] = '@';
    }

    if (matrixNumber[i][j] == 1) {
        matrixNumber[i][j] = '&';
    }
    
    if (matrixNumber[i][j] == 2) {
        
    }

    if (matrixNumber[i][j] == 3) {
        
    }

    if (matrixNumber[i][j] == 4) {
        
    }

    if (matrixNumber[i][j] == 5) {
        
    }

    if (matrixNumber[i][j] == 6) {
        
    }
}
