var Person = require ('../models/person');

module.exports = function(req, res) {
	Person.find({}, function(err,users){
		if (err) throw err;
		res.render('index', {userinfos:users});
	})
};
