 function solution(common) {
      let result = 0;
      common[1] - common[0] == common[2] - common[1]
        ? (result = common[common.length - 1] + (common[1] - common[0]))
        : (result = common[common.length - 1] * (common[1] / common[0]));
      return result;
    }