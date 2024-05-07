function solution(s) {
  if(s.includes("e")){return false}
  else if(s.length==4||s.length==6){
    return isNaN(Number(s))?false:true}
  else{return false}
}