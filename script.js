// Function for loading the document page
$(document).ready(() => {
    // Target various id and class elements
    const currentDayElement = $('#currentDay')
    const currentTimeElement = $('#currentTime')
    const mainContainerElement = $('.main-container')

    // Display Current Date with Dayjs() format
    const todaysDate = dayjs().format('dddd, MMMM D, YYYY')
    currentDayElement.text(todaysDate)

    // Function for updating time
    function updateCurrentTime() {
        const time = dayjs().format('HH:mm:ss')
        currentTimeElement.text(time)
    }

    setInterval(updateCurrentTime, 1000)
  

    //  Converting time from string to number
    const currentHour = Number(dayjs().format('H'));
      

    let timeBlocksHTML = ``;

    // for loop to iteration through the hours from 9am-5pm
    for (let hour = 9; hour <= 17; hour++) {
        let timePeriod = ''

        // conditional statement for determining if a particular time period is in the 
        // past, present or future
        if (hour < currentHour) {
            timePeriod = 'past'
        } else if (hour > currentHour) {
            timePeriod = 'future'
        } else {
            timePeriod = 'present'
        }

        // create one div element for a single time block
        const singleTimeBlock = `
        <div id='hour-${hour}' class='time-block'>
            <div class ='hour'>${hour}:00</div>
            <textarea class='text-area ${timePeriod}'></textarea>
            <button class='save-btn'>
                <i class="fa-solid fa-floppy-disk"></i>
            </button>
        </div>
        `
        // let element = $(`#hour-${hour} .text-area`)

        timeBlocksHTML += singleTimeBlock;
    }

    mainContainerElement.html(timeBlocksHTML);

    mainContainerElement.on('click', '.save-btn', function () {
        const textarea = $(this).siblings('.text-area');
        const textAreaValue = textarea.val();
        const hour = textarea.closest('.time-block').attr('id');
        if (textAreaValue !== '') {
            localStorage.setItem(`${hour}`, textAreaValue);
        }
    });
 

    function getSaveEvents() {
        for (let hour = 9; hour <= 17; hour++) {
            const savedEvent = localStorage.getItem(`hour-${hour}`);
            if (savedEvent) {
                $(`#hour-${hour} .text-area`).val(savedEvent);
            }
        }
    }
    getSaveEvents();
})