var AngularMailServices = angular.module('AngularMail', []);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: ListController,
      templateUrl: '/templates/list.html'
    })
    .when('/view/:id', {
      controller: ViewController,
      templateUrl: '/templates/view.html'
    })
    .otherwise({ redirectTo: '/' });
}

AngularMailServices.config(routeConfig);

emails = [
  {
    id: 0,
    sender: 'sudowilliam@gmail.com',
    subject: 'Testing email app',
    date: 'Jan 7, 2014 3:34',
    recipients: ['email@email.com'],
    message: 'Hey, how you doing!'
  },
  {
    id: 1,
    sender: 'lea@gmail.com',
    subject: 'Hello email app',
    date: 'Jan 7, 2014 3:36',
    recipients: ['email@domain.com'],
    message: 'Heeeeeyeyey, how you doing!'
  },
  {
    id: 2,
    sender: 'vader@gmail.com',
    subject: 'Father',
    date: 'Jan 7, 2014 3:34',
    recipients: ['email@email.com', 'email2@email2.com'],
    message: 'Luke, Im your father!'
  }
];

function ListController($scope, $log) {
  $scope.emails = emails;
  $log.info($scope.emails);
}

function ViewController($scope, $routeParams) {
  $scope.email = emails[$routeParams.id];
}
