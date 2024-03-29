function solution(survey, choices) {
      let set = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
      let answer = "";
      let temp_type = [];
      let temp_score = [];

      for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) {
          temp_type[i] = survey[i][0];
          temp_score[i] = 4 - choices[i];
        } else if (choices[i] > 4) {
          temp_type[i] = survey[i][1];
          temp_score[i] = choices[i] - 4;
        } else {
          temp_type[i] = survey[i][1];
          temp_score[i] = 0;
        }
        set[temp_type[i]] += temp_score[i];
      }

      if (set.R >= set.T) {
        answer += "R";
      } else if (set.R < set.T) {
        answer += "T";
      }
      if (set.C >= set.F) {
        answer += "C";
      } else if (set.C < set.F) {
        answer += "F";
      }
      if (set.J >= set.M) {
        answer += "J";
      } else if (set.J < set.M) {
        answer += "M";
      }
      if (set.A >= set.N) {
        answer += "A";
      } else if (set.A < set.N) {
        answer += "N";
      }
    
      return answer;
    }