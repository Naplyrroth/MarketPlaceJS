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
    idCourse = localStorage.getItem(`${i}`)
    text = text +' '+ COURSES[idCourse].title + '\n';
}

content.innerHTML = text;

function addcart (idCourse){
    let deny = false;
    for (let i=1; i<=nbObject; i++){
        if(localStorage.getItem(`${i}`) == idCourse-1){
            deny = true;
            console.log("Already in your cart")
            break;
        }
    }
    if (deny == false){
        nbObject++;
        addToCart(nbObject,idCourse-1);
        localStorage.setItem("list", nbObject);
        location.reload()
    }
}
function addToCart (nbObject,course){  
    localStorage.setItem(nbObject,course);
    console.log("addcart");
}