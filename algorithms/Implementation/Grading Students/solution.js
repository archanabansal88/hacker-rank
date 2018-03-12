function solve(grades) {
  // Complete this function
  return grades.map(grade => {
    if (grade < 38) return grade;

    const value = grade % 5;
    if (value > 2) {
      return grade + (5 - value);
    } else {
      return grade;
    }
  });
}
