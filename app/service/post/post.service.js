'use strict';

angular.
  module('service.post').
  factory('Post', ['$resource',
    function($resource) {
      return $resource('posts/:postId.json', {}, {
        query: {
          method: 'GET',
          //present a default value
          params: {postId: 'posts'},
          isArray: true
        }
      });
    }
  ]);
