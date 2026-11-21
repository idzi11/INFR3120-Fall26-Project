
var express = require('express');
var router = express.Router();
var books = [];

router.get('/add', function(req, res)
{
    res.render('add', { title: 'Add Book' });
});
router.post('/', function(req, res)
{
    var book =
    {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        status: req.body.status
    };

    books.push(book);

    res.redirect('/books');
});
router.post('/delete/:index', function(req, res)
{
    var index = req.params.index;
    books.splice(index, 1);
    res.redirect('/books');
});
router.get('/', function(req, res)
{
    res.render('books', {
        title: 'My Collection',
        books: books
    });
});
module.exports = router;
