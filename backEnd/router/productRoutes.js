const express=require('express')
const router=express.Router()

const {saveProduct,findProduct,findProducts,updateProduct,deleteProduct}=require('../controllers/productsController')


router.get('/',findProducts)
router.get('/:id',findProduct)
router.post('/add',saveProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router



