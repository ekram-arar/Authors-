const Author=require('../models/author.model');
module.exports.findAllAuthors=(req, res)=> {
    Author.find()
    .then(allAuthors => res.json({authors:allAuthors}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.createNewAuthor =( req, res) => {    
    Author.create(req.body)
    .then(newAuthor => res.json({author:newAuthor}))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.updateExistingAuthor=(req, res) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators: true })
    .then(updateAuthor => res.json({author: updateAuthor }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.deleteExistingAuthor=(req, res) => {
    Author.deleteOne({_id:req.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}