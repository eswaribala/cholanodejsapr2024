const mongoose=require('mongoose')
const config=require('config')

url=config.get('mongodb.url')
const db = mongoose.connect(url)
module.exports=db;