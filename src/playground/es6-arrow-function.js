

//es5 function, can be named
function square(x) {
    return x * x;
}

// es6 arrow functions always anonymous
//const squareArrow = (x) => {
 //   return x * x;
//};

// if arrow function and only
// returning a single  expression, use new syntax, put expression right after the arrow

 const squareArrow = (x) => x*x;

console.log(squareArrow(4));

// challenge, use arrow functions
// getFirstName('Doug McDougaluudoor') -> "Doug"
// create regular arrow func
// create arrow function using shorthand syntax

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameTwo = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameTwo("Turginsmirck Smeegles"));