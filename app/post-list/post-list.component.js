'use strict';

angular.
module('postList').
component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['PostService',
    function PostListController(PostService) {
        var self = this;
        this.baseUrl = "http://localhost:8080/api/file/"
        PostService.query().success(function(data) {
            self.posts = data;
        });
        this.orderProp = 'date';
    }
]
});
