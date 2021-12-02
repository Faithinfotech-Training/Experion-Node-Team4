import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import Dashboard from "../Components/Dashboard/Dashboard";

import "./Admin.css";



function Admin() {

      // function refreshPage() {
//     setTimeout(()=>{
//         window.location.reload(false);
//     }, 100000000000);
//     console.log('page to reload')
// }



  // window.onload = refreshPage()

    return (
        <div>
            <Dashboard />
        </div>
    )
}


export default Admin;