/** 

Version 3.0.1

This javascript file adds an event handler on the address button, and outputs an error if the information within the form is invalid. 

**/



$('#submit').on('click', event => {
  var address = $('#autocomplete').val();
    address = address.replace(/,/g,"");
    var addressArray = address.split(" ");

    localStorage.setItem('Length', $('#make_length').val());
    localStorage.setItem("Width", $('#make_width').val());
    localStorage.setItem('Height', $('#make_height').val());

    localStorage.setItem('City', addressArray[addressArray.length - 3]);
    localStorage.setItem('Address', address);

    var addressIsEmpty = $('#administrative_area_level_1').val() === "";
    var cityIsEmpty = $('#locality').val() === "";
    var loggedIn = localStorage.getItem('uid') != "";
    var lengthIsInvalid = $('#make_length').val() === "" || $('#make_length').val() < 0;
    var widthIsInvalid  = $('#make_width').val() === "" || $('#make_width').val() < 0;
    var heightIsInvalid  = $('#make_height').val() === "" || $('#make_height').val() < 0;

    if (!addressIsEmpty && !cityIsEmpty && !lengthIsInvalid && !heightIsInvalid  && !widthIsInvalid)  {
         document.location.href = "search.html";
      } else {
        window.alert("Enter valid data");
      }
    
});



