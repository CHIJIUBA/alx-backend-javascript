export default function getStudentsByLocation(studentArray, city){

   return studentArray.filter((value, index, array) => {
            if(value.location == city){
                return array[index];
            } 
    });
}