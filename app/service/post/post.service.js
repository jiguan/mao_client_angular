'use strict';

angular.
  module('service.post').
  factory('PostService', ['$http',
    function($http) {
      return {
        query: function(callback){
            return $http.get('http://localhost:8080/api/post');
        },
        getPost: function(postId) {
            return $http.get('http://localhost:8080/api/post/'+postId);
        }
      };
    }
  ]);
