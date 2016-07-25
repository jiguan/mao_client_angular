'use strict';

angular.
  module('postDetail').
  component('postDetail', {
    templateUrl: 'post-detail/post-detail.template.html',
    controller: ['$routeParams', 'Post',
      function PostDetailController($routeParams, Post) {
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
