function solution(d, budget) {
    const arr=d.sort((a,b)=>{return a-b})
    let cost=0
  for(let i=0 ;i<arr.length;i++){
      cost+=arr[i]
      if(cost>budget){return i}
      else if(i===arr.length-1){return i+1}
  }
}