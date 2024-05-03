function solution(a, b) {
let max;
let min;
    
if(a>b){max=a;min=b}
    else{max=b;min=a}

return (max+min)*(max-min+1)/2
}