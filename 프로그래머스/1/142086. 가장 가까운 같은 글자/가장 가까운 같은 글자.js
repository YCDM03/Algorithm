function solution(s) {
    let strArr=s.split("")
    return strArr.map((e,i)=>{
        if(i==0){return -1}
        let num=0
        for(let j=i-1;0<=j&&j<strArr.length;j--){
            if(e==strArr[j]){num=i-j; break}
            else{num= -1}
        }
        return num
    })
}