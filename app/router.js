import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('contact');
  // use function() - this.route('index', { path: '/'});
  this.route('rentals', function() {
    this.route('show', {path: '/:rental_id'});
  });
});
