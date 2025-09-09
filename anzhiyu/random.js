var posts=["posts/39de514/","posts/b85d5ec4/","posts/e360e17e/","posts/201be723/","posts/e3e3ff41/","posts/2e6bf14e/","posts/290d6d5f/","posts/de7f0b92/","posts/10545a94/","posts/e94c5469/","posts/652f3cb6/","posts/bb3c8779/","posts/f5839648/","posts/2b8e9ec3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };