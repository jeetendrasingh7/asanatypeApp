var express = require('express');
var router = express.Router();
var Task=require('../controller/task_controller');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({name:"raja Saini"});
});

router.post('/create',Task.createNewTask);

router.get('/getall',Task.getall);

router.post('/editTask',Task.EditTask);

router.post('/deleteTask',Task.deleet);

// router.post('/addPersonal',Task.addPersonal);

// router.post('/addFamilyData',Task.addFamilyData)

// router.post('/addGuardian',Task.addGuardian);

// router.post('/addchild',Task.addChildren);

module.exports = router;
