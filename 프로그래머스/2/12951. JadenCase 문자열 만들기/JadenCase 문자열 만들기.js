function solution(s) {
    const answer=s.split(" ").map(e=>{
        let str=""
        for(let i=0;i<e.length;i++){
            i===0?str+=e[i].toUpperCase():str+=e[i].toLowerCase()
        }
        return str
    }).join(" ")

    return answer;
}