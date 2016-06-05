function output(str, regexp, target) {
  target.innerHTML =
    str.replace(regexp, str => `<span>${str}</span>`);
}


const str = 'Is this This?';
// const str = 'nope that not?';

// Method 1: Using RegExp constructor
// const regexp = new RegExp('is', 'g');
// Method 2: Using RegEx Literal:
const regexp = /is/gi;

output(str, regexp, document.getElementById('app'));

// console.log(regexp.exec(str));
// console.log(regexp.exec(str));
// console.log(regexp.exec(str));
// console.log(regexp.exec(str));
// console.log(regexp.exec(str));
// console.log('Initial string:', str);
// console.log('String.match method: ', str.match(regexp));
// console.log('String.replace method: ', str.replace(regexp, str => 'XX'));
// console.log('String search 1: ', str.search(regexp));
// console.log('String search 1: ', str.search(regexp));
// console.log('String search 1: ', str.search(regexp));
