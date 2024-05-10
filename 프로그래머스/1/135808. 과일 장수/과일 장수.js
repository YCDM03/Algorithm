function solution(k, m, score) {
    const s=[...score].sort((a,b)=>{return b-a});
    let num=0;
    for(let i=1;i<=Math.floor(score.length/m);i++){
        if(!s[i*m-1]){num+=0}
        else{num+=s[i*m-1]*m}
    }
    return num
}
