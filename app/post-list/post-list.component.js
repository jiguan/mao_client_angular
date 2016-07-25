'use strict';

angular.
  module('postList').
  component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['Post',
      function PostListController(Post) {
        this.posts = Post.query();
        this.orderProp = 'date';
      }
    ]
  });
