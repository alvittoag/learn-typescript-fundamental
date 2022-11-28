const User = {
  name: "alvitto",
  email: "alvitto@gmail.com",
  isActive: true,
};

const CreateUser = ({ name: string, isPaid: boolean }) => {};

const newUser = { name: "alvitto", isPaid: true, emai: "alvitto@gmail.com" };

CreateUser(newUser);

// const createCourse = () => {
//   return {};
// };

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const IsUser = (user: User) => {
  console.log(
    `name is ${user.name} and email is${user.email} and Is active ? ${user.isActive}`
  );
};

IsUser({ name: "alvitto", email: "a", isActive: true });

type UserType = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  girlfriend?: string;
};

let Assign: UserType = {
  _id: "123",
  name: "alvitto",
  email: "a@.com",
  isActive: false,
};

// Assign._id = '124'
// Assign.name = 'a'

type kampus = {
  location: string;
  totalmhs: number;
};

type mhs = {
  name: string;
  age: number;
};

type data = kampus &
  mhs & {
    value: number;
  };

export {};
