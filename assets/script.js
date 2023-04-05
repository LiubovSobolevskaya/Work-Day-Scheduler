// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

   /*
  <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
    </div>
    */
  currentHour = dayjs().hour();
  console.log(currentHour)
  var rootEl = $('.container-lg'); 
  console.log(rootEl )
  for (var i=9; i<18; i++){
    console.log(i)
    var newHour = $('<div>');
    newHour.attr('id', `hour-${i}`);
    newHour.addClass('row time-block');
    if (i <currentHour ){
      newHour.addClass('past');
    }
    else if (i === currentHour ){
      newHour.addClass('present');
    }
    else{
      newHour.addClass('future');
    }
    var subHour = $('<div>');
    subHour.addClass('col-2 col-md-1 hour text-center py-3"');
    if (i < 12){
      subHour.text(`${i}AM`);
    }
    else if (i == 12){
      subHour.text(`${i}PM`);
    }
    else if (i > 12){
      subHour.text(`${i-12}PM`);
    }

    newHour.append(subHour);
    var textArea = $('<textarea>');
    textArea.addClass('col-8 col-md-10 description');
    textArea.attr('rows', 3);
    newHour.append(textArea);
    var btn =  $('<button>');
    btn.addClass("btn saveBtn col-2 col-md-1");
    btn.attr("aria-label", "save");
    var ix=  $('<i>');
    ix.addClass("fas fa-save");
    ix.attr("aria-hidden", "true");
    btn.append(ix);
    newHour.append(btn);
    console.log(newHour)
    rootEl.append(newHour);

  }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});