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
        },
        save: function(post) {
            console.log(post.id);
            if(typeof post.id==='undefined') {
                return $http.post('http://localhost:8080/api/post', post);
            } else {
                return $http.put('http://localhost:8080/api/post/'+post.id, post);
            }
        }
      };
    }
  ]);
