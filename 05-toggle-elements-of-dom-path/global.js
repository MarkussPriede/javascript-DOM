// Your JavaScript goes here.
window.addEventListener('load', function(){
    const toggleable_content = document.querySelectorAll('.second_five li');
    const toggle_button = document.getElementById("toggle_button");

    toggle_button.addEventListener('click', function(){
        toggleable_content.forEach((elements) => {
            if(elements.style.display == 'list-item') {
                elements.style.display = 'none'
            } else {
                elements.style.display = 'list-item'
            }
        });
    });
});