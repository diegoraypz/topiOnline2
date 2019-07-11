//Arranca la aplicación
const express = require('express');
/*const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');

const { database } = require('./keys');*/

// Establecer nombre de la imagen 
/*const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})*/

// inicializacion
const app = express();
//require('./lib/passport');
/*
// configuraciones
//app.set('port', process.env.PORT || 4000); //establecer puerto 4000
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
app.use(session({
    secret: 'topimysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev')); //para ver lo que está llegando al servidor
app.use(express.urlencoded({extended: false})); //aceptar los datos por formulario //false: texto sencillo
app.use (express.json());
app.use(passport.initialize());
app.use(passport.session());
    
// Carga de imagen
app.use(multer({
    storage : storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('foto')); //single: una imagen a la vez

// Variables globales
app.use((req,res,next) => {
    app.locals.success = req.flash('success'); 
    app.locals.message = req.flash('message'); 
    app.locals.user = req.user;
    next();
});


// Rutas
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/products',require('./routes/products'));


// Público
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
/*app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto ', app.get('port'))
});*/
const puerto = process.env.PORT || 8080;
app.listen(puerto);
console.log("1 2 probando")

