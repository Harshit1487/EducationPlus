import React,{ useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from "axios"

import { useAlert } from 'react-alert';
// import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const [userLogin, setUserLogin] = useState({
        email:"",
        password:""
    });

    const alert = useAlert();
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({...userLogin,[name]:value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const user = {
            email:userLogin.email,
            password:userLogin.password
        }

        try{
            const res = await axios.post("http://localhost:5000/app/login",user)
            alert.show(res.data.message, {type: "success"});
            props.setIsAuth(true);
               
        }
        catch(err){
            
            const msg = err.response ? err.response.data.message : err
            alert.show(msg, {type: "error"})
        }
        
        setUserLogin({email:"",password:""});
        // if(props.isAuth === true) return < Redirect to="/"/> 
    }

    return (
        <div>
        <Form action="" onSubmit={handleSubmit} className="mx-5 mt-2">
        <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoComplete="off" value={userLogin.email} onChange={handleInput}
                        name="email" id="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" value={userLogin.password} onChange={handleInput}
                        name="password" id="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </div>
    )
}

export default Login
