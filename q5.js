/***Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
**Example 1:****Input:** s = "abcdefg", k = 2**Output:**"bacdfeg"**/

var reverseStr = function(s, k) {
    const arrayString = s.split('');
    
    if (!Math.floor(s.length/k)) return arrayString.reverse().join('');

    const unit = Math.floor(s.length/(2*k));
    
    for (let i = 0; i <= unit; i++) {
        const unitString = arrayString.slice(i*2*k, i*2*k + k);
        arrayString.splice(i*2*k, k, ...unitString.reverse());
    }

    return arrayString.join('');
};