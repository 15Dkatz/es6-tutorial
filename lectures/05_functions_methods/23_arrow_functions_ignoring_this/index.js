// all parts:
// this.a = 25; // declaring globally
//
// part 1:
//
// let print = function() {
//   console.log('this.a', this.a); // this.a undefined
// }
//
// print();
//
// part 2:
//
// let print = function() {
//   this.a = 50;
//   console.log('this.a', this.a); // this.a 50
// }
//
// print();
//
//
// part 3:
//
// let arrowPrint = () => {
//   console.log('this.a in arrowPrint', this.a); // this.a in arrowPrint 25
// }
//
// arrowPrint();
