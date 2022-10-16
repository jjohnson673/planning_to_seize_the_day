$(document).ready(function(){

        // display current day on page
       
           // var Today = moment().format('LLLL');
           $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
           // console.log(Today);
       
       
           // listen for save button clicks
           $('.saveBtn').on('click', function () {
       
               // get nearby values in JQuery
               var text = $(this).siblings(".description").val();
               var time = $(this).parent().attr("id");
               console.log(this)
       
               // save in localStorage
               localStorage.setItem(time, text);
       
       
               // Show notification that item was saved to localStorage by adding class 'show'
       
               // Timeout to remove 'show' class after 5 seconds
               setTimeout(function () {
                   $('.notification').removeClass('show');
               }, 5000);
           });
       
       function hourUpdater() {
               // get current number of hours (preferably with moment.js)
               var currentTime = moment().hour(); // finding which hour of the day we are currently in
       
               // console.log(currentTime)
               // loop over time blocks
               // loop over time blocks ---> https://api.jquery.com/each/
               // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file
               // check if we've moved past this time
       
               $(".time-block").each(function () {
                   var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
                   console.log(timeBlock, currentTime)
               });
       
           hourUpdater();
       
           // set up interval to check if current time needs to be updated
           var interval = setInterval(hourUpdater, 15000);
       
           // load any saved data from localStorage
           $('#9AM .description').val(localStorage.getItem('9AM'));
           $('#10AM .description').val(localStorage.getItem('10AM'));
           $('#11AM .description').val(localStorage.getItem('11AM'));
           $('#12PM .description').val(localStorage.getItem('12PM'));
           $('#13PM .description').val(localStorage.getItem('13PM'));
           $('#14PM .description').val(localStorage.getItem('14PM'));
           $('#15PM .description').val(localStorage.getItem('15PM'));
           $('#16PM .description').val(localStorage.getItem('16PM'));
           $('#17PM .description').val(localStorage.getItem('17PM'));
          
       };
       

});