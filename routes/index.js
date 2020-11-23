const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', { title: 'Louis Edwards' });
});


router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contacto pagina' });
});



module.exports = router; 

