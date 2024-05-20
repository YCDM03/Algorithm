function solution(s) {
    let langth=1
    let count=0
    const arr=[]
    let x=s[0]
     
    for(let i=0;i<s.length;i++){
        if(x!==s[i]){
            count-=1;
            langth++
            if(count<=0){
                arr.push(s.substr(0,langth-1));
                s=s.replace(s.substr(0,langth-1)," ").trim()
                x=s[0]
                langth=2
                count=1
                i=0
                }
        }
        else{count++; langth++}
        
    }
    s===""?null:arr.push(s)
    return arr.length
}