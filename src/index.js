module.exports = function reverse (n) {
   let x = Math.abs(n).toString();
   x = x.split('');
   x = x.reverse();
   x = x.join('');
   return x;
}
