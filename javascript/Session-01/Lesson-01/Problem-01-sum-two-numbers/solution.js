const fs = require('fs');


// djksakldjkasldjaskl
// hihi
// xin chào
// dkjsakdjaslkdjsakdjsakjdsla
// aksdjkladjsalkdjskaldj
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
console.log(input[0] + input[1]);