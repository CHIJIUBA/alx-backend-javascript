export default function updateStudentGradeByCity(studentArray, city, ...newGrades){
    return studentArray.filter((value) => {    
        return (value.location == city) ? value : "";
    });
}