// part 1:
var a = 'hello'; -->
let a = 'hello';
console.log('a outside of scope =', a);

{
  let a = 'goodbye';
  console.log('a inside scope =', a);
}

console.log('a outside of scope =', a);

// part 2:
{
  let salary = 90000;
}

console.log('salary:', salary); // error: salary is not defined
