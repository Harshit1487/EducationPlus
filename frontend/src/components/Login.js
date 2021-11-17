import React,{ useState } from 'react'
import { Form, Button } from 'react-bootstrap';


const Login = () => {
    const [UserLogin, setUserLogin] = useState({
        email:"",
        password:""
    });

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({...UserLogin,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        setUserLogin({email:"",password:""});
    }

    return (
        <div>
        <Form action="" onSubmit={handleSubmit} className="mx-5 mt-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoComplete="off" value={UserLogin.email} onChange={handleInput}
                        name="email" id="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" value={UserLogin.password} onChange={handleInput}
                        name="password" id="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </div>
    )
}

export default Login
