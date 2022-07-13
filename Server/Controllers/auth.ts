import  express  from "express";


import passport from "passport";

import User from '../Models/user'


import {GenerateToken} from '../Util'


//process
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  
    passport.authenticate('local',function(err,user,info){

        if(err){
            console.log(err);
            res.end(err);
        }

        if(!user){
            
            return res.json({success:false,msg:"Eroor: Authentication failed"})
        }

        req.logIn(user,function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            const authToken = GenerateToken(user)

            return res.json({success:true,msg:"User Logged In successfully",user:{
                id:user._id,
                DisplayName:user.DisplayName,
                username:user.username,
                EmailAddress:user.EmailAddress
            }, token:authToken})
        })

        return;
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
            
            }
            else{
                
                console.error(err.name)
           
            }
            return res.json({success:false,msg:"Error: Registeration failed"})
        }
            

        return res.json({success:true, msg:"User Registered Successfily"})


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
  res.json({success:true,msg:"User Logged out Successfully"})
};




