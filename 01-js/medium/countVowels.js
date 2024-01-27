/*
  Implement a function `countVowels` that takes a string as an argument and 
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
    let vowel =['a', 'e', 'i', 'o', 'u'];
    let count=0;
    for(let i of str ){
  if (vowel.includes(i))
            count++;
        }
    return count;
}
module.exports = countVowels;
