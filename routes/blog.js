const { Router } = require('express');
const Post = require('../models/post');
const Comments = require('../models/comments');

const router = Router();

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Allow', 'GET, POST, DELETE')
    next();
});


//Получение списка постов 
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.post('/', async (req, res) => {

    try {
        console.log(req.body)
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
        })
        res.status(201).json({ post })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server error'
        })
    }
})


//Изменение поста
router.put('/:id', (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

//Удаление поста
router.delete('/:id/:password', async (req, res) => {
    try {
        console.log(req.params, 'asdasdasd')
        if (req.params.password === "delete_post") {
            await Post.destroy({
                where: {
                    id: req.params.id
                }
            })
            await Comments.destroy({
                where: {
                    postId: req.params.id
                }
            })
            res.status(200).json({
                message: 'Post is successfully deleted'
            })
        } else {
            res.status(403).send({
                message: 'Incorrect password'
            })
            }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router;