const {Sequelize, sequelize} = require('../src/conexao');
const User = require('./User');

const Produtos = sequelize.define('produtos', {
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
    capacidade:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.DECIMAL(8,2),
        allowNull: false
    }
},
{
    timestamps: false
}
);

User.hasMany(Produtos, {foreignKey: 'id_user'});


module.exports = Produtos;