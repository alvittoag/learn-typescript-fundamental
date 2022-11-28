const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("alvitto");

function identityFour<T>(val: T): T {
  return val;
}

interface bootle {
  brand: string;
  type: number;
}

// identityFour<bootle>({ brand: "alvitto", type: 1 });

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations

  const myIndex = 4;
  return products[myIndex];
};

interface database {
  id: number;
  username: string;
  password: string;
}

function anotherFunction<T, U extends database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(1, {id:1, username:'alvitto', password: 'gumay'});

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
