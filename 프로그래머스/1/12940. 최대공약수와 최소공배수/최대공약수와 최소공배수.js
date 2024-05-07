function solution(n, m) {
    let max=m>=n?m:n;
    let min=m<=n?m:n;
    let answer = [];
    for(let i=max;i>0;i--){
        if(min%i==0&&max%i==0){
            answer.push(i)
            break
        }
    }
    if(max%min==0){answer[1]=max}
    else{answer[1]=max*min/answer[0]}
    return answer
}