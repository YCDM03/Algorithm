function solution(k, score) {
    let arr=[]
    for(let i=0;i<score.length;i++){
        arr[i]=score.slice(0,i+1).sort((a,b)=>{return b-a}).slice(0,k)
    }
    return arr.map(e=>{return e[e.length-1]})
}