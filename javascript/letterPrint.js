

// // debugger

// for (let i = 1; i <= 7; i++) {
//   let row = "";

//   for (let j = 1; j <= 7; j++) {

//     if (j==1 || j==7 || i==j) {
//       row += `* `
//     } else {
//       row += "  "
//     }
  
//   }

//   console.log(row);
  
// }

// console.log("");


for (let i = 1; i <= 7; i++) {
  let row = "";

  for (let j = 1; j <= 7; j++) {

    if (j==1 || (j==7 && i<=4) || i==1 || i==4 ||
    (j==2*i-7)

    // (5,3) & (7,7)
    // m = (y2-y1)/(x2-x1)
    // y-y1 = m(x-x1)
    // (y-y1)(x2-x1) = (x-x1)(y2-y1)

    // j-3 = 2(i - 5)
    // j = 2i - 10 + 3
    // j = 2i - 7

  ) {
      row += `* `
    } else {
      row += "  "
    }
  
  }

  row += "  "
  for (let j = 1; j <= 7; j++) {

    if (
      (i==1 && 2<j && j<6) || (i==7 && 2<j && j<6) || (j==1 && 2<i && i<6) || (j==7 && 2<i && i<6) ||
      (i==2 && (j==2 || j==6)) || (i==6 && j==2) || (i==j && i>4)
    ) {
      row += `* `
    } else {
      row += "  "
    }
  
  }


  row += "  "
  for (let j = 1; j <= 7; j++) {

    if (i==j || i+j==8) {
      row += `* `
    } else {
      row += "  "
    }
  
  }


  row += "  "
  for (let j = 1; j <= 7; j++) {

    if (
        2*j - 9 == -i || (j-4)*(7-1) == (i-1)*(7-4)
      // (1,4) && (7,7)
      // (j-j1)(i2-i1) = (i-i1)(j2-j1)
    ) {
      row += `* `
    } else {
      row += "  "
    }
  
  }

  console.log(row);
  
}

// HTML