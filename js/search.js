function search() {
    // Declare variables
    let a, txtValue;
    let count =0;
    let input = document.getElementById('searchBar');
    let filter = input.value.toUpperCase();

    let listCourses = document.getElementById("courses");
    let courseItem = listCourses.getElementsByClassName('course__item');
  
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < courseItem.length; i++) {

        a = courseItem[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText; //To get the complete title of the course

        if (txtValue.toUpperCase().indexOf(filter) <= -1) { //The test if the research and the title match
            courseItem[i].classList.add("hidden");
            count ++;
        } else {
            courseItem[i].classList.remove("hidden");
        }
    }
    if (count == courseItem.length){
        document.getElementById("no_course").classList.remove('hidden');
    }else {
        document.getElementById("no_course").classList.add('hidden');
    }
}