//Display of the different Courses that the site put in selling
let reduc = 1;
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
      </figure>`;
      if (localStorage.getItem("istimeractive") == 'false') {
        textb = textb + `<p> <span class="discount">${COURSES[i].initial_price} €</span> </p>`
        }
         else{
            textb = textb +`<p> <span class="price">${COURSES[i].initial_price} €</span>
             <span class="discount">${COURSES[i].price * reduc} €</span> </p>`
        }
    if (COURSES[i].stock - stockTaken[i] == 0){
      textb = textb + '<p> <span class="stock"> Out of Stock !</span> </p> </div></div>';
    }else{
      textb = textb + `<p> Disponible: <span class="stock">${COURSES[i].stock - stockTaken[i]}</span> </p>
      <a onclick= addcart(${COURSES[i].id}) class="add-to-cart" data-id="5"><i class="fa fa-cart-plus"></i>Ajouter au panier</a> </div></div>`;
    }
}

//Display of the article in our cart
let textC = '<tr>';
let price = 0;
let prodPrice = 0;

for (let i=1; i<= nbObject; i++){
    let courseCart = JSON.parse(localStorage.getItem(`${i}`))
    if (localStorage.getItem("istimeractive") == 'true'){
      prodPrice = courseCart.price;
    }else{
      prodPrice = courseCart.initial_price;
    }

    //Display like a table in the cart:         The Title                  The price          The quantity
    let courseCartTable = `<th></th> <th>  ${courseCart.title}  </th><th> ${prodPrice} </th><th>  ${1}  </th>  <th><a onclick = "removeOne(${i})" id="btsup" class="bt-supprimer">-x-</a></th>`
    textC = textC +' '+ courseCartTable + '</tr> <tr>';
    price += prodPrice*1;
}

textC = textC + `<th></th> <th>Total </th> <th> ${price} €</th>`;
console.log(localStorage.getItem("istimeractive"));
$('#contentCart').html(textC);
$('#courses_list').html(textb);