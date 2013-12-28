angular.module('starter.services', [])

.factory('Projects', ['$resource', function($resource) {
  // var urlBase = 'todo.daytoday.io';
  var urlBase = 'localhost:8000';
  var RESTfulProjects = $resource('http://' + urlBase + '/v1/project', {},
    {query: {
      method: 'GET',
      isArray: true,
      headers: {'Authorization': 'Basic ' + btoa('rfKkBTS5imPjKbd4:x')}
    }
  });
  var RESTfulProject = $resource('http://' + urlBase + '/v1/project/:id', {id:'@id'},
    { get:
      {
        method: 'GET',
        isArray: false,
        headers: {'Authorization': 'Basic ' + btoa('rfKkBTS5imPjKbd4:x')}
      }
    }
    );

  return {
    all: RESTfulProjects.query,
    get: RESTfulProject.get
  }
}])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
