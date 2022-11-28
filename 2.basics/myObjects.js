"use strict";
exports.__esModule = true;
var User = {
    name: "alvitto",
    email: "alvitto@gmail.com",
    isActive: true
};
var CreateUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
var newUser = { name: "alvitto", isPaid: true, emai: "alvitto@gmail.com" };
CreateUser(newUser);
var IsUser = function (user) {
    console.log("name is ".concat(user.name, " and email is").concat(user.email, " and Is active ? ").concat(user.isActive));
};
IsUser({ name: "alvitto", email: "a", isActive: true });
var Assign = {
    _id: "123",
    name: "alvitto",
    email: "a@.com",
    isActive: false
};
Assign._id;
'123';
