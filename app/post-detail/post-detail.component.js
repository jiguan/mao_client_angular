'use strict';

angular.
module('postDetail').
component('postDetail', {
    templateUrl: 'post-detail/post-detail.template.html',
    controller: ['$routeParams', 'PostService',
    function PostDetailController($routeParams, PostService) {
        var self = this;
        this.baseUrl = "http://localhost:8080/api/file/";
        this.update = {};

        PostService.getPost($routeParams.postId).success(
            function(data) {
                self.post = data;
                self.update.update();
            });
        }
    ]
});
