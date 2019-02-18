module.exports = (sequelize, connection) =>{
	return connection.define('History', {
		ID:
			{
				type: sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
		Date:
			{
				type: sequelize.DATE,
				allowNull: false,
			},
		Description:
			{
				type: sequelize.TEXT,
				allowNull: false
			}
	});
};