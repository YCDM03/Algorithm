function solution(answers) {
    const arr1=answers.filter((e,i)=>{
        const num=(i+1)%5===0?5:(i+1)%5
        return e===num?e:false
    });
    const arr2=answers.filter((e,i)=>{
        let num;
        i%2===0?num=2:i%8===1?num=1:i%8===3?num=3:i%8===5?num=4:num=5;
        return e===num?e:false
    })
    const arr3=answers.filter((e,i)=>{
        let num
        i%10===0||i%10===1?num=3
        :i%10===2||i%10===3?num=1
        :i%10===4||i%10===5?num=2
        :i%10===6||i%10===7?num=4
        :num=5
        return e===num?e:false
    })
    const one=arr1.length
    const two=arr2.length
    const three=arr3.length
    
   const high=[]
 
  if (Math.max(one,two,three)===one){high.push(1)}
  if (Math.max(one,two,three)===two){high.push(2)}
  if (Math.max(one,two,three)===three){high.push(3)}
      
  return high.sort((a,b)=>{return a-b})
}