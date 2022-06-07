import  express  from "express";

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Home', page: 'home' ,intro:'I am Hongseok kim !' });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'About', page: 'about' });
}
export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Project', page: 'project'  });
}
export function DisplayServicePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Service', page: 'services' ,intro:'I am Hongseok kim !' });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact', page: 'contact' , contact:"Please contact me !"})
};