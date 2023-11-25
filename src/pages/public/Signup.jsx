import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [account, setAccount] = useState({
        email: "",
        password: "",
        confirm: ""
    })
    const [showpassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleInputChange = (event) => {
        const value = {...account, [event.target.name]: event.target.value}
        setAccount(value)    
    }
    const onLogin = (e) => {
        e.preventDefault()
        navigate('/home')
        console.log(account)
    }
    const chooseLogin = () => {
        navigate('/login')
    }
  return (
    <Container className="vh-100 px-0 d-flex justify-content-center align-items-center text-center text-white" fluid={true} style={{backgroundColor: "#419489"}} >
        <Form onSubmit={onLogin}>
            <h1 className='mb-4'>Sign up</h1>
            <span className=''>Sign up and start following conferences/magazines!</span>
            <Form.Group className="my-4">                
                <Form.Control 
                    type="text" 
                    name="email"
                    value={account.email}
                    placeholder="name@example.com" 
                    onChange={handleInputChange}    
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Control
                    type = {showpassword ? "text" : "password"}
                    value={account.password}
                    name="password"
                    placeholder='Password' 
                    onChange={handleInputChange}        
                />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control
                    type = {showpassword ? "text" : "password"}
                    value={account.confirm}
                    name="confirm"
                    placeholder='Confirm Password' 
                    onChange={handleInputChange}        
                />
            </Form.Group>
            <ButtonGroup className="d-flex justify-content-around mb-3">
                <Button className='bg-transparent border-0 p-0'>Remember me</Button>
                <Button className='bg-transparent border-0 p-0'>Forgot Password?</Button>
                
            </ButtonGroup>  
            <Button type='submit' className='w-100 border-0' style={{backgroundColor: "#1E4540"}}>Login</Button>
            <ButtonGroup className="my-3  mx-5 d-flex align-items-center ">
                <span htmlFor="#signup">Already have an account?</span>
                <Button 
                    variant='link'
                    className='bg-transparent border-0 p-0 m-0 text-decoration-none ms-2 font' 
                    style={{color: "#1E4540", fontWeight: "bolder", fontSize: "20px"}}
                    onClick={chooseLogin}>
                        <span>Login</span>
                </Button>                
            </ButtonGroup> 
        </Form>
    </Container>
  )
}

export default Signup