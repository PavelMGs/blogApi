const { Router } = require('express');
const Post = require('../models/post');
const express = require('express');

const router = Router();

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
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

//Создание поста 
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
router.delete('/:id', (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router;