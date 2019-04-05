
$('#submit').on('click', event => {
  var address = $('#autocomplete').val();
    
    address = address.replace(/,/g,"");
    var addressArray = address.split(" ");
    console.log(addressArray);
    localStorage.setItem('City', addressArray[addressArray.length - 3]);
    localStorage.setItem('Height', $('#make_height').val());
    localStorage.setItem('Length', $('#make_length').val());
    localStorage.setItem('Width', $('#make_width').val());
    localStorage.setItem('Address', address);
   if (!(($('#administrative_area_level_1').val() === "") && ($('#locality').val() === "")))  {
        document.location.href = "search.html";
    } else {
        window.alert("Enter a valid city or country");
    }
    
});



