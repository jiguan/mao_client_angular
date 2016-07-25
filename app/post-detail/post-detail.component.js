'use strict';

angular.
module('postDetail').
component('postDetail', {
    templateUrl: 'post-detail/post-detail.template.html',
    controller: ['$routeParams', 'Post',
    // controller: ['$http', '$routeParams',
    //  function PhoneDetailController($http, $routeParams) {
    function PostDetailController($routeParams, Post) {
        this.post = {"id" : $routeParams.postId, "title" : "Title", "detail" : "detail"};
    }
]
});
