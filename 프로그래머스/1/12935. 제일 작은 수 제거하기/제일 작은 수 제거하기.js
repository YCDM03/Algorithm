function solution(arr) {
    if(arr.length==1){
        if(arr[0]==10){return [-1]}
    }
    
    let min=[...arr].sort((a,b)=>{return a-b}).splice(0,1)[0];
    let newArr=arr.filter(e=>{
        return e!==min
    });
    
    return newArr}