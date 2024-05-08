function solution(s) {
    let numArr=["zero","one","two","three","four","five","six","seven","eight","nine"]
    numArr.forEach((e,i)=>{
        if(s.includes(e)){s=s.replaceAll(e,i)}
    })
   return Number(s)
}