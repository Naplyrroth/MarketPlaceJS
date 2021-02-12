//go to the next text area
function suivant(enCours, suivant, limite) {
    if (enCours.value.length >= limite){
        document.code[suivant].focus();
    }
}

//hide div2 = credit cart information
$(document).ready(function(){
    $("#div2").addClass("hidden");});

//delte cart with and reveal credit cart information 
$(document).ready(function(){
    $("#empty-cart").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeIn(2000).removeClass("hidden");
    })
    /*$("#data").click(function(){
        redirection();
    })*/
});

//promotion
function redirection(){
    if (price >= 100){
        console.log("start the timer")
        localStorage.setItem("istimeractive", true);
    }
    removeall('stockTaken');
}