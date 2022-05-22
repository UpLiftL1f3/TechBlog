const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      order: [['id', 'DESC']],
      include: [{ model: User }],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('all-posts', {
      layout: 'main',
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          include: { model: User },
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render('single-post', {
      layout: 'main',
      post,
    });
  } catch (err) {
    console.log(err);
    res.render(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
