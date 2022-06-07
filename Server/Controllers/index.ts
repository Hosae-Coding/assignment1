import  express  from "express";
import router from "../Routes";

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



import Movie from '../Models/movie'

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, moviesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection});
    });
}