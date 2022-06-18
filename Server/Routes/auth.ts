import express from 'express';
const router = express.Router();

import {DispalyLoginPage,DisplayRegisterPage,ProcessLoginPage,ProcessRegisterPage,ProcessLogoutPage} from '../Controllers/auth';


router.get('/login',DispalyLoginPage);


router.get('/register',DisplayRegisterPage );




router.post('/login', ProcessLoginPage);


router.get('/register',ProcessRegisterPage );


router.get('/logout',ProcessLogoutPage );



export default router;