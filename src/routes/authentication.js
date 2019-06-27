const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn, isAdminLoggedIn, isAdminNotLoggedIn } = require('../lib/auth');

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
}));

router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res, next) =>{
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin'
    })(req, res, next);
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/signin');
});


/************************/
/*        ADMIN         */
/************************/

router.get('/adminsignup', isAdminNotLoggedIn, (req, res) => {
    res.render('auth/adminsignup');
});

router.post('/adminsignup', passport.authenticate('local.signupadmin', {
    successRedirect: '/profileadmin',
    failureRedirect: '/adminsignup',
}));

router.get('/admin', isAdminNotLoggedIn, (req, res) =>{
    res.render('auth/admin')
})

router.post('/admin', (req, res, next) =>{
    passport.authenticate('local.signinadmin',{
        successRedirect: '/profileadmin',
        failureRedirect: '/admin'
    })(req, res, next);
});

router.get('/profileadmin', isLoggedIn, (req, res) => {
    res.render('profileadmin');
});
module.exports = router;