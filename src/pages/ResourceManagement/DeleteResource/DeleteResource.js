

import axios from 'axios';

import  handleConfirmText from './DeleteAlert' 

function DeleteResources(id) {
    
    

    const mytoken = localStorage.getItem('mytoken');

  var config = {
    method: 'delete',
    url: `http://localhost:3009/resources/${id}`,
    headers: { 
      'Authorization': `Bearer ${mytoken}`, 
      'Content-Type': 'application/json',
    }
  }
   
      axios(config)
          .then((response) => {
              console.log("Deleted");
          })
          .catch((error) => {
              console.log(error);
          })
        
    window.location = "/admin/resource/view-resources"
}
export default DeleteResources