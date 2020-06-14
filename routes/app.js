const router = require('express').Router();
const meals = require('../API/meals');

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/meal', (req, res) => {
	meals((err, data) => {
			if (err) {
					res.status(400).send({
							err: err,
					});
			}
			res.send({
					recipe: data,
			});
	});
});

module.exports = router;