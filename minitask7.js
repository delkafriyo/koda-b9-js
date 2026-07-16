function totalGrades(grades) {
  let total =
    grades.matematika +
    grades.bahasaIndonesia +
    grades.bahasaInggris +
    grades.ipa;
  let avarage = total / 4;
  return `Total Grade ${total} 
  avarage ${avarage}`;
}

let grade = {
  matematika: 70,
  bahasaInggris: 10,
  bahasaIndonesia: 30,
  ipa: 50,
};

console.log(totalGrades(grade));
