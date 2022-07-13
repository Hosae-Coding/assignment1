import createError from 'http-errors';
import express, { NextFunction }  from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import mongoose from 'mongoose';

import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local'
import flash from 'connect-flash'

import cors from 'cors'
import passportJWT from 'passport-jwt'


let JWTStrategy = passportJWT.Strategy
let ExtractJWT=passportJWT.ExtractJwt

let localStrategy = passportLocal.Strategy;


import User from '../Models/user' 





import movieListRouter from '../Routes/movie-list'
import authRouter from '../Routes/auth'

const app = express();

import * as DBConfig from './db';
mongoose.connect((DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI);
const db = mongoose.connection; 

// Step 3 - Listen for Connections or Errors
db.on("open", function()
{
  console.log(`Connected to MongoDB at: ${(DBConfig.RemoteURI) ? DBConfig.HostName:'localHost'}`);
});

db.on("error", function()
{
  console.error(`Connection Error`);
});


// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client/')));
app.use(express.static(path.join(__dirname,'../../node_modules')))


app.use(cors())

app.use(session({
  secret:DBConfig.Secret,
  saveUninitialized:false,
  resave:false
}))

app.use(flash());


app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


let jwtOption=
{
  jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey:DBConfig.Secret
}


let strategy= new JWTStrategy(jwtOption,function(jwt_payload,done){

  User.findById(jwt_payload.id).then(user =>{
    return done(null,user)
  }).catch(err=> {
    return done(err,false)
  })

})

passport.use(strategy)

app.use('/api',authRouter)
app.use('/api',passport.authenticate('jwt',{session: false}), movieListRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

export default app;
