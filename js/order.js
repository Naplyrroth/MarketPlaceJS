function suivant(enCours, suivant, limite) {
    if (enCours.value.length >= limite){
        document.code[suivant].focus();
    }
}

function redirection(){
    window.alert("Thanks For Your Order");
    if (price >= 100){
        console.log("start the timer")
        localStorage.setItem("istimeractive", true);
    }
    removeall('stockTaken');
}