function solution(n) {
    if(n<2)return 0
    
    const arr=Array(n+1).fill(true)
    arr[0]=arr[1]=false

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
    let count=0
    arr.forEach((e)=>{if(e){count++}})
    return count
}
