let score: number | string = 15;

score = 40;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let alvitto: User | Admin = { name: "alvitto", id: 1 };
alvitto = { username: "ag", id: 2 };

// const getDbId = (id: number | string) => {};
const getDbId = (id: number | string) => {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`Id is ${id}`);
};

getDbId(1);
getDbId("2");

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", "3", 5, true];

let seatAllotment: "aisle" | "middle" | "windows";

seatAllotment = "aisle";
// seatAllotment = 'crew'
