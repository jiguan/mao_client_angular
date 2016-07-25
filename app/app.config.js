'use strict';

angular.
  module('mao-client').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/posts', {
          name: 'posts',
          template: '<post-list></post-list>'
        }).
        when('/posts/post/create', {
           name: 'create',
          template: '<post-edit></post-edit>'
        }).
        when('/posts/post/:postId', {
          name: 'post',
          template: '<post-detail></post-detail>'
        }).
        when('/posts/post/:postId/edit', {
            name: 'edit',
          template: '<post-edit></post-edit>'
        }).
        otherwise('/posts');
    }
  ]);
