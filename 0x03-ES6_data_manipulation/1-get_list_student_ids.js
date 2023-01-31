export default function getListStudentIds(studentArray){

    if(studentArray instanceof Array){

       return studentArray.map((value) => {
            return value.id;
        });

    }
    else{
        return [];
    }
}