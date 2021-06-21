const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', onClickStartBtn);
refs.btnStop.addEventListener('click', onClickStopBtn);

// генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// генерация фонового цвета
function randomBackgroundColor(array) {
    const max = array.length - 1;
    const min = 0;
    const index = randomIntegerFromInterval(min, max);
    const color = array[index];
    document.body.style.backgroundColor = color;
}

// Старт
function onClickStartBtn(event) {
    console.log('Start')
    randomBackgroundColor(colors);
    refs.btnStart.disabled = true;
};

// Стоп
function onClickStopBtn(event) {
    console.log('Stop')
    refs.btnStart.disabled = false;
};





