// const user: (string | number)[] = ["ag", 1];
let tUser: [number, string, boolean];
tUser = [1, "ag", true];

let rgb: [number, number, number] = [122, 122, 122];

type User = [number, string];

let newUser: User = [1, "alvitto@gmail.com"];

newUser[1] = "1";
// newUser.push(true);

export {};
