'use strict';

angular.
module('postEdit').
component('postEdit', {
  templateUrl: 'post-edit/post-edit.template.html',
  controller: ['$routeParams', 'PostService', 'FileUploader',
  function PostEditController($routeParams, PostService, FileUploader) {
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
      //   Post.save(this.post);
      $location.path('/posts');
    }

    var uploader = this.uploader = new FileUploader({
      url: 'upload.php'
    });

    uploader.onAfterAddingFile = function(fileItem) {
    console.info('onAfterAddingFile', fileItem);

};
  }
]
});
