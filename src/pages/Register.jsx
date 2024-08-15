import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { BiLock, BiPhone, BiUser } from 'react-icons/bi'
import { FaIdCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
       <div className='authBg py-4 mb-5'>
      <h3 className="fw-bold text-center">စာရင်းသွင်းရန်</h3>
      <h6 className="text-warning text-center mt-4 mb-3 fw-bold"> 
      စာရင်းသွင်းပြီးလျှင်ပြောင်းလဲ၍ မရတော့သောကြောင့် သင်၏သတင်းအချက်အလက်များကို အမှန်တိုင်းဖြည့်စွက်ပေးပါ
       </h6>
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
        <FaIdCard size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="အမည်ရင်း"
           aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiPhone size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="ဖုန်းနံပါတ်"
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
      <InputGroup className='mb-3'>
      <InputGroup.Text className='formIcon' id="basic-addon1">
        <BiLock size={20} />
      </InputGroup.Text>
        <Form.Control
          placeholder="စကားဝှက် အတည်ပြုပါ"
        type='password'
        />
      </InputGroup>
     
     <div className="authBtns ">
     <div className="registerBtn mb-3 ">
          <div className="text-center pt-3 ">
            <h5 className="fw-semibold">စာရင်းသွင်းရန်</h5>
          </div>
        </div>
        <Link to={'/login'}>
        <div className="loginBtn mb-3">
          <div className="text-center pt-3">
            <h5 className="fw-semibold">လော့အင်</h5>
          </div>
        </div>
        </Link>
     </div>
       </form>
    </div>
  )
}

export default RegisterPage
