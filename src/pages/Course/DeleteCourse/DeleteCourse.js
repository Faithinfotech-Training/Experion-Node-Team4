    //Delete course option
   
   
import axios from 'axios';

// import  handleConfirmText from './DeleteAlert' 
     function DeleteCourses(id){

        const mytoken = localStorage.getItem('mytoken');
        const data = '';
    var config = {
      method: 'delete',
      url: `http://localhost:3009/courses/${id}`,
      headers: { 
        'Authorization': `Bearer ${mytoken}`, 
        'Content-Type': 'application/json'
      },
      data : data
    };
        axios(config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            window.location = "/admin/course/view-courses"
    }
    export default DeleteCourses