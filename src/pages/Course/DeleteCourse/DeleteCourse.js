    //Delete course option
   
   
import axios from 'axios';

// import  handleConfirmText from './DeleteAlert' 
     function DeleteCourses(id){
        axios
            .delete(`http://localhost:3009/courses/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            window.location = "/admin/course/view-courses"
    }
    export default DeleteCourses