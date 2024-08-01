const {fabricante, produto} = require('./model/Associacao')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('Tabelas criadas e sincronizada com o banco de dados')
    }catch(err){
        console.error('Erro de sincronização com o banco de dados!')
    }finally{
        conn.close()
        console.log('Conexão finalizada!')
    }
}
syncDataBase()
