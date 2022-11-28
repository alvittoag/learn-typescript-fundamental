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
  protected _courseCount = 1;

  readonly city: string = "cikampek";
  constructor(
    public email: string,
    public name: string // private userId : number
  ) {}

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCoursCount() {
    this._courseCount = 4;
  }
}

const alvitto = new User("a@gmail.com", "alvitto");
// alvitto.birth
