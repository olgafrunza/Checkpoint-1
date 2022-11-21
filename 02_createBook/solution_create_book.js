/* eslint-disable no-unused-vars, no-prototype-builtins */
// let book = {
//     getInfo () {
//         return `${title} by ${author}`
//     },
//     getPrice () {
//         return this.price
//     },
//     addRating (/*str*/ ) { //🦑 this method takes in a string argument 
//         let ratingArr = []
//         ratingArr.push("str") //🦑 replace parameter variable here
//         return ratingArr
//     },
//     getRating (rating) {
//         //let sumStr += str
//         return sumStr.length /rating.length
        
        
//     },
// }
// function createBook (id, /*title,*/author, price, rating) {
//     let instance = Object.create(book)
//     instance.id = id,
//     instance.title = title, //🦑 Make sure to read your errors in the jasmine browser! This error says 'title is not defined'
//     // That tells us to define 'title' in the parameters list
//     instance.author = author,
//     instance.price = price,
//     instance.rating = /*[]*/ "str"  //🦑 Look at line 20 of 'create_book_specs.js'. See that they expect the rating property to have a value of an empty array,
//     //which we can just assign like so
//     return instance
// }

let book = {
    getInfo () {
        return `${this.title} by ${this.author}`
    },
    getPrice () {
        return this.price
    },
    addRating (str) { 
        this.rating.push(str) 
        return this.rating
    },
    getRating () {
      let total = 0
      for (let i = 0; i < this.rating.length; i++) {
        total += this.rating[i].length
      }
        return total/this.rating.length
        },
}


function createBook (id, title, author, price, rating) {
    let instance = Object.create(book)
    instance.id = id,
    instance.title = title, 
    instance.author = author,
    instance.price = price,
    instance.rating = []   
    return instance
}


// solution Fullstack

// const createBook = function(id, title, author, price) {
//   const book = Object.create({
//     getPrice() {
//       return this.price;
//     },
//     getInfo() {
//       return `${this.title} by ${this.author}`;
//     },
//     addRating(rating) {
//       this.rating.push(rating);
//     },
//     getRating() {
//       const ratings = this.rating;
//       let total = 0;
//       for (let i = 0; i < ratings.length; i++) {
//         total += ratings[i].length;
//       }

//       return total / ratings.length;
//     },
//   });
//   book.id = id;
//   book.title = title;
//   book.author = author;
//   book.price = price;
//   book.rating = [];

//   return book;
// };




// const createBook = function(id, title, author, price) {
//   const instance = Object.create({
//     getInfo() {
//       return `${this.title} by ${this.author}`;
//     },
//     getPrice() {
//       return this.price;
//     },
//     addRating(rating) {
//       this.rating.push(rating);
//     },
// Note: this is a different approach using Array.prototype.reduce
//     getRating() {
//       return (
//         this.rating.reduce((init, curr) => {
//           return init + curr.length;
//         }, 0) / this.rating.length
//       );
//     },
//   });
  
//   instance.id = id;
//   instance.title = title;
//   instance.author = author;
//   instance.price = price;
//   instance.rating = [];

//   return instance;
// };






















