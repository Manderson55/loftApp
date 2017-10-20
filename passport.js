

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
    }, function (req, employeeNumber, password, done) {

        console.log(req.body);

        User.findOne({'employeeNumber': req.body.employeeNumber}, function (err, user) {

            if(err){
                return done(err);
            }


            if(user){
                console.log ("Employee has already Signed Up!");
                return done(null, false, 'Employee already exist!!');

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
    }, function (req, employeeNumber, password, done) {

        User.findOne({'employeeNumber': req.body.employeeNumber}, function (err, user) {
            console.log("employee number trying to sign in " + employeeNumber)
            if(err){
                console.log(err)
                return done(err)
            }

            if(!user){
                console.log('Sorry, employee not found!')
                return done(null, false, 'Sorry, employee not found! Please Sign Up!')
            }
            else {
                console.log("encripted password ", user.validPassword)
                console.log("sign in form password ", password)
                if(!user.validPassword(password)){
                     console.log("invalid password")
                     return done(null, false, 'Password does not match!!')
                }

                else{
                    console.log("employee found!")
                    return done(null, user);
                }
            }

        })
    }))

};