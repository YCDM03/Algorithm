function solution(numbers) {
    let arr=[]
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j!==i;j++){
            if(!arr.includes(numbers[i]+numbers[j])){arr.push(numbers[i]+numbers[j])}
        }
    }
    return arr.sort((a,b)=>{return a-b})
}