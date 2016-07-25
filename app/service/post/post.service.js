'use strict';

angular.
  module('service.post').
  factory('Post', ['$resource',
    function($resource) {
      return $resource('posts', {}, {
        query: {
          url: "posts/posts.json",
          method: 'GET',
          isArray: true
      }, getPost: {
          method: 'GET',
          url: "posts/abc.json"
      }
      });
    }
  ]);
