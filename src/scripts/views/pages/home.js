import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
        <h1 class="headline"><center>Jelajahi Resto</center></h1>
        <div id="restaurant" class="restaurant"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await RestoDbSource.home();
    const restaurantContainer = document.querySelector('#restaurant');
    // eslint-disable-next-line no-shadow
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
