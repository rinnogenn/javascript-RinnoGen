const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
// day la submission moi nhat
console.log(input[0] + input[1]);