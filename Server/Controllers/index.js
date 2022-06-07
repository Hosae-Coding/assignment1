"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', intro: 'I am Hongseok kim !' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'Project', page: 'project' });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Service', page: 'services', intro: 'I am Hongseok kim !' });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', contact: "Please contact me !" });
}
exports.DisplayContactPage = DisplayContactPage;
;
//# sourceMappingURL=index.js.map