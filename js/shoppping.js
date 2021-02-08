function addcart (id){  
if ( confirm( "Are you sure to add this ?") ) {
    localStorage.setItem("course",id)
console.log("addcart")
} else {
    console.log("hello");
}
}
