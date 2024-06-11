function solution(A,B){
    const arrA=A.sort((a,b)=>{return a-b})
    const arrB=B.sort((a,b)=>{return b-a})
    let result=arrA.reduce((acc,e,i)=>{
       return acc+e*arrB[i]
    },0)

    return result;
}