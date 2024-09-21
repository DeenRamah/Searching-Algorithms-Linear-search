interface Person{
  name: string;
  age: number;
}

const people: Person[]=[
  {name:"Alice",age:25},
  {name: "Rad", age:21},
  {name: "Bob", age:23},
  {name:"Charlie", age:35}
];

const targetPerson: Person={name:"Bob", age:30};
const personIndex = linearSearch(people, targetPerson);
console.log(`Person: ${PersonIndex}`)
