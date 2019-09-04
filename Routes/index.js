const express = require('express');
const router = express.Router();
const auth = require('../middleares/auth')

router.get('/', auth, (req , res) => {
    console.log(res.locals.auth_data)
    return res.send({ message: 'Tudo ok com o get da raiz'})
})

router.post('/',(req, res) =>{
    return res.send({ message: 'Tdudo ok com o post da raiz'}) 
})

module.exports = router