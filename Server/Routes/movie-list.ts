import  express  from "express";
import { DisplayMovieList } from "../Controllers/movie-list";
import { AuthGuard } from "../Util";


const router =express.Router();



router.get('/movie-list',AuthGuard,DisplayMovieList);


export default router;