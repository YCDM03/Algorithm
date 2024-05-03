 function solution(absolutes, signs) {
 return absolutes.reduce((acc,e,i)=>{
       return signs[i]==true?acc+=e:acc-=e
     },0)
    }