import { useState } from "react"
// import axios from 'axios';


function RegistrationForm (){

//initilaze to a empty

const[inputs,setInputs] = useState({})



// //handle the change of form elements
function handleChange (event){
    //saving the name of elemnt  and its value
    const name = event.target.name;
    const value = event.target.value;
    console.log(name)
    console.log(value)
    //updating the values
    setInputs(values => ({...values , [name]:value}))
  
}
function handleSubmit( event){
    //to prevent the default submit behaviour
    event.preventDefault();
    //printing the values to  console
    console.log(inputs);
    //post rewuest
    // axios.post("http://localhost:3002/staff",inputs)
    // axios
    // .post("http://localhost:5000/staffs",inputs)
    //     .then(response => {
    //         console.log("promise was fulffiled")
    //         console.log(response);
    //         window.location ='/Stafflist'
    //     }).catch((err) => {
    //         console.error(err)
    //     })
        
}

// var signin={
    
//     marginTop: 4,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',

// }
    return (
        <>
        <form   onSubmit = {handleSubmit}>

            <label> First Name: </label>
            <input type =" text" name ="first_name"
            value = {inputs.first_name || ""}
            onChange={handleChange}/> 
  
             <label> Last Name: </label>
            <input type =" text" name ="last_name"
            value = {inputs.last_name || ""}
            onChange={handleChange}
            required/> 

            
            <label> Mobile No: </label>
            <input type = "number" name ="mobile_no"
             value = {inputs.mobile_no|| ""}
             onChange={handleChange}
             required/>  

          <label> Email:  </label> 
            <input type = "email" name ="email"
             value = {inputs.email|| ""}
             onChange={handleChange}
             required/>  

                  <label> Password: </label>
            <input type = "password" name ="password"
             value = {inputs.password|| ""}
             onChange={handleChange}
              required/>  

           <input type = "submit"/> 
        </form>
        </>
    )
}

export default RegistrationForm
