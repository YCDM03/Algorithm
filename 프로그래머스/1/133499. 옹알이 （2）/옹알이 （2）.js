function solution(babbling) {
    const possible=["aya", "ye", "woo", "ma"]
    const unpossible=["ayaaya","yeye","woowoo","mama"]
    
    const arr=babbling.map(e=>{
        for(const j of unpossible){
            e=e.replaceAll(j,"X")
        }
        return e
    })
    const arr2=arr.map((e)=>{
         for(const k of possible){
             e=e.replaceAll(k,"#")
            }
        return e.replaceAll("#","")
    })
    
    return babbling.length-arr2.filter((e)=>{return e!==""}).length
}