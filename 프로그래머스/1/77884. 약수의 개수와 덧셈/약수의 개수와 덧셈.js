function solution(left, right) {
    let arr=[];
  for(let i=0;i<=right-left;i++){
      let count=0;
      Math.sqrt(left+i)%1==0?count++:0
      for(let j=1;j<Math.sqrt(left+i);j++){
          (left+i)%j==0?count+=2:null
      }
      count%2==0?arr.push(left+i):arr.push(-left-i);
  }
    return arr.reduce((acc,e)=>{
        return acc+e
    },0)
}