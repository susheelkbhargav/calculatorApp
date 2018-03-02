
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('Cal', { title: 'Express' });
};