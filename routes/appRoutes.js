var express = require('express');
var router = express.Router();

router.post('/create', (req,res,next) => {
    res.status(200).json({msg: 'Post request is working'});
});
router.get('/read', (req,res,next) => {
    res.status(200).json({msg: 'get request is working'});
});
router.put('/update', (req,res,next) => {
    res.status(200).json({msg: 'Put request is working'});
});
router.delete('/delete/:id', (req,res,next) => {
    res.status(200).json({msg: 'delete request is working'});
});


module.exports = router;
