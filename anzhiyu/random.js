var posts=["posts/4a17b156/","posts/290d6d5f/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };