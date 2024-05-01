function solution(n) {
    let str=String(n);
    let arr=[]
    for(let i=str.length-1;i>=0;i--){
        arr.push(Number(str[i]))
    }    
    return arr;
}