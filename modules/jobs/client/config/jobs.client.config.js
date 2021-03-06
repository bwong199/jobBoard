'use strict';

// Configuring the Jobs module
angular.module('jobs').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Jobs',
      state: 'jobs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'List Jobs',
      state: 'jobs.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'Create Jobs',
      state: 'jobs.create',
      roles: ['user']
    });
  }
]);
