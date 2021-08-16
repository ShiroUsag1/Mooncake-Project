const Sequelize = require("sequelize");

const sequelize = new Sequelize('mooncake', 'root', 'Otakukaw@ii159', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}