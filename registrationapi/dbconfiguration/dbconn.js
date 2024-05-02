const mongoose=require('mongoose')
const config=require('config')
const db={}
db.url=config.get('mongodb.url')
db.user=require('../models/user')(mongoose);
db.role=require('../models/role')(mongoose);
db.conn=mongoose.createConnection(db.url).asPromise();
module.exports=db;
