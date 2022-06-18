import  express  from "express";


import passport from "passport";

import User from '../Models/user'

//Dispaly
export function DispalyLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) {
 res.render('index', {title: "Login", page: "login", messages: req.flash("loginMessage"),dispalyName:''})
}
export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', {title:'Register',page:'register',messages:req.flash('registerMessage'),dispalyName:''})
}


//process
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  
}
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  
}
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  
};



