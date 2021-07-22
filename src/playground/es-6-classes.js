class Person {
  //constructor function gets called when we create an instance of a class
  //along with all of the args

  //use es6 method definitions syntax for constructors
  constructor(name = "Anonymous", age = 0) {
    //what do we do with name
    this.name = name; //we can create object defaults || 'test'
    this.age = age;
    //we use this bind name to person
  }

  getGreeting() {
    // we have access to this inside of our class methods
    //return "Hi! I am " + this.name;
    //ES6 feature TEMPLATE STRINGS?! BACKTICKS
    // YOU CAN INJECT VALUES IF YOU USE BACKTICKS - ES6 ${to call vars}
    return `hi I am test! ${this.name}`;
    //return "Hi! I am " + this.name; template strings are cool feature to avoid white space and concatenation
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  //must reference the same args as parent
  constructor(name, age, major) {
    //we have to call parent constructor using super() keyword to sync up the constructors for the extension
    // in order for student to take in same params we have to specify them in the constructor AND in order to sync them we ahve to reference them in super
    super(name, age);
    //unless we repoint the values here they will be undefined
    this.major = major;
  }
  hasMajor() {
    // if (this.major) {
    //   return true;
    // }

    // return false;
    return !!this.major;
  }

  //we can calculate some logic using another function and based on the result do something in a diff funct ex. in getDescr(){ if(hasMajor())

  //override parent methods
  getDescription() {
    //we can access all the parent methods by calling super.getDescr....
    let description = super.getDescription();

    if (this.hasMajor()) {
      //description = description + ``;
      //shorthand
      description += ` Their Major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, countries, homeLocation) {
    super(name, age);
    this.countries = countries;
    this.homeLocation = homeLocation;
    //super is called inside the contructor
  }

  getCountries() {
    return !!this.countries;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.getCountries()) {
      description += ` The traveler has been to ${this.countries} countries`;
    }

    return description;
  }

  getHome() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let originalDescription = this.getDescription();

    if (this.getHome()) {
      originalDescription += ` AND is From ${this.homeLocation}`;
    }

    return `${originalDescription}`;
  }

  isLegal() {
    if (this.age < 21) {
      return false;
    }
    return true;
  }
}

//we can render condition logic based on what exists in the instance of the class

const me = new Traveler("Patrick Rodgers", 17, 20, "Pittsburgh");

const me2 = new Traveler("Mike Scott", 50, 1);
// console.log(me.getGreeting());
const pat = JSON.stringify(me, null, 4);
console.log(me2.name);
// const person = new Student();
// console.log(person.getDescription());

const myObj = JSON.parse(pat);
//to string stringify
//parse string to obj
console.log(myObj.countries);

const html = <p>{pat}</p>;

const element = document.getElementById("app");
ReactDOM.render(html, element);
