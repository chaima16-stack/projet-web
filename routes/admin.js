const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
router.get('/login', adminController.getlogin);
router.get('/', adminController.getIndex);
router.post('/ajouter-user', adminController.postIndex);
router.get('/add_user', adminController.getform);
router.get('/update-user/:id', adminController.updateuser);
router.get('/delete-user/:id', adminController.deleteuser);
router.get('/articles', adminController.getArt);
router.get('/add_article', adminController.getformart);
router.post('/ajouter-article', adminController.postIndexart);
router.get('/update-article/:id', adminController.updatearticle);
router.get('/delete-article/:id', adminController.deletearticle);
router.post('/sign-up', adminController.veriflogin);
router.get('/user', adminController.userindex);
router.get('/logout', adminController.logout);
router.post('/register', adminController.register);
router.get('/getregister', adminController.getregister);
module.exports = router;