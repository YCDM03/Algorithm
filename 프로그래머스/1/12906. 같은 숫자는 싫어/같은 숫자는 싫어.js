function solution(arr)
{
    const answer = [];

    arr.forEach((el,idx)=>{if(arr[idx]!==arr[idx+1]){answer.push(el)}})
    
    return answer;
}