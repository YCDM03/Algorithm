function solution(n) {
  let num=String(n.toString(3)).split("").reverse().join("");
   return parseInt(num,3)
}