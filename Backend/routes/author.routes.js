const AuthorController = require('../controllers/author.controller');

module.exports =app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.post('/api/author/create', AuthorController.createNewAuthor);
    app.delete('/api/author/:id', AuthorController.deleteExistingAuthor);
}