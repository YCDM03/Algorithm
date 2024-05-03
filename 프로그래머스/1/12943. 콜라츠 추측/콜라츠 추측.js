 function solution(num) {
     if(num==1){return 0}
        let count = 0;
        do {
          if (num % 2 == 0) {
            count++;
            num = num / 2;
          } else {
            count++;
            num = num * 3 + 1;
          }
        } while (num !== 1);
        if (count > 500) {
          return -1;
        }
        return count;
      }