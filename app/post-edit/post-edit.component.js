'use strict';

angular.
  module('postEdit').
  component('postEdit', {
    templateUrl: 'post-edit/post-edit.template.html',
    controller: ['$routeParams', 'Post',
      function PostEditController($routeParams, Post) {
        var self = this;
        self.post = Post.get({postId: $routeParams.postId}, function(post) {
          self.setImage(post.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
