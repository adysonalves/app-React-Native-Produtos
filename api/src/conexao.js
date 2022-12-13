const Sequelize = require('sequelize');
const sequelize = new Sequelize('api', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    timezone: '-03:00'
});

sequelize.authenticate().then(success => {
    console.log('Conectado ao BD!')
}).catch(error => {
    console.log(`Ocorreu um erro ao se conectar ao BD: ${error}`)
})

module.exports = {
    Sequelize,
    sequelize
}