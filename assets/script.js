// set current date and time in jumbotron
var dateTime = moment().format("LLLL")
$('#currentDay').text(dateTime);

// each time there is a time-block class, select id within the same div as time-block and create an integer from number in id name string (separated by -)
$('.time-block').each(function(){
    var currentTime = moment().hour();
    var timeBlock = parseInt($(this).attr('id').split('-')[1]);
    console.log(timeBlock)

    // compare timeBlock value with currentTime value and add/remove classes accordingly
    if(timeBlock < currentTime){
        $(this).addClass('past')
    }else if(currentTime === timeBlock){
        $(this).removeClass('past')
        $(this).addClass('present')
    }else{
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
        }
    });

$('.saveBtn').click(function(){
    // get input value from sibling class=description of save button 
    var taskContent = $(this).siblings('.description').val();

    // get text from sibling class=hour of save button
    var taskHour = $(this).siblings('.hour').text();

    // store values to local storage
    localStorage.setItem(taskHour, taskContent)
})

// get value of each stored key upon page refresh
$('#hour-8 .description').val(localStorage.getItem('8 am'));
$('#hour-9 .description').val(localStorage.getItem('9 am'));
$('#hour-10 .description').val(localStorage.getItem('10 am'));
$('#hour-11 .description').val(localStorage.getItem('11 am'));
$('#hour-12 .description').val(localStorage.getItem('12 am'));
$('#hour-13 .description').val(localStorage.getItem('1 pm'));
$('#hour-14 .description').val(localStorage.getItem('2 pm'));
$('#hour-15 .description').val(localStorage.getItem('3 pm'));
$('#hour-16 .description').val(localStorage.getItem('4 pm'));
$('#hour-17 .description').val(localStorage.getItem('5 pm'));


