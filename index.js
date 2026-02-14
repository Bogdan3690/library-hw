import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js/auto/+esm";

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const myCanva = document.querySelector('#sales-chart')
const myChart = new Chart(myCanva, {
  type: 'line',
  data: chartData
})


const buttons = [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l"
]

document.addEventListener('keydown', (ev) => {
    ev.preventDefault
    const pressedLetter = ev.target
    console.log(pressedLetter);
    for (const button of buttons) {
            if (pressedLetter === button) {
        iziToast.show({
    title: 'Good job',
    message: 'Right',
    position: 'topRight',
    color: 'green'
})}
    else{
iziToast.show({
    title: 'No',
    message: 'False button',
    position: 'topLeft',
    color: 'red'
})
    }
    }






})