
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = requ.params.userName;
  if(nameToShow == undefined) {
	nameToShow = 'World';
  }

  console.log("name is " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
