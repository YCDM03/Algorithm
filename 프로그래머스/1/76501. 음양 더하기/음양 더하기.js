 function solution(absolutes, signs) {
      let result = absolutes.reduce((acc, e, i) => {
        return signs[i] == true ? acc + e : acc - e;
      }, 0);
      return result;
    }