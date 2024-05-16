function solution(number, limit, power) {
    let result=0
      for(let i=1;i<=number;i++){
          let count=Math.sqrt(i)%1===0?-1:0
          for(let j=1;j<=Math.sqrt(i);j++){
          if(i%j===0){count+=2}
          }
          if(count>limit){count=power}
          result+=count
      }
     return result
    }