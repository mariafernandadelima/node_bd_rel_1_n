const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('rel_1_n','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(()=>{
    console.log('Conexão realizada!')
})
.catch((err)=>{
    console.error('Falha na conexão!',err)
})

module.exports = sequelize