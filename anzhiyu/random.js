var posts=["posts/c3b98719.html","posts/63166764.html","posts/e317821c.html","posts/f026602.html","posts/4ccc97e8.html","posts/4275e528.html","posts/ab942f3d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};