const enum User {
  id = 1,
  name = "alvitto",
  nim = 12207085,
  class = "12.4A.15",
}

const userArray: (string | number)[] = [
  User.id,
  User.name,
  User.nim,
  User.class,
];

userArray.map((user) => user);
