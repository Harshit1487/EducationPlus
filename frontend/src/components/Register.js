import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
const Register = () => {
    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value);
        setUserRegistration({ ...userRegistration, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        setRecords([...records, newRecord]);

        setUserRegistration({ name: "", email: "", phone: "", password: "" });
    }
    return (
        <div>
            <Form action="" onSubmit={handleSubmit} className="mx-5 mt-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" autoComplete="off" value={userRegistration.name} onChange={handleInput}
                        name="name" id="name" placeholder="Enter email" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" autoComplete="off" value={userRegistration.phone} onChange={handleInput}
                        name="phone" id="phone" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoComplete="off" value={userRegistration.email} onChange={handleInput}
                        name="email" id="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" value={userRegistration.password} onChange={handleInput}
                        name="password" id="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            
        </div>
    )
}

export default Register
