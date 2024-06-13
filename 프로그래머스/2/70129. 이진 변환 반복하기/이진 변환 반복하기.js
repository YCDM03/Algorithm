function solution(s) {
    let delZeroCount=0
    let binaryCount=0
    let vStr=s

    do{
        vStr=vStr.split("").map((e)=>{if(e!=="1"){delZeroCount++}else{return e}}).join("").length.toString(2)
         binaryCount++
    }while(vStr!=="1")

    return [binaryCount,delZeroCount]
}