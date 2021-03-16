// Your JavaScript goes here.
window.addEventListener('load', function(){
    const toggleContent = document.getElementsByClassName("toggle_me");
    const toggleClick = document.getElementById("button");

    toggleClick.addEventListener('click', function(){
        Array.from(toggleContent).forEach((v) => {
            if(v.style.display == 'none') {
                v.style.display = 'flex'
            } else {
                v.style.display = 'none'
            }
        });
    });
});