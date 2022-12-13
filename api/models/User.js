const {Sequelize, sequelize} = require('../src/conexao');

const User = sequelize.define('usuarios', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    timestamps: false
}
);


module.exports = User;