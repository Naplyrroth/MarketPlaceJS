/*function addcart (id){  
if ( confirm( "Are you sure to add this ?") ) {
    localStorage.setItem("course",id)
console.log("addcart")
} else {
    console.log("hello");
}
}*/

if (localStorage.getItem("list") == null){
    localStorage.setItem("list", 0);
}
let nbObject = localStorage.getItem("list");

let text = '';
let content = document.getElementById("contentCart");
for (let i=1; i<= nbObject; i++){
    text = text +' '+localStorage.getItem(`${i}`);
}

content.innerHTML = text;

function addcart (idCourse){
    let deny = false;
    for (let i=1; i<=nbObject; i++){
        if(localStorage.getItem(`${i}`) == idCourse){
            deny = true;
            console.log("Already in your cart")
            break;
        }
    }
    if (deny == false){
        nbObject++;
        addToCart(nbObject,idCourse);
        localStorage.setItem("list", nbObject);
        location.reload()
    }
}
function addToCart (nbObject,idCourse){  
    localStorage.setItem(nbObject,idCourse);
    console.log("addcart");
}