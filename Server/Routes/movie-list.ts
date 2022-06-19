import  express  from "express";
import { DisplayAddPage, DisplayEditPage, DisplayMovieList, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from "../Controllers/movie-list";
import { AuthGuard } from "../Util";


const router =express.Router();



router.get('/movie-list',AuthGuard,DisplayMovieList);

router.get('/add',AuthGuard,DisplayAddPage);

router.get('/edit/:id',AuthGuard,DisplayEditPage);

router.post('/add',AuthGuard,ProcessAddPage);

router.post('/edit/:id',AuthGuard,ProcessEditPage);


router.get('/delete/:id',AuthGuard,ProcessDeletePage);



export default router;