// export const isAdult = (age) => {
//   if (age >= 18) {
//     console.log("is adult " + age);
//     return true;
//   } else {
//     return false;
//   }
// };

// export const canDrink = (age) => {
//   if (age >= 21) {
//     console.log("can drink " + age);
//     return true;
//   } else {
//     return false;
//   }
// };

const isSenior = (age) => age >= 65;

export { isSenior as default };
