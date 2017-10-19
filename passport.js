

module.exports = function () {

    const User = require('./models/Employees');

    const LocalStrategy = require('passport-local').Strategy;
    const passport = require('passport');
    
    
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });
    
    passport.deserializeUser(function (id, done) {

        User.findById(id, function (err, user) {

            done(err, user);
        })

    });



    passport.use('local-signup', new LocalStrategy({
        usernameField: 'employeeNumber',
        passwordField:'password',
        passReqToCallback: true
    }, function (req, email, password, done) {

        console.log(req.body);

        User.findOne({'employeeNumber': req.body.employeeNumber}, function (err, user) {

            if(err){
                return done(err);
            }


            if(user){
                return done(null, false, 'Employee already existed!!');
            }


            else{
                let newUser = User();
                    newUser.employeeNumber = req.body.employeeNumber;
                    newUser.password = newUser.generalHash(password);

                newUser.save(function (err, user) {

                    if(err)
                        throw err;
                    return done(null, user);
                });

            }

        });
        
    }));



    passport.use('local-signin', new LocalStrategy({
        usernameField:'employeeNumber',
        passwordField:'password',
        passReqToCallback:true
    }, function (req, email, password, done) {

        User.findOne({'employeeNumber': req.body.employeeNumber}, function (err, user) {

            if(err){
                return done(err)
            }

            if(!user){
                return done(null, false, 'Sorry, not user found!!')
            }

            if(user.validPassword(password)){
                return done(null, false, 'Password does not match!!')
            }

            else{
                return done(null, user);
            }


        })
    }))




};

















