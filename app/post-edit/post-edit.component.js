'use strict';

angular.
  module('postEdit').
  component('postEdit', {
    templateUrl: 'post-edit/post-edit.template.html',
    controller: ['$route', '$location', '$routeParams', 'PostService',
      function PostEditController($route, $location, $routeParams, PostService) {
          let postId = $routeParams.postId;
          if(typeof postId === 'undefined') {
              this.title = 'Create a post';
              this.button = 'Create';
          } else {
               this.title = 'Edit a post';
               this.post = Post.getPost(postId);
               this.button = 'Update';
          }
          this.update = function() {
            //   Post.save(this.p   ost);
              $location.path('/posts');
          }

      }
    ]
  });
