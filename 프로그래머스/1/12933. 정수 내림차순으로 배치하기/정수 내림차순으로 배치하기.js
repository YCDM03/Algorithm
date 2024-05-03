function solution(n) {
let arr=String(n).split("").map(e=>{return Number(e)}).sort((a,b)=>{return b-a}).join("")
return Number(arr)
}