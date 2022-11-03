const express=require('express')
const connectDB =require('./server/index')
const app=express()
const cors = require('cors')
const products=require('./router/productRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/product',products)

let port =3000

app.listen(port,()=>console.log(`server connected successfully on ${port}`))