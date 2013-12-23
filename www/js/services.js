angular.module('starter.services', [])

.factory('Projects', function() {
  var projects = [
    {
      id: 0,
      title: 'Build a Deck',
      description: 'We\'re building that deck we always said we wanted!',
      due_date: 'March 13th',
      tasks: [
        { id: 0, name: 'Research lumber types' },
        { id: 1, name: 'Stake out the yard' }
      ]
  },
    { id: 1, title: 'Repaint the house', due_date: 'June 5th' },
    { id: 2, title: 'Plan vacation!', due_date: 'March 25th' }
  ];

  return {
    all: function () {
      return projects;
    },
    get: function (id) {
      return projects[id];
    },
    getTasks: function (id) {
      return projects[id].tasks;
    }
  }
})

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
