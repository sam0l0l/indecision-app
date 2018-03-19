var nameVar = 'Sam';
var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// cannot reassign or redefine
const nameConst = 'Sam';
//const nameConst = 'George';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Sam Morris';

// 'var' is function scoped
if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName); 

// let and const are blocked scoped
// you cannot access let or const outside of the function they were defined in

// const, let , var