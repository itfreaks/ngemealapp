import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMG_MEDIUM + restaurant.pictureId}" srcset="${CONFIG.BASE_IMG_SMALL + restaurant.pictureId} 550w, ${CONFIG.BASE_IMG_MEDIUM + restaurant.pictureId} 800w" sizes="(max-width: 700px) 700px, 800px" alt="${restaurant.name}" />
  <div class="resto__info">
  <h3>Informasi Resto :</h3><br>
    <h4>Nama Resto</h4>
    <p>${restaurant.name}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="list-food">
    <h3>Menu Makanan</h3>
    <ul>${restaurant.menus.foods
    .map(
      (foods) => `
          <li>${foods.name}</li>
        `,
    ).join('')
}</ul>
  </div> 
  <div class="list-food">
    <h3>Menu Minuman</h3>
    <ul>${restaurant.menus.drinks
    .map(
      (drink) => `
          <li>${drink.name}</li>
        `,
    ).join('')
}</ul>
</div>
<div>
  <h3 class="review_title">Review Pengunjung</h3>
  ${restaurant.customerReviews
    .map(
      (customerReviews) => `
      <div class="cust-review">
          <p class="comment"><span>${customerReviews.name}</span> ${customerReviews.date}</p>
          <p class="comment">${customerReviews.review}</p>
          </div>
        `,
    ).join('')
}
</div>
`;

const createRestoItemTemplate = (restaurant) => `
    <div class="resto-item">
      <div class="resto-item__header">
      <img class="lazyload" data-src="${CONFIG.BASE_IMG_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
          <div class="resto-item__header__rating">
              <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
          </div>
      </div>
      <div class="resto-item__content">
          <h3 class="resto-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
          <p>${restaurant.description.slice(0, 200)}...</p>
      </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="Favorite Resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="Hapus resto dari Favorite" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
