const router = require('express').Router();
const sequelize = require('../..config/connection');
const { Post, User, Comment } = require('../..models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: ['id', 'title', 'post_text']
    })
})