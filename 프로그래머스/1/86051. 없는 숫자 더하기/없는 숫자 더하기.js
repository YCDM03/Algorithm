function solution(numbers) {
    let a=0;
    for(let i=0;i<=9;i++){a+=i};
    
    return numbers.reduce((acc,e)=>{
        return acc-e
    },a)
}