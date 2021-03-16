// Your JavaScript goes here.
window.addEventListener('load', function(){
    const name_field = document.getElementById("full_name");
  
    name_field.addEventListener("keyup", function() {
    const greeting_div = document.getElementById("greeting");
    greeting_div.innerHTML = ("Hello there, " + name_field.value + "!");
  });

});