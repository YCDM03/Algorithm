function solution(s) {
    let arr=[]
    for(i=0;i<s.length;i++){
        arr.push(s[i])
    }
    return arr.sort().reverse().join("")
}