'use strict';

angular.
module('postEdit').
component('postEdit', {
    templateUrl: 'post-edit/post-edit.template.html',
    controller: ['$location', '$routeParams', 'PostService', 'FileUploader',
    function PostEditController($location, $routeParams, PostService, FileUploader) {
        let postId = $routeParams.postId;
        var self = this;
        this.post = {};
        if(typeof postId === 'undefined') {
            this.title = 'Create a post';
            this.button = 'Create';
        } else {
            this.title = 'Edit a post';
            this.button = 'Update';
            this.post = PostService.getPost(postId).success(function(data) {
                self.post = data;
            });
        }
        this.update = function() {
            PostService.save(self.post).success(function(data) {
                postId = data.id;
                self.uploader.uploadAll();
            });
        }

        this.uploader = new FileUploader({
            url: 'http://localhost:8080/api/file'
        });

        this.uploader.onBeforeUploadItem = function(item) {
            item.formData.push({"id": postId});
            console.log(item);
        }

        this.uploader.onCompleteAll = function(item) {
            $location.path('/posts');
        }
    }
]
});
