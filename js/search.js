function search() {
    // Declare variables
    let a, txtValue;
    let count = 0;
    let input = document.getElementById('searchBar');
    let filter = input.value.toUpperCase();
    
    $(document).ready(function(){$('.course__item').fadeOut(300);});
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < $('.course__item').length; i++) {
        a = $('.course__item').eq(i)[0].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText; //To get the complete title of the course

        if (txtValue.toUpperCase().indexOf(filter) > -1) { //The test if the research and the title match
            $(document).ready(function(){$('.course__item').eq(i).fadeIn();}); 
        } else {
            $(document).ready(function(){$('.course__item').eq(i).fadeOut();});
            count ++;
        }
    }
    if (count == $('.course__item').length){
        $(document).ready(function(){$("#no_course").fadeIn().removeClass("hidden");});
    }else {
        $(document).ready(function(){$("#no_course").fadeOut().addClass("hidden");});
    }
}