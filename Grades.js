

let studentScores = {
  John: 85,
  Emma: 92,
  Sam: 67,
  Bob: 45,
};

for (student in studentScores) {
    console.log(student + " - " + getGrade(studentScores[student]));
  }
  
function getGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}
