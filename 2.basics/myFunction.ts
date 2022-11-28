const num = (num: number): number => {
  return num + 2;
  // return 'hello'
};

const str = (val: string) => {
  return val.toUpperCase();
};

const signUp = (name: string, password: string, isdone: boolean = false) => {};

// const getValue = (myVal: number) :boolean => {
//   if (myVal > 5) {
//     return true;
//   }

//   return "200 Ok";
// };

const getHello = (val: string): string => {
  return "";
};

const heroes = ["thor", "odin"];
// const heroes = [2, 1]

heroes.map((hero): string => {
  return `Hero is ${hero}`;
});

const consoleEror = (errmsg: string): void => {
  console.log(errmsg);
};

export {};
