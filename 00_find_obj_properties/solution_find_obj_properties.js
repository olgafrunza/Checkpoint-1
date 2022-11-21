/* eslint-disable no-unused-vars, no-prototype-builtins */
//🦑 No need to copy the test code in this file. The rectangle object gets passed to the function as an argument!
//See solution code posted below
// let rectanglePrototype = {
//   getArea() {
//       return this.height * this.width
//   }  
// }

// function findObjPropsHasOwn (color) {
//     out = ""
//     let rectangleInstance = Object.create(rectanglePrototype);
// rectangleInstance.color = color;
// rectangleInstance.height = height;
// rectangleInstance.width = width

// return rectangleInstance
// }




// const findObjKeys = obj => {
//   let keys = [];
//   for (let key in obj) {
//     if(Object.key(obj)) {
//       keys.push(key)
//     }
//     }
//     return keys.join(', ')
// }

//solution

const findObjPropsHasOwn = obj => {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.join(', ');
};


const findObjKeys = obj => {
  return Object.keys(obj).join(", ");
};

//


// Solution Fullstack

// const findObjPropsHasOwn = obj => {
//   let keys = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       keys.push(key);
//     }
//   }
//   return keys.join(', ');
// };

// const findObjKeys = obj => Object.keys(obj).join(', '); // shorthand syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_Syntax





// function findObjKeys (obj) {
//   let out = []
//   let keys = Object.keys(obj)
//   for (let i = 0; i < keys.length; i++) {
//     out.push(keys[i])
//   }
//   return out.join(", ")
// }
















