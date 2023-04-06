$(function () {

    // Get a reference to the root element of the page, which has the "container-lg" class
    var rootEl = $('.container-lg'); 

      // Set the text of the  header to today's date using the dayjs library
    $("#currentDay").text(dayjs().format("MMMM DD YYYY"));

    currentHour = dayjs().hour();
    // Loop over the hours from 9am to 5pm
    for (var i=9; i<18; i++){
      
      // Create a new div element for each hour and add the appropriate classes based on the current time
      var newHour = $('<div>');
      newHour.attr('id', `hour-${i}`).addClass('row time-block');
      if (i <currentHour ){
          newHour.removeClass('present', 'future').addClass('past');
        }
        else if (i === currentHour ){
          newHour.removeClass('past', 'future').addClass('present');
        }
        else{
          newHour.removeClass('past', 'present').addClass('future');
        }
      
      // Create a div element to display the hour and add the appropriate text based on the current time
      var hourDiv = $('<div>').addClass('col-2 col-md-1 hour text-center py-3"');
      if (i < 12){
        hourDiv.text(`${i}AM`);
      }
      else if (i === 12){
        hourDiv.text(`${i}PM`);
      }
      else if (i > 12){
        hourDiv.text(`${i-12}PM`);
      }
    
      // Create a textarea element for the user to enter their text, and set its current value to corresponding  text in teh local storage
      var textArea = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', 3);
      savedText = localStorage.getItem(`hour-${i}`);
      if (savedText){
        textArea.text(savedText);
      }

      // Create a button element to save the user's text and add a save icon to it
      var btn =  $('<button>').addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
      var saveIcon = $('<i>').addClass("fas fa-save").attr("aria-hidden", "true");
      btn.append(saveIcon);

      // Add the hour div, textarea, and button to the newHour div, and then add the newHour div to the larger container
      newHour.append(hourDiv, textArea, btn);
      rootEl.append(newHour);
    }
  
    // Set up a click event handler on the root element that listens for clicks on save buttons
    rootEl.on('click', '.saveBtn', function (event) {
      // Get the ID of the parent hour div and the text entered by the user, and save it to local storage
      var theHour = $(this).parent().attr("id");
      var textToSave = $(`#${theHour}`).children().eq(1).val();
      localStorage.setItem(theHour, textToSave);
    })
     

    // update the page every second
    function updateTime(){
      // Get the current hour using dayjs 
      currentHour = dayjs().hour();
      for (var i=9; i<18; i++){
        newHour = $(`#hour-${i}`);
        if (i <currentHour ){
          newHour.removeClass('present', 'future').addClass('past');
        }
        else if (i === currentHour ){
          newHour.removeClass('past', 'future').addClass('present');
        }
        else{
          newHour.removeClass('past', 'present').addClass('future');
        }
      }
    }
    setInterval(updateTime, 1000);
   

});
