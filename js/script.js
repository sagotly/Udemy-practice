'use strict';
// let num = 50;

// for (let i = 1; i < 10; i++) {
//       console.log(i);
//       for (let c = 1; c < 10; c++) {
//             console.log(c);
//       }
// }

let result = '',
      leng = 10,
      x = 0; 
while (x < leng) {
      for (let i= 0; i < x; ) {
            result += '*';
      
      }
      result += '\n';
      x++
}