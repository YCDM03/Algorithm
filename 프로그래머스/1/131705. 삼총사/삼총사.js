function solution(number) {
    let answer = 0;
    for(let i=0;i<number.length;i++){
        for(let j=0;j!==i&&j<number.length;j++){
            for(let k=0;k!==i&&k!==j&&k<number.length;k++){
                number[i]+number[j]+number[k]==0?answer+=1:answer+=0
            }
        }
    }
    return answer;
}