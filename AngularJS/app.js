var app = angular.module('plunker', ['ngResource']).
factory('Hello', function($resource) {
  return $resource('http://magneval.github.io/AngularJS/user/:userId/card/:cardId.json', 
    {alt:'json',
    callback:'JSON_CALLBACK',
    userId: 123,
    cardId: '@id'
  },  {get:{method:'JSONP', params:{visibility:'@self'}},
    charge: {
      method: 'POST',
      params: {
        charge: true
      }
    }
  });
});
app.config(['$sceDelegateProvider',
  function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://magneval.github.io/AngularJS/**', 'http://magneval.github.com/AngularJS/**']);

  }
])

app.controller('MainCtrl', function($scope, Hello, $http) {
  //$http.defaults.useXDomain = true;
  $scope.hello = Hello.get({
  });

  $scope.name = 'SII';
});
