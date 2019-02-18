const Man = require('./models/man');
const History = require('./models/history');
const ManHistory = require('./models/manHistory');

const config = require('./config.json');

module.exports = (Sequelize, login = config.login, password = config.password, db = config.db) =>
{
	const sequelize = new Sequelize(db, login, password, {
		host: config.host,
		dialect: config.dialect,
		dialectOptions: config.dialectOptions,
		logging: false,
		port: config.port
	});

	const man = Man(Sequelize, sequelize);
	const history = History(Sequelize, sequelize);
	const manHistory = ManHistory(Sequelize, sequelize);

	history.belongsToMany(man, {as: 'manHistory', through: 'ManHistory'});
	man.belongsToMany(history, {as: 'manHistory', through: 'ManHistory'});

	return {
		history,
		man,
		manHistory,

		sequelize: sequelize,
		Sequelize: Sequelize
	};
};