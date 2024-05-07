function solution(s) {
   let arr=s.split(" ").map((e)=>{
       let str=""
       for(let i=0 ;i<e.length;i++){
           if(i%2==0){
           str+=e[i].toUpperCase()
           }else{str+=e[i].toLowerCase()}
       }
     return str
   })
    return arr.join(" ")
}