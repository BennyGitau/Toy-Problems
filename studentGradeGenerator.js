/*pseudocode
create a function that accepts inputs from 0 to 100
function studentGradeGenerator(marks){
    prompt user to put a number.
    if (marks greater 79 And marks less or equal 100){
        return 'grade A'

    } else if (marks greater or equal to 60 And marks less 79){
        return 'grade B'

    } else if (marks greater or equal 59 And marks less 60){
        return grade C'

    } else if (marks greater or equal 40 And marks less 49){
        return 'grade D'

    } else if (marks greater or equal 0 And marks less 40) {
        return 'grade E'

    } else {
        console.log('Add a number between 0 and 100')


    }
  
}
*/
// Solution
// function that returns the grade.
 function studentGradeGenerator(marks){
    marks = Number(prompt('Enter student marks'));
//condition to check the grade
    if(marks > 79 && marks <= 100){
//prints Grade a
        return 'Grade A'
    } else if (marks >= 60 && marks < 79){
        return 'Grade B';
//prints Grade B
    } else if (marks >= 49 && marks < 60){
        return 'Grade C';
//Prints Grade C
    } else if (marks >= 40  && marks < 50){
        return 'Grade D';
//prints grade D
    } else if (marks >= 0 && marks < 40){
        return 'Grade E'
//prints grade E
    } else {
        console.log('Enter marks between 0 and 100!')
    }
 }
// invoking the function
 studentGradeGenerator();