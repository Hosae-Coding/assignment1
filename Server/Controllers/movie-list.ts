import  express  from "express";

import Movie from '../Models/movie'

import {UserDisplayName} from '../Util'
import { CallbackError } from "mongoose";

export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    Movie.find(function(err, moviesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection , displayName:UserDisplayName(req)});
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
 res.render('index',{title:'Add', page:'edit', movie:'',displayName: UserDisplayName(req) })
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
 let id = req.params.id

 Movie.findById(id, {}, {}, function(err, movieToEdit)
 {
   if(err)
   {
     console.error(err);
     res.end(err);
   }

   res.render('index', { title: 'Edit', page: 'edit', movie: movieToEdit, displayName:  UserDisplayName(req) })
 });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  let newMovie = new Movie
  ({
    "Name": req.body.movieName,
    "Director": req.body.movieDirector,
    "Year": req.body.movieYear,
    "Rating": req.body.movieRating
  });

  Movie.create(newMovie, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/movie-list');
  })

}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
    let id =req.params.id;

    let updateMovie = new Movie
    ({
        "_id":id ,
      "Name": req.body.movieName,
      "Director": req.body.movieDirector,
      "Year": req.body.movieYear,
      "Rating": req.body.movieRating
    });
  

    //update in database

    Movie.updateOne({_id:id},updateMovie,function(err:CallbackError){

        if(err)
        {
          console.error(err);
          res.end(err);
        }

        res.redirect('/movie-list')
    

    } )

}
export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{

    let id = req.params.id;

    Movie.remove({_id:id}, function(err:CallbackError){
        
        if(err){
            console.error(err)
            res.end(err)

        }

        res.redirect('/movie-list')

    })



}