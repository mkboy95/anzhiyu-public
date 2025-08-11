var posts=["posts/290d6d5f/","posts/d8bc579/","posts/f5839648/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };