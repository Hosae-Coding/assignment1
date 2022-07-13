import  express  from "express";
import { DisplayAddPage, DisplayEditPage, DisplayMovieList, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from "../Controllers/movie-list";
import { AuthGuard } from "../Util";


const router =express.Router();



router.get('/movie-list',DisplayMovieList);

router.post('/add',ProcessAddPage);


router.get('/add',DisplayAddPage);

router.post('/edit/:id',ProcessEditPage);

router.get('/edit/:id',DisplayEditPage);

router.get('/delete/:id',ProcessDeletePage);



export default router;