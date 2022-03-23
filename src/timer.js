let button = document.getElementById(`timerstart`);
let timertext = document.getElementById(`timer`);
let timebox = document.getElementById(`timerule`);

let second = 0;
let milsecond = 0;
let minut = 0;

button.addEventListener(`click`, () => {
    timer();
})

let timer = () => {
    setInterval(function() {
        milsecond++;
        if (milsecond == 60) {
            milsecond = 0;
            second += 1;
        }
        if (second == 60) {
            second = 0;
            minut += 1;
        }
        if (milsecond == 60 || second == 60 || minut == 60) {
            milsecond = 0;
            second = 0;
            minut = 0;
        }
        timertext.innerHTML = `${minut}:${second}:${milsecond}`
    }, 10000)
}