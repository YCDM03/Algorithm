function solution(phone_number) {
    let secureNum=""
    for(let i=0;i<phone_number.length-4;i++){
        secureNum+="*"
    }
    secureNum+=phone_number.slice(-4)
    return secureNum;
}