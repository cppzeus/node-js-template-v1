var express = require('express');
var router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var koreaairport = require('../models/info_koreaairports');

// Post - Create
/*
router.post('/', function(req, res) {
    User.create( {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        },
        function(err, user) {
            if (err) return res.status(500).send("User 생성 실패.");
            res.status(200).send(user);
        });
});
*/

// Get - Read
// Get Full Data
router.get('/api/koreaairports', function(req, res) {
    koreaairport.find({}, function(err, koreaairports) {
        if (err) return res.status(500).send("User 전체 조회 실패.");
        res.status(200).send(koreaairports);
    });
});

// Get korea airport info search result
router.get('/api/koreaairports/:name', function(req, res) {
    console.log(req.params.name);
    koreaairport.find({ airport_name: req.params.name }, function(err, user) {
        if (err) return res.status(500).send("koreaairport 조회 실패");
        if (!user) return res.status(404).send("koreaairport 없음.");
        res.status(200).send(user);
    });
});

/*
// User 삭제
router.delete('/api/koreaairports/:name', function (req, res) {
    User.findByIdAndRemove(req.params.name, function (err, user) {
        if (err) return res.status(500).send("User 삭제 실패");
        res.status(200).send("User "+ user.name +" 삭제됨.");
    });
});
// User 수정
router.put('/:id', function (req, res) {    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("User 수정 실패.");
        res.status(200).send(user);
    });
});
*/

module.exports = router;