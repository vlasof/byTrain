const button = document.getElementById(`cont`);
const timertext = document.getElementById(`timer`);
const timebox = document.getElementById(`timerule`);

let second = 0;
let milsecond = 0;
let minut = 0;

let seclet;
let millet;
let minlet;

let buttoncount = 0;

let check2 = true;
button.addEventListener(`click`, () => {

    // if (buttoncount == 0) {
    //     buttoncount = 1;
    // } else {
    //     buttoncount = 0;
    // }

    if (check2 == true) timer();
    check2 = false;
})

let timer = () => {
    let timerId = setInterval(function() {
        if (buttoncount == 0) {
            milsecond++;

            if (milsecond == 100) {
                milsecond = 0;
                second += 1;
            }

            if (second == 60) {
                second = 0;
                minut += 1;
            }

            // if (milsecond == 100 || second == 60 || minut == 60) {
            //     milsecond = 0;
            //     second = 0;
            //     minut = 0;
            // }

            millet = milsecond;
            seclet = second;
            minlet = minut;

            if (milsecond < 10) {
                millet =`0${milsecond}`;
            }
            if (second < 10) {
                seclet = `0${second}`;
            }
            if (minut < 10) {
                minlet = `0${minut}`;
            }
            timertext.innerHTML = `${minlet}:${seclet}:${millet}`;

        } else clearInterval(timerId);

    }, 8)
}
