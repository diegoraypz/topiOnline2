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
    newProduct.foto = '/uploads/'+ req.file.filename;
    await pool.query('INSERT INTO products set ?', [newProduct]);
    req.flash('success','Producto agregado');
    res.redirect('/products');
});

router.get('/', async (req, res) => {
    const products = await pool.query('SELECT * FROM products');
    console.log(products);
    res.render('products/list.hbs', {products: products});
});

router.get('/description/:id', async (req, res) => {
    const { id } = req.params;
    const products = await pool.query('SELECT * FROM products WHERE id = ?', [id])
    //console.log(products[0])
    res.render('products/description', {products: products[0]});
});

router.post('/description/:id', async (req, res) => {
    const { id } = req.params;
    const { foto, nombre, precio, sku, cantidad, descripcion } = req.body;
    const newCart = {
        foto,
        nombre,
        precio,
        sku,
        cantidad,
        descripcion
    };
    console.log(newCart);
    await pool.query('INSERT INTO cart set ?', [newCart]);
    res.redirect('/products/cart');
});


router.get('/cart', async (req, res) =>{
    const cart= await pool.query('SELECT * FROM cart');
    console.log(cart)
    res.render('products/cart', {cart: cart});
});

router.get('/cart/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM cart WHERE ID = ?', [id]);
    res.redirect('/products/cart');
});

module.exports = router;