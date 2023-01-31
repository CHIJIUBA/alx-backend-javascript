export default function getListStudentIds(studentArray){
    let studentId = new Array();

    if(studentArray instanceof Array){

        studentArray.map((value, index, array) => {
            studentId.push(array[index].id);
        });
        
        return studentId;
    }
    else{
        return studentId;
    }
}