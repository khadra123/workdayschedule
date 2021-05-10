$(document).ready(function(){
    
    //Display current date at load
    $("#currentDate").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Save Button functionality
    $(".saveBtn").on("click", function(){
        //Take the addition (value) of tasks from the description attribute
        var task = $(this).sibling(".description").val();
        var time =$(this).parent().attr("id");

        //Get the values 
        console.log(this);

        //Set tasks and time to the localStorage
        localStorage.setItem(time, task);

    })

    //Get task from local storage if saved
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    //Function for save button presets based on past present and future
    const timeTasker = () =>{
    
        //get current Hour
        const currentHour = moment().hour();

        //Loop over every hour for each preset
         $(".time-block").each(function(){

             const colorPreset = parseInt($(this).attr("data-hour"));
             console.log(currentHour, colorPreset);

             //Check to see if we've moved past the current time 
             if (colorPreset > currentHour){
                 $(this).removeClass("present past");
                $(this).addClass("future");
            }
            else if(colorPreset === currentHour){
                $(this).removeClass("future past");
                $(this).addClass("present");
            }
            else{
                $(this).removeClass("future present");
                $(this).addClass("past");
            }
    })
  }

  //Run Save Function
  timeTasker();
  
})




