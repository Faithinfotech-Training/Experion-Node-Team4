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
        

    
    

    axios
        
              .delete(`http://localhost:3009/resources/${id}`)
                      .then(response => {
                        console.log(" delete promise was fulffiled")
                        console.log(response);
           
        })
    window.location = "/admin/resource/view-resources"
}
      // console.log("handleConfirmText = ", data);
      // DeletePassFunction(data);
    
  });
};

export default handleConfirmText;
