var freelancer = angular.module('freelancer', ['ui.router']);

freelancer.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    views: {
      'header': { templateUrl: 'partials/header.html' },
      'body':   {
        templateUrl: 'partials/home.html',
        controller: 'BannerCtrl'
      },
      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      },
      'footer': { templateUrl: 'partials/footer.html'}
    }
  });

  // Other states here
});
