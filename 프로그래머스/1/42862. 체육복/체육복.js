function solution(n, lost, reserve) {
    const arr=Array(n).fill(0)
    
    lost.forEach(e=>{arr[e-1]-=1})
    
    reserve.forEach(e=>{arr[e-1]+=1})
       
    arr.forEach((e,i)=>{
        if(e===1){
            if(arr[i-1]===-1){
                arr[i-1]+=1
                arr[i]-=1
            }
            else if(arr[i+1]===-1){
                arr[i+1]+=1
                arr[i]-=1    
            }else{arr[i]=0}
        }
        if(e===-1){
            if(arr[i-1]===1){
                arr[i-1]-=1
                arr[i]+=1
            }
            else if(arr[i+1]===1){
                arr[i+1]-=1
                arr[i]+=1    
            }
        }
    })
    const max=arr.reduce((acc,e)=>{
         return acc+e
     },n)
    
    return max>n?n:max
}