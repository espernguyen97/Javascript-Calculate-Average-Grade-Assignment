function  calculateAverageGrade (math, physics, chemistry) {
    let averageGrade = (math + physics + chemistry) / 3;
    return averageGrade;
  }
  
  function xepLoai (dtb) {
    if (dtb < 5) {
      console.log("Failure");
    } else if (dtb >= 5 && dtb < 6) {
      console.log("Passable");
    } else if (dtb >= 6 && dtb < 7) {
      console.log("Satisfactory");
    } else if (dtb >= 7 && dtb < 8) {
      console.log("Good");
    } else if (dtb >= 8 && dtb < 9) {
      console.log("Excellent");
    } else if (dtb >= 9 && dtb <= 10) {
      console.log("Exceptional");
    }
  }
  
  function main () {
    let math = 5;
    let physics = 7 ;
    let chemistry = 8;
    let AverageGrade = calculateAverageGrade(math, physics, chemistry);
  
    console.log("Math grade:" + math);
    console.log("Physics grade:" + physics);
    console.log("Chemistry grade:" + chemistry);
    console.log("Grading:");
    xepLoai(AverageGrade);
  }
  
  main();