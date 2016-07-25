'use strict';

angular.
module('postList').
component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['PostService',
    function PostListController(PostService) {
        var self = this;
        PostService.query().success(function(data) {
            self.posts = data;
        });
        this.orderProp = 'date';
    }
]
});
