function solution(n) {
    const arr=Array(n+1).fill(true)
    arr[0]=arr[1]=false

    for (let i = 2; i <= n; i++) {
        if (arr[i]) {
            for (let j = 2; j <= n/i; j ++) {
                arr[j*i] = false;
            }
        }
    }
    let count=0
    arr.forEach((e)=>{if(e){count++}})
    return count
}
