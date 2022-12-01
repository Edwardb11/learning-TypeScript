// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let numberArray = getArray<number>([1, 2, 3]);
let stringArray = getArray<string>(["String", "String", "String", "3"]);

// numberArray.push("aaa");
numberArray.push(1);

//

type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = "";

  if (typeof value === "number") {
    result = value + value; //Suma
  }
  if (typeof value === "string") {
    result = value + value; //concatenacion
  }

  console.log(message);
  return result;
}

identity<number, string>(1, "hola");

interface Indetity<T, U> {
  value: T;
  message: U;
}
//

const identity2: Indetity<number, string> = {
  value: 1,
  message: "Hola",
};
const identity3: Indetity<string, string> = {
  value: "hola",
  message: "Hola",
};
const identity4: Indetity<boolean, boolean> = {
  value: true,
  message: true,
};

/* It's a comment. */
//

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

const process: ProcessIdentity<number, string> = (value, message) => {
  console.log(message);
  return value;
};

const process2 = (value: number, message: string) => {
  console.log(message);
  return value;
};

//

interface ProcessIndetity<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processIndetity<X, Y> implements ProcessIndetity<X, Y> {
  value: X;
  message: Y;
  constructor(value: X, message: Y) {
    this.value = value;
    this.message = message;
  }

  process(): X {
    return this.value;
  }
}

const process0 = new processIndetity<number, boolean>(1, true);
process0.value = 12;
