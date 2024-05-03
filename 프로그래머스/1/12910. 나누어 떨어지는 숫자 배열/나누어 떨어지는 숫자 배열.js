function solution(arr, divisor) {
   let divArr=arr.filter((e)=>e%divisor==0)
    return divArr.length==0?[-1]:divArr.sort((a,b)=>{return a-b});
}