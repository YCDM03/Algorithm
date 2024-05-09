function solution(a, b) {
    let callender=[31,29,31,30,31,30,31,31,30,31,30,31]
    let days=callender.slice(0,a-1).reduce((acc,e)=>{
        return acc+e
    },b-1)
  
   switch(days%7){
            case 0:return "FRI"
            case 1:return "SAT"
            case 2:return "SUN"
            case 3:return "MON"
            case 4:return "TUE"
            case 5:return "WED"
            case 6:return "THU"
    }
}