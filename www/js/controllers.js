angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope) {
  // Main app controller, empty for the example
})

.controller('ProjectTabCtrl', function ($scope, Projects) {
  var getAllProjects = function (extraCallback) {
    // Grab all the projects.
    $scope.projects = Projects.all();
    // Set them once we get them.
    $scope.projects.$promise.then(function (result) {
      $scope.projects = result;
      if (extraCallback !== undefined) {
        extraCallback();
      } 
        
    });
  };
  getAllProjects();
  // Grab all the projects.
  // $scope.projects = Projects.all();
  // Set them once we get them.
  // $scope.projects.$promise.then(function (result) {
    // $scope.projects = result;
  // });
  $scope.refresh = function () {
    var broadcast = function () {
      $scope.$broadcast('scroll.refreshComplete');
    };
    getAllProjects(broadcast);
  }
  // Projects.api.query(function (response) {
    // $scope.api = response;
  // });
})

.controller('ProjectCtrl', function ($scope, $routeParams, Projects) {
  // $scope.project = Projects.get($routeParams.id);
  // $scope.tasks = Projects.getTasks($routeParams.id);
  $scope.project = Projects.get({id:$routeParams.id});
  $scope.project.$promise.then(function (result) {
    $scope.project = result;
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
