

import axios from 'axios';




function DeleteResources(id) {

    axios
        //    .get("http://localhost:3003/staff_list")

        // .delete(`http://localhost:3002/staff/${id}`)//The working Json Server
        .delete(`http://localhost:3009/resources/${id}`)
        .then(response => {
            console.log(" delete promise was fulffiled")
            console.log(response);
            // setStaff(response.data)
        })
    window.location = "/admin/resource/view-resources"
}
export default DeleteResources