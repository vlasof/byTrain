class Car {
    constructor(option){
        this.start = option.start
        this.stop = option.stop
        this.report = option.report
    }
}

class BMW  extends Car {
    constructor(option) {
        super(option);
        this.color = option.color
    }
}

function MainFunk() {
    const myCar = new BMW({});
    let start = 0;
    while(start < 4) {
        start = +prompt("стартуем? (0 or 1)", 1);
        if (start == 1) {
            myCar.start = 1;
            myCar.stop = 0;
            myCar.report = myCar.start;
        } else if(start == 0){
            myCar.start = 0;
            myCar.stop = 1;
            myCar.report = myCar.start;
        } else  if(start == 2) {
            console.log(myCar.start);
            console.log(myCar.stop);
            console.log(myCar.report);
            console.log(myCar.color);
        } else if(start == 3) {
            let color = prompt("enter your color");
            myCar.color = color;
        }
    }
}

MainFunk();
