
$('#submit').on('click', event => {
  var city = $('#locality').val();
  var country = $('#administrative_area_level_1').val();
  localStorage.setItem('City', $('#locality').val());
    console.log(country);
    console.log(city);
   if (!(($('#administrative_area_level_1').val() === "") && ($('#locality').val() === "")))  {
        document.location.href = "search.html";
    } else {
        window.alert("Enter a valid city or country");
    }
    
});
