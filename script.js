


 // display current day on page

var currentDay = moment().format("dddd, MMM Do YYYY, h:mma");
var currentTime = moment().hour();
setInterval(currentDay, 1000);
$("#currentDay").html(currentDay);




$(document).ready(function() {
                
           // listen for save button clicks
           $(".saveBtn").on("click", function () {       
               // get nearby values in JQuery
               var text = $(this).siblings(".description").val();
               var time = $(this).parent().attr("id");
                 
               // save in localStorage
               localStorage.setItem(time, text);
           })
       
       
               // loop over time blocks ---> https://api.jquery.com/each/
               // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it"s future, make it green. if it"s past, make it red. Using the past, present, and future classes in css file


               $(".time-block").each(function () {
                var blockTime = parseInt($(this).attr("id").split("hour")[1]);
                console.log(blockTime, currentTime);

                if (blockTime < currentTime) {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                }
                else if (blockTime === currentTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present");
                }
                else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })

                   
       
       
           // load any saved data from localStorage
           $("#hour9 .description").val(localStorage.getItem("hour9"));
           $("#hour10 .description").val(localStorage.getItem("hour10"));
           $("#hour11 .description").val(localStorage.getItem("hour11"));
           $("#hour12 .description").val(localStorage.getItem("hour12"));
           $("#hour13 .description").val(localStorage.getItem("hour13"));
           $("#hour14 .description").val(localStorage.getItem("hour14"));
           $("#hour15 .description").val(localStorage.getItem("hour15"));
           $("#hour16 .description").val(localStorage.getItem("hour16"));
           $("#hour17 .description").val(localStorage.getItem("hour17"));
          
});