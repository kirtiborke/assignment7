/***Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc" */

/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s){
    let arr = s.split('');
    let length = ~~(arr.length/2);
    for (let i= 0;i<length;i++){
        [arr[i],arr[s.length-1-i]] = [arr[arr.length-1-i],arr[i]]
    }
    return arr.join('');
}
var reverseWords = function(s) {
  let arr = s.split(' ');
  for(let i =0;i<arr.length;i++){
      arr[i] = reverseString(arr[i])
  }
  return arr.join(' ')
};