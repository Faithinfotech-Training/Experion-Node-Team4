import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";
import axios from 'axios'
const handleConfirmText = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "After deletion, you won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-outline-danger ml-1"
    },
    buttonsStyling: false
  }).then((result) => {
    if (result.isConfirmed) {
        

    
    

      const mytoken = localStorage.getItem('mytoken');
      const data = '';
  var config = {
    method: 'delete',
    url: `http://localhost:3009/courses/${id}`,
    headers: { 
      'Authorization': `Bearer ${mytoken}`, 
      'Content-Type': 'application/json'
    }
  };
      axios(config)
          .then((response) => {
              console.log(response);
          })
          .catch((error) => {
              console.log(error);
          })
          window.location = "/admin/course/view-courses"
           
        
    // window.location.reload();
}
      // console.log("handleConfirmText = ", data);
      // DeletePassFunction(data);
    
  });
};

export default handleConfirmText;
