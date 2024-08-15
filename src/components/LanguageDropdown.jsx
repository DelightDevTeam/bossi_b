import React from 'react'
import { Dropdown } from 'react-bootstrap'
import mm from '../assets/img/mm.png'
import en from '../assets/img/en.png'

const LanguageDropdown = () => {
  return (
    <Dropdown>
    <Dropdown.Toggle className='border-0 px-1 px-lg-2' style={{background:'#3C0646'}}  id="dropdown-basic">
        <img src={mm} className='flag' />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item className='d-flex align-items-center gap-2' >
      <img src={mm} className='flag' />
      <p>MM</p>
      </Dropdown.Item>
      <Dropdown.Item className='d-flex align-items-center gap-2'>
      <img src={en} className='flag' />
      <p>EN</p>
       </Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default LanguageDropdown
