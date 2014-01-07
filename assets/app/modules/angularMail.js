var AngularMailServices = angular.module('AngularMail', []);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: ListController,
      templateUrl: '/templates/list.html'
    });
}