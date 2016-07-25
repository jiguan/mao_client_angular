'use strict';

angular.
  module('postEdit').
  component('postEdit', {
    templateUrl: 'post-edit/post-edit.template.html',
    controller: ['$routeParams', 'Post',
      function PostEditController($routeParams, Post) {
          let postId = $routeParams.postId;
          if(typeof postId === 'undefined') {
              this.title = 'Create a post';
              this.button = 'Create';
          } else {
               this.title = 'Edit a post';
               this.button = 'Update'
          }

      }
    ]
  });
