var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([
    {
      id: 1,
      username: "alexkim"
    }, {
      id: 2,
      username: "someotherID"
    }, {
      id: 3,
      username: "someotherID3"
    }, {
      id: 4,
      username: "someotherID4"
    }, {
      id: 5,
      username: "someotherID5"
    }
  ])
});

module.exports = router;
