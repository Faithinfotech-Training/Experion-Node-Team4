import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function EnquiryManagement(){
    const {id} = useParams()
    return(<>
    <div>
        <h1>Enquiry Management</h1>
    </div>
    <EnqForm id={id}/>
    </>);
}

function EnqForm(props) {
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:5000/enquiry/${props.id}`) //assuming node api sever running at 5000 with enquiry details
        .then(response => {
            console.log(response)
            setInputs(response.data)
        })
    },[])

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        axios
        .put(`http://localhost:5000/enquiry/${props.id}`,inputs)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response)
            alert("details updated")
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Enter Name :
                    <input type="text" name="enqname" value={inputs.enqname || ""} onChange={handleChange} />
                </label>
            </div>

            <div>
                <label>Enter Age :
                    <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
                </label>
            </div>

            <input type="submit" />
        </form>
    )
}

export default EnquiryManagement;