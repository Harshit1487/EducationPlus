import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'

import { useAlert } from 'react-alert'
// import { Redirect } from 'react-router-dom';
const Register = (props) => {

    const alert = useAlert();
    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    // const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);
        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const registered = {
            name:userRegistration.name,
            phone:userRegistration.phone,
            email:userRegistration.email,
            password:userRegistration.password
        }
        try{
            const res = await axios.post('http://localhost:5000/app/register', registered);
            alert.show(res.data.message, {type: "success"});

            props.setIsAuth(true);
            // if(props.IsAuth === true) return <Redirect to="/"/>
        } catch(err){
            
            const msg = err.response ? err.response.data.message : err
            alert.show(msg, {type: "error"})
        }
        setUserRegistration({ name: "", email: "", phone: "", password: "" });
        // props.setIsAuth(true);
        // if(props.setIsAuth===true) return <Redirect to="/"/>
        
        // const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        // setRecords([...records, newRecord]);  
    }
    return (
        <div>
            <Form action="" onSubmit={handleSubmit} className="mx-5 mt-2">
                <Form.Group className="mb-3">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" autoComplete="off" value={userRegistration.name} onChange={handleInput}
                        name="name"  placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" autoComplete="off" value={userRegistration.phone} onChange={handleInput}
                        name="phone"  placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoComplete="off" value={userRegistration.email} onChange={handleInput}
                        name="email"  placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" value={userRegistration.password} onChange={handleInput}
                        name="password"  placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            
        </div>
    )
}

export default Register
