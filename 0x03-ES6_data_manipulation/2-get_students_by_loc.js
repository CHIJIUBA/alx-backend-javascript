export default function getStudentsByLocation(studentArray, city){

   return studentArray.filter((value) => {
            if(value.location == city){
                return value;
            } 
    });
}