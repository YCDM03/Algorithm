function solution(sizes) {
    let arr=sizes.map((e)=>{
        if(e[0]<e[1]){
           e=[e[1],e[0]]
        }else{return e}
        return e
    })
   let wArr =arr.map(e=>{return e[0]})
   let hArr =arr.map(e=>{return e[1]})

   return Math.max(...wArr)*Math.max(...hArr)
}