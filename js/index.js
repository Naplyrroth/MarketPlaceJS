let courseContainer = document.getElementById("courses");
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
        <span class="price">${COURSES[i].initial_price}</span>
        <span class="discount">${COURSES[i].price}</span>
      </p>
      <p>
        Disponible: <span class="stock">${COURSES[i].stock}</span>
      </p>
      <a onclick= addcart(${COURSES[i].id}) class="add-to-cart" data-id="5"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
    </div>
  </div>
    `
}

courseContainer.innerHTML = textb;
