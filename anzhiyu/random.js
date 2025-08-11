var posts=["posts/d8bc579/","posts/290d6d5f/","posts/f5839648/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };