const mongoose=require('mongoose')
const config=require('config')

url=config.get('mongodb.url')
mongoose.connect(url)

const conn=mongoose.connection;

//singleton
conn.once('open',()=>{
    console.log('Mongo connection created')
})

conn.on('error',()=>{
    console.log('Mongodb connection error')
})

module.exports=conn;