module.exports = (Sequelize, sequelize) => {
	return sequelize.define('ManHistory', {
		ManId: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		HistoryID: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	});
};