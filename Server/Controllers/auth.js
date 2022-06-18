"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = exports.DisplayRegisterPage = exports.DispalyLoginPage = void 0;
function DispalyLoginPage(req, res, next) {
    res.render('index', { title: "Login", page: "login", messages: req.flash("loginMessage"), dispalyName: '' });
}
exports.DispalyLoginPage = DispalyLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), dispalyName: '' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessLoginPage(req, res, next) {
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessRegisterPage(req, res, next) {
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
}
exports.ProcessLogoutPage = ProcessLogoutPage;
;
//# sourceMappingURL=auth.js.map