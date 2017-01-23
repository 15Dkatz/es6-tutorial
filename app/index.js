// var string = 'Webpack works and updates automatically! Check it out!';
// console.log(string);
// // NOTE Adding Babel to webpack

// part 1:
// var a = 'hello'; -->
// let a = 'hello';
// console.log('a outside of scope =', a);
//
// {
//   let a = 'goodbye';
//   console.log('a inside scope =', a);
// }
//
// console.log('a outside of scope =', a);
//
// part 2:
// {
//   let salary = 90000;
// }
//
// console.log('salary:', salary); // error: salary is not defined
// NOTE Scope declarations with let

// part 1:
// const a = 2;
// a = 3 * 4; // error
// part 2:
// const array = [1, 2, 3];
// array.push(4);
// console.log('array', array); // valid
//
// array = [1]; // error
// NOTE Scope declarations with const

let b = 2;
console.log(b);

{
    let b = 3;
    console.log(b);
}
