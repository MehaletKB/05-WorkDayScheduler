var dateTime = moment().format("dddd, MMMM Do YYYY")
$('#currentDay').text(dateTime);



var currentTime = (moment().format('hh'));
    console.log(currentTime);
    console.log(typeof currentTime);

    
    
    $('.time-block').each(function(){
        var timeBlock = parseInt($(this).attr('id').split('-')[1]);
        console.log(timeBlock);

        if(currentTime === timeBlock){
            $('.description').addClass('present')
        }else if(currentTime > timeBlock){
            $('.description').addClass('present')
        }else if(currentTime < timeBlock){
            $('.description').addClass('future ')
        }
    })




// $('.saveBtn').click(function(){
//   
//     var taskContent = $(".description").val();
//     $(".description").text(taskContent);
//     localStorage.setItem(taskContent)
// }




