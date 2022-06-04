"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', intro: 'I am Hongseok kim !' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', intro: 'I am Hongseok kim !' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
});
router.get('/project', function (req, res, next) {
    res.render('index', { title: 'Project', page: 'project', intro: 'I am Hongseok !' });
});
router.get('/service', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', contact: "Please contact me !" });
});
exports.default = router;
//# sourceMappingURL=index.js.map