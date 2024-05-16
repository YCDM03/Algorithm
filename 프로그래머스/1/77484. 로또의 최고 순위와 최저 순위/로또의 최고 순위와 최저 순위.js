function solution(lottos, win_nums) {
    const min=lottos.reduce((acc,e)=>{
        let num=0;
        for(let i=0;i<win_nums.length;i++){
            if(e==win_nums[i]){num=1}
        }
        return acc+num
    },0)
    const max=lottos.reduce((acc,e)=>{
     return e===0?acc+1:acc
    },min)
    
    return [max<2?6:7-max,min<2?6:7-min]
}