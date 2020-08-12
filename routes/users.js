var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  return res.json(users);
});

router.get('/:id',function(req,res,next){
  const id = parseInt(req.params.id, 10);
  console.log(id);

  if(!id){
    return res.status(400).json({err:'Incorrect id'});
  }

  let user = users.filter(user=>user.id === id)[0]
  if(!user){
    return res.status(404).json({err:'Incorrect user'});
  }

  return res.json(user);
});

//delete
router.delete('/:id',function(req,res,next){
  const id = parseInt(req.params.id, 10);
  if(!id){
    return res.status(400).json({err:'Incorrect id'});
  }

  const userIdx = users.findIndex(user => user.id === id);
  if(!userIdx){
    return res.status(404).json({err:'Incorrect user'});
  }

  users.splice(userIdx, 1);
  res.status(204).send();
});

//post
router.post('/', function(req,res,next){
  const name = req.body.name || '';
  console.log(name);

  if(!name.length){
    return res.status(400).json({err: 'Incorrect name'});
  }
  const id = users.reduce((maxId, user) =>{
    return user.id > maxId ? user.id : maxId;
  }, 0)+1;
  console.log(id);

  const newUser ={
    id:id,
    name: name
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

//404
router.get('/:id', function(req, res, next){
  let user = users.filter(user=>user.id === id)[0];
  if(!user){
    return res.status(404).json({err:'Unknown user'});
  }
});

module.exports = router;

let users = [
  {
    id:1,
    name: 'Hyun'
  },
  {
    id:2,
    name: 'Alice'
  },
  {
    id:3,
    name: 'Kelly'
  }
]
