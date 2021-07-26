import FavoriteRestoIdb from '../../data/favouriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    <div class="content">
    <h1 class="headline"><center>Resto Favoritmu !!</center></h1>
      <div id="restaurants" class="restaurants">

    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      // eslint-disable-next-line no-undef
      restaurantsContainer.innerHTML += `
      <p class="resto-item__not_found" tabindex="0">
        <b>Anda belum memilih resto favorite</b>
      </p>
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favourite;
