function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide id");
    return;
  }
  id.toLocaleLowerCase;
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Foood";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Recatngle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Recatngle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius;
  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
      }
    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.length;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
