//Funciones de ayuda
const bcrypt = require('bcryptjs');

const helpers = {};

//Cifrado
helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    //const hash = password
    return hash;
};

//Comparar cifrado con el password del logueo
helpers.matchPassword = async (password, savedPassword) => {
    try{
        return await bcrypt.compare(password, savedPassword);
    } catch(e){
        console.log(e);
    }
};


module.exports = helpers;