function solution(arr1, arr2) {
    for(let i=0;i<=arr1.length-1;i++){
     for(let j=0;j<=arr1[i].length-1;j++){
        arr1[i][j]+=arr2[i][j]
     }
    }
    return arr1
}