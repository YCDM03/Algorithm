function solution(n, m, section) {
    let result=1;
    let area=section.shift()
    let nextArea=area+m
    
    while(section.length){
        const current=section.shift()
        if(current<nextArea){
            continue
        }
        nextArea=current+m
        result++
    }
    return result
}