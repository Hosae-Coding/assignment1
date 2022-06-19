import  express  from "express";
import router from "../Routes";
import {UserDisplayName} from '../Util'

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Home', page: 'home' ,intro:'I am Hongseok kim !', displayName:UserDisplayName(req) });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'About', page: 'about' , displayName:UserDisplayName(req)});
}
export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Project', page: 'project' , displayName:UserDisplayName(req) });
}
export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Service', page: 'services' ,intro:'I am Hongseok kim !', displayName:UserDisplayName(req) });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact', page: 'contact' , contact:"Please contact me !" , displayName:UserDisplayName(req)})
};



