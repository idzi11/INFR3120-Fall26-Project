var express = require('express');
var router = express.Router();

router.get('/add', function(req, res)
{
    res.render('add', { title: 'Add Book' });
}
);
module.exports = router;
