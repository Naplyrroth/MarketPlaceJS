//There 2 elements with that class Name, one for the search bar and an other for the main part, we just hide the one for the search bar in a first place
//And display it when its necessary
let courseContainer = document.getElementById("courses_list");

//Display of the different Courses that the site put in selling
let textb = "";
for (let i=0; i< COURSES.length; i++){
    textb = textb + `
    <div class="course__item">
    <figure class="course_img">
      <img src="img/courses/${COURSES[i].img}">
    </figure>
    <div class="info__card">
      <h4>${COURSES[i].title}</h4>
      <figure class="mark m_${COURSES[i].mark}">
        <img src="img/rates.png">
      </figure>
      <p>
        <span class="price">${COURSES[i].initial_price} €</span>
        <span class="discount">${COURSES[i].price} €</span>
      </p>
      <p>`;

    if (COURSES[i].stock - stockTaken[i] == 0){
      textb = textb + '<span class="stock"> Out of Stock !</span> </p>';
    }else{
      textb = textb + `Disponible: <span class="stock">${COURSES[i].stock - stockTaken[i]}</span> </p>
      <a onclick= addcart(${COURSES[i].id}) class="add-to-cart" data-id="5"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>`;
    }

    textb = textb+ `
    </div>
    </div>`;
}
//        


//Display of the article in our cart
let textC = '<tr>';
let content = document.getElementById("contentCart");
let price = 0;

for (let i=1; i<= nbObject; i++){
    let courseCart = JSON.parse(localStorage.getItem(`${i}`))
    //Display like a table in the cart:         The Title                      The price                   The quantity
    let courseCartTable = `<th></th> <th>  ${courseCart.title}  </th>  <th> ${courseCart.price}   </th>  <th>  ${1}  </th>  <th><a onclick = "removeOne(${i})" id="btsup" class="bt-supprimer">Supprimer</a></th>`
    textC = textC +' '+ courseCartTable + '</tr>';
    price += courseCart.price*1;
}

textC = textC + `<th></th> <th>Total </th> <th> ${price} €</th>`;
content.innerHTML = textC ;

courseContainer.innerHTML = textb;