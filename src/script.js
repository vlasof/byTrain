let funk = () => {
    return new Promise((resolve, reject) => {
        let count = +prompt('enter number 1 or 0', 0);
        if (count == 1) {
            resolve(count);
        } else if (count == 0) {
            reject(count);
        } else {
            reject(count);
        }
    }).then(count => {
        console.log(`its then ${count}`);
    }).catch(count => {
        console.log(`its catch ${count}`);
    })
}

funk();