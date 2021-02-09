/*function addcart (id){  
if ( confirm( "Are you sure to add this ?") ) {
    localStorage.setItem("course",id)
console.log("addcart")
} else {
    console.log("hello");
}
}*/
//"nbObject", in the storage, represents the number of article in our cart. So, if there no nbObject key, we create one at first.
if (localStorage.getItem("nbObject") == null){
    localStorage.setItem("nbObject", 0);
}
let nbObject = localStorage.getItem("nbObject");

//Display of the article in our cart
let text = '';
let content = document.getElementById("contentCart");
for (let i=1; i<= nbObject; i++){
    idCourse = localStorage.getItem(`${i}`)
    text = text +' '+ COURSES[idCourse].title + '<br>';
}
content.innerHTML = text;

function addcart (idCourse){
    let deny = false;
    //Test to not buy an other same product we have in the cart
    for (let i=1; i<=nbObject; i++){
        if(localStorage.getItem(`${i}`) == idCourse-1){
            deny = true;
            console.log("Already in your cart");
            break;
        }
    }
    //Then, add it
    if (deny == false){
        if ( confirm( "Are you sure to add this ?") ) {
            nbObject++;
            addToCart(nbObject,idCourse-1); //Save the ID of the course that we buy
            localStorage.setItem("nbObject", nbObject); //Upgrade the value in the storage
            location.reload() // Used to refresh the page, else the cart will not apply the current product that we add
        }else{
            console.log("hello");
        }
    }
}

function addToCart (nbObject,course){  
    localStorage.setItem(nbObject,course);
    console.log("addcart");
}