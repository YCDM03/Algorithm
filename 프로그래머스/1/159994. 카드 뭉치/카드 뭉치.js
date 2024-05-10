function solution(cards1, cards2, goal) {
 
const arr=goal.map((e)=>{
   if(e===cards1[0]){
       cards1.shift();
       return e
   }
    else if(e===cards2[0]){
        cards2.shift();
        return e
    }
})

  return  arr.join("")===goal.join("")?"Yes":"No"
}