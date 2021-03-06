var result;
var buffer = Buffer.alloc(16);
var santa = '๐';

// ๋ Buffer๋?
console.log(Buffer.isBuffer(santa)); // false

// writeํ  ๋, ํ์ํ Buffer ํฌ๊ธฐ
console.log(Buffer.byteLength(santa)); // 4

// ๋ฒํผ ์ ์ฒด ํฌ๊ธฐ
console.log(buffer.length); // 16

/**
 * buffer.copy(target, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
 */
var myHome = Buffer.alloc(24);
result = myHome.write('Merry Christmas!', 'utf8');
console.log(result); // 16

var santa_buffer = Buffer.from(santa, 'utf-8');
result = santa_buffer.copy(myHome, 16);
console.log(result); // 4

console.log(myHome.toString('utf8', 0, 16 + 4));
// Merry Christmas!๐

/**
buffer.slice(start, end=buffer.length)
Array.prototype.slice์ ๋น์ทํ๋ค.
๋จ! slice์ return๊ฐ์ด ์๋ก์ด ๊ฐ์ฒด๊ฐ ์๋๋ผ ๋์ผ ๊ฐ์ฒด๋ค.
์์ ํ๋ฉด ์๋ณธ Buffer๋ ์์ ๋๋ค.
*/
var father = myHome.slice(16, 20);
console.log(father.toString()); // ๐

father.write('๐จ');
console.log(father.toString()); // ๐จ
console.log(myHome.toString()); // Merry Christmas!๐จ
