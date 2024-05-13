function solution(nums) {
   const arr=[]
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if((nums[i]+nums[j]+nums[k])%2!==0){
                    if(Math.sqrt(nums[i]+nums[j]+nums[k])%1!==0){
                         arr.push(nums[i]+nums[j]+nums[k])
                    }
                }
            }
        }
    }
    const result=arr.filter((e,i)=>{
        let count=0;
        for(let j=1;j<=Math.sqrt(e);j++){
           if(e%j==0){count++}
        }
        return count==1
    })
    return result.length;
}