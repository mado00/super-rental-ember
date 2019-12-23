import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click,
  currentURL,
  visit,
  fillIn,
  triggerKeyEvent
} from '@ember/test-helpers'

let StubMapsService = Service.extend({
  getMapElement() {
    return Promise.resolve(document.createElement('div'));
  }
});

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:map-element', StubMapsService);
  });

  test('should show details for a specific rental', async function(assert) {
    await visit('/rentals');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes('Grand Old Mansion'), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });




// // Integreation test!!!
// module('Integration | Component | rental listing', function (hooks) {
//   setupApplicationTest(hooks);
//   setpuMirage(hooks);

//   hooks.beforeEach(function () {
//     this.rental = EmberObject.create({
//       image: 'fake.png',
//       title: 'test-title',
//       owner: 'test-owner',
//       type: 'test-type',
//       city: 'test-city',
//       bedrooms: 3
//     });
//   });

//   test('should display rental details', async function(assert) {
//     await render(hbs`<RentalListing @rental={{this.rental}} />`);
//     assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
//     assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner: test-owner', 'Owner: test-owner');
//   });

//   test('should toggle wide class on click', async function(assert) {
//     await render(hbs`<RentalListing @rental={{this.rental}} />`);
//     assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
//     await click('.image');
//     assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
//     await click('.image');
//     assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
//   });

//   test('should filter the list of rentals by city', async function(assert) {
//     await visit('/');
//     await fillIn('.list-filter input', 'seattle');
//     await triggerKeyEvent('.list-filter input', 'keyup', 69);
//     assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
//     assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with location Seattle');
//   });  


// Unit test!!!
  // module('Acceptance | list rentals', function (hooks) {
  //   setupApplicationTest(hooks);

  // test('visiting /list-rentals', async function (assert) {
  //   await visit('/list-rentals');
  // assert.equal(currentURL(), '/list-rentals');
// });

  // test('should show rentals as the home page', async function (assert) {
  //   // loads a given URL
  //   await visit('/');
  //   // returns the URL of the page we're currently on
  //   assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  // });

  // test('should link to infomation about the company', async function (assert) {
  //   await visit('/');
  //   // pretends to be a user clicking on a specific part of the screen
  //   await click(".menu-about");
  //   assert.equal(currentURL(), '/about', 'should navigate to about');
  // });

  // test('should link to contact information', async function (assert) {
  //   await visit('/');
  //   await click(".menu-contact");
  //   assert.equal(currentURL(), '/contact', 'should navigate to contact');
  // });

  // test('should list available rentals', async function (assert) {
  //   await visit('/');
  //   assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  // });

});
