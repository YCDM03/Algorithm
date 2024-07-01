function solution(d, budget) {
    d.sort((a,b)=>{return a-b})
    let cost=0
  for(let i=0 ;i<d.length;i++){
      cost+=d[i]
      if(cost>budget){return i}
      else if(i===d.length-1){return i+1}
  }
}