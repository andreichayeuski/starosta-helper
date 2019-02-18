const Sequelize = require("sequelize");

const db = require('./db/db')(Sequelize);
const marking = require('./marking-tool');

(async () =>
{
	db.sequelize.sync();

	var names = await db.man.findAll({});
	const readline = require('readline-sync');
	var num = [];
	var count = readline.question("How many peoples aren't at place?");
	names.forEach((item) =>
	{
		console.log(item.dataValues);
	});
	for(var i = 0; i < count; i++)
	{
		var answer = readline.question("Write number?");
		num.push(answer);
	}
	var dictionary = marking(num);
	var numbersHistories = addToDB(db, dictionary);
	console.log("done!")
}) ();

function addToDB(db, dictionary) {
	var numbersHistories = [];

	dictionary.forEach((item) => {
		if (item.isMarking) {
			var date = new Date();
			date = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
			db.history.create({Date: date, Description: "test"})
				.then((result) => {
					var history = result;
					db.manHistory.create({HistoryID: history.ID, ManId: parseInt(item.name)})
						.then((result) => {
							console.log(parseInt(item.name));
							console.log("added to history");
						})
				})
		}
	});
	return numbersHistories;
}