'use strict';

angular.
  module('mao-client').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/posts', {
          template: '<post-list></post-list>'
        }).
        when('/posts/post/create', {
          template: '<post-edit></post-edit>'
        }).
        when('/posts/post/:postId', {
          template: '<post-detail></post-detail>'
        }).
        when('/posts/post/:postId/edit', {
          template: '<post-edit></post-edit>'
        }).
        otherwise('/posts');
    }
  ]);
