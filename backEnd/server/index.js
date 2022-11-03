const mongoose = require ('mongoose')

//const connection= mongoose.connect("mongodb+srv://chico:chico123Z@cluster0.cggacou.mongodb.net/vapeitDB?retryWrites=true&w=majority")
const connection= mongoose.connect("mongodb+srv://aliben:ali123456ben@cluster0.hdtaz.mongodb.net/mernapp?retryWrites=true&w=majority")
.then(()=>console.log('compass MongoDB Connected'))
.catch((err)=>console.error(err))


module.exports=connection;