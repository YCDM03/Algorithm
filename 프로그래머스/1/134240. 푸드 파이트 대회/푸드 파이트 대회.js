function solution(food) {
   let half="";
    food.forEach((e,i)=>{
        half+=`${i}`.repeat(Math.floor(e/2))
    })
    return half+0+half.split("").reverse().join("")
}