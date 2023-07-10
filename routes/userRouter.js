const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')

router.post('/register', userCtrl.register)
router.get('/getAllUser', userCtrl.getAllUser)
router.get('/getUser', userCtrl.getUser)


module.exports= router