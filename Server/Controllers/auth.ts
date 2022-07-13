import  express  from "express";


import passport from "passport";

import User from '../Models/user'
import * as DBConfig from '../Config/db'
import jwt from 'jsonwebtoken'




//process
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  
    passport.authenticate('local',function(err,user,info){

        if(err){
            console.log(err);
            res.end(err);
        }

        if(!user){
            req.flash('loginMessage','Authentication error')
            return res.redirect('/login')
        }

        req.logIn(user,function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/movie-list')
        })
    })(req,res,next)
    
}
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  
    let newUser= new User
    ({
        username:req.body.username,
        EmailAddress:req.body.emailAddress,
        DisplayName: req.body.firstName + " " +req.body.lastName
    });

    User.register(newUser,req.body.password,function(err)
    {
        if(err)
        {
            if(err.name == 'UserExistsError'){
                console.log('ERROR:User Already Exists!');
                req.flash('registerMessage','Registration Error!');
            }
            else{
                
                console.error(err.name)
                req.flash('registerMessage','Server Error!')
            }
            return res.redirect('/register');
        }



        //login automatically
        return passport.authenticate('local')(req,res,function(){
            return res.redirect('/movie-list')
        })



    })
}
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  req.logOut(function(err){
    if(err)
    {

        console.error(err)
        res.end(err)

    }
    console.log('Logout');
  });
  res.redirect('/login')
};

export function GenerateToken(user:UserDocument):string{
    const payload={
        id:user._id,
        Displayname:user.DisplayName,
        username:user.username,
        EmailAddress:user.EmailAddress
    }
    const jwtOptions={
        expiresIn:604800
    }


    return jwt.sign(payload,DBConfig.Secret,jwtOptions)
}

