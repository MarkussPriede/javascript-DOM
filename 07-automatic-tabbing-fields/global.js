// Your JavaScript goes here.
window.addEventListener('load', function(){
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    first.addEventListener('keyup', function(){
        typed = first.value.length;
        max = parseInt(first.getAttribute("maxlength"));

        if (typed === max){
            second.focus();
        }
    });

    second.addEventListener('keyup', function(){
        typed = second.value.length;
        max = parseInt(second.getAttribute("maxlength"));

        if (typed === max){
            third.focus();
        }
    });
    if (typed_characters === max_characters) {
        end_numbers.focus();
    }
});