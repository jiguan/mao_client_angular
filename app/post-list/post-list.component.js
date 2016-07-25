'use strict';

angular.
  module('postList').
  component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['PostService',
      function PostListController(PostService) {
        this.posts = PostService.query();
        this.orderProp = 'date';
      }
    ]
  });
