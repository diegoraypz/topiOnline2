//Arranca la aplicación
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');

// Establecer nombre de la imagen 
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

// inicializacion
const app = express();

// configuraciones
app.set('port', process.env.PORT || 4000); //establecer puerto 4000
app.set('views', path.join(__dirname, 'views')); //establecer a ubicación de la carpeta views
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

// Middlewares //

app.use(morgan('dev')); //para ver lo que está llegando al servidor
app.use(express.urlencoded({extended: true})); //aceptar los datos por formulario //false: texto sencillo
app.use (express.json());
    // Carga de imagen
app.use(multer({
    storage : storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('foto')); //single: una imagen a la vez

// Variables globales
app.use((req,res,next) => {
    next();
});


// Rutas
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/products',require('./routes/products'));


// Público
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto ', app.get('port'))
});

