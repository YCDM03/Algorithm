function solution(a, b) {
  return a.reduce((acc,e,i)=>{
       return acc+e*b[i]
   },0)
}