var isSame = function(s, t) {
  const map = new Map();
  const set = new Set();
  let n = s.length - 1;

  while (n >= 0) {
      if (map.has(s[n]) && map.get(s[n]) !== t[n]) {
      return false;
      }
      if (!map.has(s[n]) && set.has(t[n])) {
      return false;
      }
      set.add(t[n]);
      map.set(s[n], t[n]);
      n--;
  }

  return true;
};
let s= "egg", t = "add"
console.log(isSame(s,t))