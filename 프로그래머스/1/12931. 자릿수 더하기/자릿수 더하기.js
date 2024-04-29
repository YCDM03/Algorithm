function solution(n){
    let arr=String(n).split("")
    return arr.reduce((acc,e)=>{
        return acc+Number(e)
    },0)
}