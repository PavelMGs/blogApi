const { Router } = require('express');
const Comments = require('../models/comments');

const router = Router();

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

router.get('/:postId', async (req, res) => {
    try {
        const comments = await Comments.findAll({
            where: {
                postId: req.params.postId
            }
        })
        res.status(200).send(comments)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: req
        })
    }
})

router.post('/', async (req, res) => {

    try {
        const post = await Comments.create({
            id: req.body.id,
            body: req.body.body,
            postId: req.body.postId
        })
        res.status(201).json(post)
    } catch (err) {
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router;