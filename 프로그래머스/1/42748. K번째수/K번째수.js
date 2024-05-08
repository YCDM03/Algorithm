function solution(array, commands) {
    return commands.map((e,i)=>{
        return [...array].slice(e[0]-1,e[1]).sort((a,b)=>{return a-b})[e[2]-1]
    })
}