function solution(x) {
    let h=String(x).split("").reduce((acc,e)=>{return acc+Number(e)},0)
    return x%h==0?true:false
}
