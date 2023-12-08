var currentDay = $('#currentDay')
var todaysDate = dayjs().format("DD/MM/YYYY")
console.log(todaysDate)
currentDay.text(todaysDate)