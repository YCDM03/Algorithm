function solution(s) {
    let delZeroCount=0
    let binaryCount=0
    let vStr=s

   while(vStr!=="1"){
        vStr=vStr.split("").map((e)=>{if(e!=="1"){delZeroCount++}else{return e}}).join("").length.toString(2)
         binaryCount++
    }

    return [binaryCount,delZeroCount]
}