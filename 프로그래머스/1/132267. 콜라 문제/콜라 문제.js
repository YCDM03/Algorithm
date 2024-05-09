function solution(a, b, n) {
    let coke=0;
    for(let i=1;n>=a;i++){
        if(b*n%a==0){
            coke+=b*n/a
            n=b*n/a
        }else{
            coke+=Math.floor(n/a)*b
            n=Math.floor(n/a)*b+n%a
        }
    }
    return coke
}