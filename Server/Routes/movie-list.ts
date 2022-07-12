import  express  from "express";
import { DisplayAddPage, DisplayEditPage, DisplayMovieList, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from "../Controllers/movie-list";
import { AuthGuard } from "../Util";


const router =express.Router();



router.get('/movie-list',DisplayMovieList);

router.get('/add',DisplayAddPage);

router.get('/edit/:id',DisplayEditPage);

router.post('/add',ProcessAddPage);

router.post('/edit/:id',ProcessEditPage);


router.get('/delete/:id',ProcessDeletePage);



export default router;