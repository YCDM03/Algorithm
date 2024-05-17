function solution(X, Y) {
  const XArr=Array(10).fill(0);
  const YArr=Array(10).fill(0);
  let str=""
   
    for(let i=0;i<X.length;i++){
        XArr[Number(X[i])]++
    }
      for(let j=0;j<Y.length;j++){
        YArr[Number(Y[j])]++
    }
   
   for(let k=10;k>=0;k--){
       if(XArr[k]===0||YArr[k]===0){continue}
       str+=String(k).repeat(Math.min(XArr[k],YArr[k]))
       }

    return str===""?"-1":str[0]==="0"?"0":str
}