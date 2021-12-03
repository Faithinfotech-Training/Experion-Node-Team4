





// import './ViewResource.css';
import axios from 'axios';
import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import handleConfirmText from '../DeleteAlert';
import { useNavigate } from 'react-router';
import DeleteCourses from '../DeleteCourse/DeleteCourse';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { Table } from "react-bootstrap";

const CustomToast = ({closeToast}) =>{
    return(
        <div>
            
            Are You Sure to Delete the Resources
            <button onClick = {closeToast}> Delete </button>
        </div>
    )
}

toast.configure()
function ViewCourse() {
    let notify = () => {
        toast.warn(<CustomToast/>,
            {
                position:toast.POSITION.TOP_CENTER
            })
    }
 
  

    let navigate = useNavigate();
    const goBack = () => {
        navigate('/admin/course')
    }

    const [courses, setCourses] = useState([]);
    const [admin, setAdmin] = useState(false);

    const Admin = ()=>{



         if(localStorage.getItem('role') === 'Admin'){

             setAdmin(true);

         }

    }
    // const navigate =useNavigate()

    useEffect(() => {
        console.log('The use effect hook has been executed');

        axios
            .get('http://localhost:3009/courses')
            .then(response => {
                console.log('Promise fulfilled');
                console.log(response);
                //response object contains the complete HTTP REQUEST with
                //returned data, status code, and headers. We need only 'data'
                setCourses(response.data);
            })
            

    }, [])


    return (
        <>
            <Dashboard />
            <div className="resource-list">
                <center> <h1>
                    Course List
                </h1> </center>
               
                <div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Course Name</th>
                            <th>Details</th>
                            
                        </tr></thead><tbody>
                       
                    {courses.map(course =>
                        // <div key={staff.id} className="staffListLI">
                        //     {/* <Staff details = {staff} /> */}
                        // </div>
                      
                            <tr>
                                <td> {course.coursecode}</td>
                                <td> {course.coursename}</td>
                                <td>{course.coursefee}</td>
                                <td>{course.category}</td>
                            

                                {/* <button type ="button" onClick={()=> DeleteResources(resource.id)}> Delete</button> */}
                                {/* <br />   */}
                                {/* <ToastContainer/> */}
                               <td> <Button type="button" 
                                
                                    onClick=  {() => handleConfirmText(course.id) } variant="danger"> Delete</Button>
                                </td>  
                                {/* &nbsp; &nbsp;&nbsp; */}
                              <td>  <Button type="button"
                                    onClick={ () => navigate(`/admin/course/edit-course/${course.id}`)} variant="success"> Edit</Button></td>
                               <td> <Button variant="primary" type="reset" onClick={() => goBack()}>
                                    Go Back
                                </Button></td>
                                {/* <br />
                                <br /> */}
                                </tr>

                        
                    )}
                    </tbody>
                   </Table> 
                </div>
                                

            </div>
        </>
    )
}

export default ViewCourse
























///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////
////////////
///
////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router";

// import { Table } from "react-bootstrap";


// import { Form, Button } from "react-bootstrap";

// import './CourseDetails.css'
// import Dashboard from "../../../Components/Dashboard/Dashboard";
// import handleConfirmText from "../DeleteCourse/DeleteAlert";



// function CourseDetails() {

//     // const [inputs, setInputs] = useState({});
//     const [courses,setCourses] = useState([])
//     const { id } = useParams();
//     // const navigate = useNavigate();

//     let navigate = useNavigate();
//     const goBack = () => {
//         navigate('/admin/course')
//     }
//     //Delete course option
//     // const deleteCourse = () => {
//     //     axios
//     //         .delete(`http://localhost:3009/courses/${id}`)
//     //         .then((response) => {
//     //             console.log(response);
//     //         })
//     //         .catch((error) => {
//     //             console.log(error);
//     //         })

//     // }

//     useEffect(() => {
//         axios.get(`http://localhost:3009/courses/${id}`)
//             .then(response => {
//                 console.log(response.data);
//                 setCourses(response.data);
//             })
//     }, [])



//     return(
//     <>
//             <Dashboard />
//             <div className="resource-list">
//                 <center> <h1>
//                     Course List
//                 </h1> </center>
               
//                 <div>
//                 <Table striped bordered>
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>Course Name</th>
//                             <th>Details</th>
                            
//                         </tr></thead><tbody>
                       
//                     {courses.map(course =>
                     
//                             <tr>
//                                 <td> {course.coursecode}</td>
//                                 <td> {course.coursename}</td>
//                                 <td>{course.coursefee}</td>
//                                 <td>{course.category}</td>
                            

//                                 {/* <button type ="button" onClick={()=> DeleteResources(resource.id)}> Delete</button> */}
//                                 {/* <br />   */}
//                                 {/* <ToastContainer/> */}
//                                <td> <Button type="button" 
                                
//                                     onClick=  {() => handleConfirmText(course.id) } variant="danger"> Delete</Button>
//                                 </td>  
//                                 {/* &nbsp; &nbsp;&nbsp; */}
//                               <td>  <Button type="button"
//                                     onClick={ () => navigate(`/admin/course/edit-course/${course.id}`)} variant="success"> Edit</Button></td>
//                                <td> <Button variant="primary" type="reset" onClick={() => goBack()}>
//                                     Go Back
//                                 </Button></td>
//                                 {/* <br />
//                                 <br /> */}
//                                 </tr>

                        
//                     )}
//                     </tbody>
//                    </Table> 
//                 </div>
                                

//             </div>
//         </>
//     )
// }

// export default CourseDetails

    //  (
//         <>
//             <Dashboard />
//             <div className="detailBox">
//                 <h1>Course Details</h1>
//                 <h2>Course name: {inputs.coursename}</h2>
//                 <h2>Course Code : {inputs.coursecode}</h2>
//                 <h2>Course Fee: {inputs.coursefee}</h2>
//                 <Button onClick={() => navigate(`/admin/course/edit-course/${id}`)} type="submit" background-color="lightsteelblue" >Edit Course</Button>
//                 &nbsp;&nbsp;&nbsp;
//                 <Button onClick={async () => { await handleConfirmText(id); navigate('/admin/course/view-courses') }} variant="danger" >Delete</Button>
//             </div>
//         </>
//     )
// }

// export default CourseDetails;




































































////////////////////////////////////////////
//////////////////////////////////
///////////////////////////////
/////////////////////////

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router";




// import { Form, Button } from "react-bootstrap";

// import './CourseDetails.css'
// import Dashboard from "../../../Components/Dashboard/Dashboard";



// function CourseDetails() {

//     const [inputs, setInputs] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();

//     //Delete course option
//     const deleteCourse = () => {
//         axios
//             .delete(`http://localhost:3009/courses/${id}`)
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })

//     }

//     useEffect(() => {
//         axios.get(`http://localhost:3009/courses/${id}`)
//             .then(response => {
//                 console.log(response.data);
//                 setInputs(response.data);
//             })
//     }, [])



//     return (
//         <>
//             <Dashboard />
//             <div className="detailBox">
//                 <h1>Course Details</h1>
//                 <h2>Course name: {inputs.coursename}</h2>
//                 <h2>Course Code : {inputs.coursecode}</h2>
//                 <h2>Course Fee: {inputs.coursefee}</h2>
//                 <Button onClick={() => navigate(`/admin/course/edit-course/${id}`)} type="submit" background-color="lightsteelblue" >Edit Course</Button>
//                 &nbsp;&nbsp;&nbsp;
//                 <Button onClick={() => { deleteCourse(); navigate('/admin/course/view-courses') }} variant="danger" >Delete</Button>
//             </div>
//         </>
//     )
// }

// export default CourseDetails;
