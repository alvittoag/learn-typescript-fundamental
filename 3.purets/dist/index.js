"use strict";
// class User {
//   public email: string;
//   name: string;
//   private birth?: number = 12;
//   readonly city: string = "cikampek";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name // private userId : number
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "cikampek";
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCoursCount() {
        this._courseCount = 4;
    }
}
const alvitto = new User("a@gmail.com", "alvitto");
// alvitto.birth
