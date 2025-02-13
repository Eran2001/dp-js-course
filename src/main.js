import "./style.css";

const students = [
  { name: "Era", score: 75 },
  { name: "Hasa", score: 80 },
  { name: "Neo", score: 78 },
];

const topStudents = students.filter((student) => {
  return student.score > 75;
});

console.log(topStudents);
