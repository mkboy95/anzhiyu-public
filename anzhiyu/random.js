var posts=["posts/b85d5ec4/","posts/2e6bf14e/","posts/290d6d5f/","posts/e94c5469/","posts/652f3cb6/","posts/bb3c8779/","posts/f5839648/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };