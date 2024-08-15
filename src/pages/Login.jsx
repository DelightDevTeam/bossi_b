import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { BiLock, BiPhone, BiUser } from 'react-icons/bi'
import { FaIdCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../assets/css/auth.css'
const LoginPage = () => {
  return (
       <div className='authBg py-4 mb-5'>
      <h3 className="fw-bold text-center mb-4">လော့အင်</h3>
      
      <form action="" className="authForm mx-auto my-4">
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiUser size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="ဂိမ်းအကောင့်"
           aria-describedby="basic-addon1"
        />
      </InputGroup>
       <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiLock size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="စကားဝှက်"
        type='password'
        />
      </InputGroup>
      
     
      <div className="authBtns ">
      <div className="loginBtn mb-3">
          <div className="text-center pt-3">
            <h5 className="fw-semibold">လော့အင်</h5>
          </div>
        </div>
         <Link to={'/register'}>
        <div className="registerBtn mb-3 ">
          <div className="text-center pt-3 ">
            <h5 className="fw-semibold">စာရင်းသွင်းရန်</h5>
          </div>
        </div>
        </Link>
     </div>
      </form>
    </div>
  )
}

export default LoginPage
