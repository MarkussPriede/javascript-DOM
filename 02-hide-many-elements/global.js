window.addEventListener('load', function(){
    const hide_me = document.getElementsByClassName("hide_me");
    const hideButton = document.getElementById("button");

    hideButton.addEventListener('click', function(){
        Array.from(hide_me).forEach((elements) => {
            elements.style.display = "none";
        })
    });
});