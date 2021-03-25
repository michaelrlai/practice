var longestCommonPrefix = function (strs) {
  let result = [];
  let compare = [];
  if (strs.length === 1) return String(strs);
  for (let i = 0; i < strs.length - 1; i++) {
    let a = strs[i].split("");
    let b = strs[i + 1].split("");

    if (i === 0) compare = a;

    result = [];
    for (let j = 0; j < compare.length; j++) {
      if (compare[j] === b[j]) {
        result = result.concat(compare[j]);
      } else if (i === strs.length - 2) {
        break;
      } else {
        compare = result;
        break;
      }
    }
  }
  return result.join("");
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
