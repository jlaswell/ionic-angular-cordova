angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {
  // Main app controller, empty for the example
})

.controller('ProjectTabCtrl', function ($scope, Projects) {
  // $scope.projects = Projects.all();
  $scope.projects = Projects.api.all();
  $scope.projects.$promise.then(function (result) {
    $scope.projects = result;
  });

  $scope.refresh = function () {
    $scope.projects = Projects.api.all();
    $scope.projects.$promise.then(function (result) {
      $scope.projects = result;
      // Trigger refresh complete on the pull to refresh action
      $scope.$broadcast('scroll.refreshComplete');
    });
  }
  // Projects.api.query(function (response) {
    // $scope.api = response;
  // });
})

.controller('ProjectCtrl', function ($scope, $routeParams, Projects) {
  // $scope.project = Projects.get($routeParams.id);
  // $scope.tasks = Projects.getTasks($routeParams.id);
  $scope.project = Projects.api.get({id:$routeParams.id});
  $scope.project.$promise.then(function (result) {
    $scope.project = result[ 0 ];
  });
})

// A simple controller that fetches a list of data
.controller('PetsTabCtrl', function ($scope, Pets) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = Pets.all();

  $scope.$on('tab.shown', function () {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function () {
    // Might recycle content here
  });
})

// A simple controller that shows a tapped item's data
.controller('PetCtrl', function ($scope, $routeParams, Pets) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = Pets.get($routeParams.petId);
});
