/* eslint-disable no-unused-vars */
//🦑 Nice job here!
// function multiplicationTable (rows, columns) {
//     let grid = []
//     for (let i = 1; i <= rows; i++) {
//       let rows = []
//       for (let j = 1; j <= columns; j++){
//       rows.push(j * i)
//       }
//       grid.push(rows)
//     }
//     return grid
// }


// Solution Fullstack

// const multiplicationTable = (rows, columns) => {
//   const timesTable = [];

//   for (let i = 1; i <= rows; i++) {
//     const row = [];
//     for (let j = 1; j <= columns; j++) {      
//       row.push(i * j);
//     }
//     timesTable.push(row);
//   }

//   return timesTable;
// };


function multiplicationTable (row, col) {
    let grid = [] 
    for (let i = 1; i <= row; i++) {
        let rows = []
        for (let j = 1; j <= col; j++) {
          rows.push(j * i)  
        }
        grid.push(rows)
    }
    return grid
}
