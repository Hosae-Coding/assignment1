import express, { NextFunction } from 'express';
const router = express.Router();


router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home' });
});


router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page: 'home' , });
});


router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About', page: 'about' });
});


router.get('/project', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Project', page: 'project' });
});


router.get('/service', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Services', page: 'services' });
});


router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact', page: 'contact' });
});

export default router;