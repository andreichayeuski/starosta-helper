module.exports = (Sequelize, sequelize) => {
	return sequelize.define('Man', {
		Id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		Name: {
			type: Sequelize.STRING,
			allowNull: false
		}
	});
};