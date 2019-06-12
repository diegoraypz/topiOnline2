const express = require('express')
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('products/add');
});

router.post('/add', async (req, res) => {
    //console.log(req.file)
    //let $foto = req.file.filename;
    //let $foto = './uploads/' + req.file.filename;
    const { nombre, categoria, sku, precio, talla, cantidad, descripcion, foto} = req.body;
    const newProduct = {
        nombre,
        categoria,
        sku,
        precio,
        talla,
        cantidad,
        descripcion,
        foto
    }; //más adelante lo podría relacionar con el admin que lo creó¿?
    newProduct.foto = './uploads/'+ req.file.filename;
    await pool.query('INSERT INTO products set ?', [newProduct]);
    res.redirect('/products');
});

router.get('/', async (req, res) => {
    const products = await pool.query('SELECT * FROM products');
    console.log(products);
    res.render('products/list.hbs', {products: products});
});

module.exports = router;