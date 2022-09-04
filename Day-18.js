// Factory vs constructor function

// const circle1 = {
//   radius: 2,
//   area: function () {
//     return 3.14 * this.radius * this.radius;
//   },
// };

// const circle2 = {
//   radius: 3,
//   area: function () {
//     return 3.14 * this.radius * this.radius;
//   },
// };

// factory method
// function createCircle(radius) {
//   return {
//     radius: radius,
//     area: function () {
//       return 3.14 * this.radius * this.radius;
//     },
//   };
// }

// function createRectangle(len, width) {
//   return {
//     length: len,
//     width: width,
//     area: function () {
//       return this.length * this.width;
//     },
//     perimeter: function () {
//       return 2 * (this.length + this.width);
//     },
//   };
// }

// let circle1 = createCircle(2);
// let circle2 = createCircle(3);
// let rect1 = createRectangle(5, 10);
// console.log(circle1.radius, circle1.area());
// console.log(rect1.length, rect1.width, rect1.area(), rect1.perimeter());

// constructor method
// function Circle(radius, color) {
//   this.radius = radius;
//   this.area = function () {
//     return 3.14 * this.radius * this.radius;
//   };
//   this.color = color;
//   console.log(this);
// }

// let circle1 = new Circle(10, "red");
// // let circle2 = new Circle(20);
// console.log(circle1.radius, circle1.area());
// // console.log(circle2.radius, circle2.area());

// class -> syntactic sugar of function
// class Circle {
//   constructor(radius, color) {
//     this.radius = radius;
//     this.color = color;
//   }

//   area() {
//     return 3.14 * this.radius * this.radius;
//   }
// }

// let circle1 = new Circle(10, "red");
// let circle2 = new Circle(20, "green");
// console.log(circle1.radius, circle1.area());
// console.log(circle2.radius, circle2.area());
