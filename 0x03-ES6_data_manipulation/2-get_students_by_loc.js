export default function getStudentsByLocation(studentArray, city){
   return studentArray.filter((value) => value.location == city);
}