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
        //res.render('index', {title: 'Contact List', page: 'movie-list', movies: moviesCollection , displayName:UserDisplayName(req)});

        res.json({success:true,msg:'Movie-List Displated Successfully',movies:moviesCollection, user:req.user})
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) :void
{
  res.json({success:true,msg:'Add Displated Successfully'})
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

   res.json({success:true,msg:'Add Displated Successfully', movie:movieToEdit})
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

    res.json({success:true,msg:"Successfully added Movie", movie: newMovie})
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

        res.json({success:true,msg:"Successfully edited Movie", movie: updateMovie})
    

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

        res.json({success:true,msg:"Successfully deleted Movie"})

    })



}