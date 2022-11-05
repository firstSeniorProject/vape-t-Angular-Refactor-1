const {Products}= require('../model/productModel')

module.exports={
    saveProduct:(req,res)=>{
        const newProduct=new Products({
            nameBrand:req.body.nameBrand,
            price:req.body.price,
            description:req.body.description,
            imgSrc:req.body.imgSrc,
            category:req.body.category,
        })
        
            newProduct.save().then((results)=>res.status(200).json(results))
        
        .catch((err)=>res.send(err.message).status(500))

    },
    findProducts:(req,res)=>{
        Products.find({},
            (error,results)=>error?res.status(500).console.log(error):res.status(200).send(results))
    },
    findProduct:(req,res)=>{
        Products.findOne({_id:req.params.id},
            (error,results)=>error?res.status(500).console.log(error):res.status(200).send(results))
    },
    deleteProduct:(req,res)=>{
        Products.findByIdAndDelete(req.params.id,
            (error,results)=>error?res.status(500).console.error(error):res.status(200).send(results))
    },
    updateProduct:(req,res)=>{
        Products.findByIdAndUpdate(req.params.id,req.body,
            (error,results)=>error?res.status(500).console.error(error):res.status(200).send(results))
    }
}