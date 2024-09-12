function solution(nums) {
   const obj={}
   const k=nums.length/2
    let count=0

    nums.forEach((e,i)=>{
    if(obj[e]){obj[e]+=1;}
    else{obj[e]=1}
    })
    for(const a in obj){count++}
    return k>count?count:k
}