/* eslint-disable no-undef */
const assert = require('assert');

Feature('Menyukai Resto');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('Check apakah daftar favorite kosong', ({ I }) => {
  I.dontSeeElement('.resto-item');
});

Scenario('Menyukai salah satu resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-item');
  I.wait(1);
  const firstResto = locate('.resto-item__title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.wait(1);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');
  I.amOnPage('/#/favourite');
  I.seeElement('.resto-item');
  const likedRestoName = await I.grabTextFrom('.resto-item__title a');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('Batal menyukai resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-item');
  I.click(locate('.resto-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.resto-item__title a');
  const firstLikedRestaurant = locate('.resto-item__title a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  I.seeElement('.resto__title');
  const likedRestaurantTitle = await I.grabTextFrom('.resto__title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="Hapus resto dari Favorite"]');
  I.click('[aria-label="Hapus resto dari Favorite"]');

  I.amOnPage('/#/favourite');
  I.dontSeeElement('.resto-item');
});
