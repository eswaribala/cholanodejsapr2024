const express=require('express')
const mongoose=require('mongoose')
const config = require('./config')
const appRoute=require('./routes')
//express instance
const app=express();
//format
app.use(express.json())
//cors
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
})

app.use('/api', appRoute);

mongoose.connect(config.get('mongodb.url').toString()
).then(result =>{
    app.listen(process.env.PORT || 3200);
}).catch(err =>{
    console.log(err)
})

