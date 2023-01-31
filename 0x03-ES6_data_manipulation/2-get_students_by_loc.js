export default function getStudentsByLocation(studentArray, city){

   return studentArray.filter((value) => {    
        return (value.location == city) ? value : "";
    });
}