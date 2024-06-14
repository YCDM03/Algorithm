function solution(n) {
    let answer=n+1
    let oneCount=0
    let answerOneCount=0
    n.toString(2).split("").forEach((e)=>{e==="0"?null:oneCount++;})
    
    while(true){
    answer.toString(2).split("").forEach((e)=>{e==="0"?null:answerOneCount++;})
      if(oneCount===answerOneCount){break}
        else {answer++; answerOneCount=0}
    }

     return answer
}