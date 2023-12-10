var currentDay = $('#currentDay')
var todaysDate = dayjs().format("DD/MM/YYYY")
console.log(todaysDate)
currentDay.text(todaysDate)

const timeElement = $('.time')
const currentTime =dayjs().format("h:mm:ss A")
timeElement.text(currentTime)

setInterval(() =>{
    const currentTime =dayjs().format("h:mm:ss A")
    timeElement.text(currentTime)
}, 1000)

let currentHour = dayjs().hour()
console.log(typeof currentHour)


if(time == currentHour) {
    console.log('grey')
} else if (time < currentHour) {
    console.log('Yellow')
} else if (time > currentHour) {
    console.log('Green')
}
