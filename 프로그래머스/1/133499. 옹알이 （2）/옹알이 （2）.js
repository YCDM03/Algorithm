function solution(babbling) {
    const word=["aya", "ye", "woo", "ma"];
    const prohibited_word=["ayaaya","yeye","woowoo","mama"]

    let answer=babbling.map(str=>{
    for(const p of prohibited_word){
    if(str.includes(p)){
       str=str.replaceAll(p,"p")
       }}
    for(const w of word){
        if(str.includes(w)){
            str=str.replaceAll(w," ")
        }
    }
    return str
    })

    return answer.filter(str=>!str.trim()).length;
}