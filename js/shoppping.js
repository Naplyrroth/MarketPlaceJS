//"nbObject", in the storage, represents the number of article in our cart. So, if there no nbObject key, we create one at first.
if (localStorage.getItem("nbObject") == null){
    localStorage.setItem("nbObject", 0);
}
let nbObject = localStorage.getItem("nbObject");

//Display of the article in our cart

let text = '<tr>';
let content = document.getElementById("contentCart");

for (let i=1; i<= nbObject; i++){
    let courseCart = JSON.parse(localStorage.getItem(`${i}`))
    //Display like a table in the cart:         The Title                      The price                   The quantity
    let courseCartTable = `<th></th> <th>  ${courseCart.title}  </th>  <th> ${courseCart.price}   </th>  <th>  ${1}  </th>  <th><a onclick = "removeOne(${i})" id="btsup" class="bt-supprimer">Supprimer</a></th>`
    text = text +' '+ courseCartTable + '</tr>';
}

content.innerHTML = text ;


function addcart (idCourse){
    let deny = false;
    //Test to not buy an other same product we have in the cart
    for (let i=1; i<=nbObject; i++){
        console.log(JSON.parse(localStorage.getItem(`${i}`)));
        if(JSON.parse(localStorage.getItem(`${i}`)).id == COURSES[idCourse-1].id){
            deny = true;
            console.log("Already in your cart");
            break;
        }
    }
    //Then, add it
    if (deny == false){
        if ( confirm( "Are you sure to add " + COURSES[idCourse-1].title + " ?") ) {
            nbObject++;
            addToCart(nbObject,JSON.stringify(COURSES[idCourse-1])); //Save the ID of the course that we buy
            localStorage.setItem("nbObject", nbObject); //Upgrade the value in the storage
            location.reload() // Used to refresh the page, else the cart will not apply the current product that we add
        }
    }
}
function addToCart (nbObject,course){  
    localStorage.setItem(nbObject,course);
    console.log("addcart");
}

function removeOne(key){
    if ( confirm( "Are you sure to delete ?") ) {
    remove(key);
    nbObject--;
    localStorage.setItem("nbObject", nbObject);//Upgrade the value in the storage
    location.reload(); // Used to refresh the page, else the cart will not apply the current product that we add
}
}
function remove(key){ // delete button function
    localStorage.removeItem(key) // deletes the specified storage object item
    console.log("remove key")
}