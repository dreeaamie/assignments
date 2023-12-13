/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length!==str2.length){ 
    return false;}


const temp1=str1.split('').sort();
const temp2=str2.split('').sort();

    for(let i=0;i<temp1.length;i++)
  {
      if(temp1[i]!==temp2[i]){
          return false
      }
  }
  return true;
}

module.exports = isAnagram;
