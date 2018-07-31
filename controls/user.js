let func = require('../sql/func');
let mysql = require('mysql');

module.exports = {

	fetchAll(req, res) {
		let id =req.body.id;

		let arr = [id];
		let sql ='select * from user WHERE id = ?';

		func.connPool(sql, arr, (err, rows) => {
			res.json({
				code: 200,
				msg: 'ok',
				resultList: rows
			});

		});
	},
};
