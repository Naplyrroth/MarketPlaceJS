//"nbObject", in the storage, represents the number of article in our cart. So, if there no nbObject key, we create one at first.
if (localStorage.getItem("nbObject") == null){
    localStorage.setItem("nbObject", 0);
}
if (localStorage.getItem("stockTaken") == null){
    localStorage.setItem("stockTaken", JSON.stringify([0, 0, 0, 0, 0]));
}

let nbObject = localStorage.getItem("nbObject");
let quantityObject = COURSES.stock;
let stockTaken = JSON.parse(localStorage.getItem("stockTaken")); //Tab we'll use to keep track of the stock
console.log (stockTaken)

function addcart (idCourse){
    let deny = false; //Reste deny to false everytime we add an item
    //Test to not buy an other same product we have in the cart
    for (let i=1; i<=nbObject; i++){
        console.log(JSON.parse(localStorage.getItem(`${i}`)));
        if(JSON.parse(localStorage.getItem(`${i}`)).id == COURSES[idCourse-1].id){
            deny = true; //If there is already the same product in the carte, deny the new one.
            console.log("Already in your cart");
            confirm( "Already in your cart"); //display a message
            break;
        }
    }
    //Then, add it
    if (deny == false) {
        alert( "You add " + COURSES[idCourse-1].title + " to your cart")
        nbObject++; 
        
        stockTaken[idCourse-1]++; //Set the stock
        localStorage.setItem("stockTaken", JSON.stringify(stockTaken))
            
        addToCart(nbObject,JSON.stringify(COURSES[idCourse-1])); //Calml the function to add the item
        localStorage.setItem("nbObject", nbObject); //Upgrade the value in the storage
        location.reload() // Refresh the page, else the cart will not apply the current product that we add
    }
}
function addToCart (nbObject,course)
{  
    localStorage.setItem(nbObject,course); //Save the ID of the course that we buy
    console.log("addcart");
}

function removeOne(key){
    //To suppress one object :
    //      1/Remove the object
    //      2/Create an Array with the other object
    //      3/Clear the storage
    //      4/Finally put the object in the array, in the Storage
    //With that the index for each object are now correct
    if ( confirm( "Are you sure to delete ?") ) 
    {
        let toSave = JSON.parse(localStorage.getItem('stockTaken'));
        let i_value = JSON.parse(localStorage.getItem(key));
        remove(key);
        toSave[i_value.id-1] = toSave[i_value.id-1] - 1;
         
        let newTab = []
        for (i = 1; i <= nbObject; i++) 
        {
            let append = localStorage.getItem(i)
            if (append != null){
                newTab.push(append);
            }
        }

        localStorage.clear();

        for (i = 0; i < newTab.length; i++)
        {
            localStorage.setItem(i + 1, newTab[i]);
        }
        console.log(newTab);
        localStorage.setItem("stockTaken",JSON.stringify(toSave));
        nbObject--;
        localStorage.setItem("nbObject", nbObject);//Reload the value in the storage
        location.reload(); // Used to refresh the page, else the cart will not apply the current product that we add
        
    }
}
function remove(key)
{ // delete button function
    localStorage.removeItem(key) // deletes the specified storage object item
    console.log("remove key: "+key)
}
function removeall(key=null){
    // empty cart function
    if (key != null){

        //if we want to save a particular value in the storage
        let toSave = JSON.parse(localStorage.getItem(key));
        console.log(key);
        console.log(toSave);
        localStorage.clear() // empties all stored keys
        localStorage.setItem(key,JSON.stringify(toSave));
        location.reload(); // Used to refresh the page, else the cart will not apply the current product that we add
    }
    else{

        //if we won't then, it's to clear the all cart. We need to save the stock that the user took
        let toSave = JSON.parse(localStorage.getItem('stockTaken'));
        for (let i=1; i<=nbObject; i++){
            //We suppress all the product and -1 the right value in the Array Stock
            let i_value = JSON.parse(localStorage.getItem(i));
            remove(i);
            toSave[i_value.id-1] = toSave[i_value.id-1] - 1;
            console.log(i_value.id);
        }
        //After, we update the array
        localStorage.setItem("stockTaken",JSON.stringify(toSave));
        //And reset the nbObject in our cart
        remove("nbObject");
        location.reload(); // Used to refresh the page, else the cart will not apply the current product that we add
    }    
}