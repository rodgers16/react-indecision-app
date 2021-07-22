// const getFirstName = (name) => name.split("")[0];
// console.log(getFirstName("patrick rodgers"));

// const multiplier = {
//   numbers: ["2", "3", "2"],
//   someinfo: "info",

//   // multiply() {
//   //     this.numbers[0] * this.numbers[1] * this.numbers[2]
//   // },

//   printPlacesLived() {
//     console.log(this.numbers);
//   },
// };

// multiplier.printPlacesLived();

// const user = {
//   cities: ["pittsburgh", "charlotte", "lviv", "bangkok"],
//   name: "patrick",
//   printPlacesLived: function () {
//     //this wont work because cities does not exist outside of the block scope but we can use this.cities
//     console.log(cites);
//   },
// };
// user.printPlacesLived();

// const user = {
//   cities: ["pittsburgh", "charlotte", "lviv", "bangkok"],
//   name: "patrick",
//   //es6 method definition syntax
//   printPlacesLived() {
//     //this wont work because cities does not exist outside of the block scope but we can use this.cities
//     // this.cities.forEach((params) => {
//     //   console.log(this.name + "has live in " + params);
//     // });

//     return this.cities.map(
//       (passed) => this.name + "has lived in " + passed + "!"
//     );
//   },
// };

const multiplier = {
  number: [2, 4],
  multiplyBy: 3,

  multiply() {
    return this.number.map((num) => num * this.multiplyBy);
  },
};

// console.log(user.printPlacesLived());
console.log(multiplier.multiply());
