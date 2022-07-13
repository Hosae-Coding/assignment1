import express from 'express';
const router = express.Router();

import {ProcessLoginPage,ProcessRegisterPage,ProcessLogoutPage} from '../Controllers/auth';







router.post('/login', ProcessLoginPage);


router.post('/register',ProcessRegisterPage );


router.get('/logout',ProcessLogoutPage );



export default router;