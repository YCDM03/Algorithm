function solution(num, total) {
      let answer = [];
      let sigmaX = 0;
      for (let i = 0; i < num; i++) {
        sigmaX += i;
      }
      let initvalue = (total - sigmaX) / num;
      for (let j = 0; j < num; j++) {
        answer.push(initvalue + j);
      }
      return answer;
    }