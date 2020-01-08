const express = require('express');
const router = express.Router();
const models = require('../models')
router.get('/', async (req, res, next) => {
    let tasks = await models.Tasks.findAll({});
   
    res.render('index', { data: tasks });
});

router.post('/task/create', async (req, res, next) => {
    try {
        let resp = await models.Tasks.create(req.body);
           res.redirect('/');
    } catch (error) {
       return res.status(400).json(error); 
    }
   
});

router.get('/task/:id', async (req, res, next) => {
    try {
            let resp = await models.Tasks.findOne({
                where:{
                    id:req.params.id
                }
            });
          return res.status(200).json(resp)
    } catch (error) {
       return res.status(400).json(error); 
    }
   
});
router.post('/task/:id', async (req, res, next) => {
    try {
            let resp = await models.Tasks.update(req.body,{
                where:{
                    id:req.params.id
                }
            });
           res.redirect('/');
    } catch (error) {
       return res.status(400).json(error); 
    }
   
});
router.get('/task/:id/delete', async (req, res, next) => {
    try {
            let resp = await models.Tasks.destroy({
                where:{
                    id:req.params.id
                }
            });
          res.redirect('/');
    } catch (error) {
       return res.status(400).json(error); 
    }
   
});



module.exports = router;