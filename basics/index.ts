// 🤞 How to run typescript in console
// npx ts-node index.ts

// string type
let sayGreet: string = "Hello World";
console.log(sayGreet);

// number type
let myNum: number = 17;

// boolean type
let checkVisa: boolean;

// function type
let myFunc = (x: number, y: string): void => {};

// object type
type Student = {
  name: string;
  age: number;
  // optional property
  isGraduated?: boolean;
};

let student: Student = {
  name: "John",
  age: 20,
};

// array type
var fruits: string[] = ["apple", "banana", "mango"];
const numbers: number[] = [1, 2, 3, 4, 5];
let students: Student[]; // array of object
let studentList: Array<Student>; // array of object
const myArr: any[] = [1, "hello", true, { name: "John" }];

// tuple type or mixed type
let tuple: [string, number];
tuple = ["hello", 10];

// union type
let val: number | string;

// interfaces
interface Person {
  name: string;
  age: number;
}

interface Engineer extends Person {
  role: string;
  isWorking?: boolean;
}

let person: Person = {
  name: "John",
  age: 20,
};

// type assertion
let message: any;
message = "hello";
let messageLength = (message as string).length;

// enums
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);