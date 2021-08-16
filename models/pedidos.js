const db = require('./db')

const pedidos = db.sequelize.define('solicitacoes', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    pedido: {
        type: db.Sequelize.STRING
    }
});

//pedidos.sync({force: true})

module.exports = pedidos;