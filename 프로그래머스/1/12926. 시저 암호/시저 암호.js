function solution(s, n) {
    let result=""
    for(let i=0;i<s.length;i++){
        let str=s[i].charCodeAt();
        if(str==32){result+=" "}
        else if(str+n>122){result+=String.fromCharCode(str+n-26)}
        else if(str<97&&str+n>90){result+=String.fromCharCode(str+n-26)}
        else{result+=String.fromCharCode(str+n)}
    }
    return result
}
