import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import wave from '../../assets/img/wave.png'
import cb from '../../assets/img/cb.png'
import aya from '../../assets/img/aya.png'
import kbz from '../../assets/img/kbz.png'
const Deposit = () => {
  const [show,setShow]=useState(false);
  const [selectedBank,setSelectedBank]=useState(null);
  const banks=[
    {img:wave,name:'Wave Money',account:'091234343',accName:'Admin 1 '},
    {img:cb,name:'CB Pay',account:'091234343',accName:'Admin 1 '},
    {img:aya,name:'AYA Pay',account:'091234343',accName:'Admin 1 '},
    {img:kbz,name:'KPay',account:'091234343',accName:'Admin 1 '},

  ]
  return (
    <div>
      <form className="profileForm px-3 py-4 rounded-4" >
      <div className="d-flex justify-content-between">
          <h5 className="fw-bold mb-3">ငွေသွင်းရန်</h5>
           
        </div>
        <Button className='mx-auto mb-4' onClick={()=>setShow(!show)} variant="outline-warning">Choose Bank Account</Button>
        <div className="row mb-2">
            <div className="profileTitle col-5 mt-2">Bank Type : </div>
            <div className="col-7">
              <input value={selectedBank?.name} type="text" 
              className="form-control"
               />
            </div>
        </div>
         <div className="row mb-2">
            <div className="profileTitle col-5 mt-2">Account Name : </div>
            <div className="col-7">
              <input value={selectedBank?.accName} type="text" 
              className="form-control"
               />
            </div>
        </div>
         <div className="row mb-2">
            <div className="profileTitle col-5 mt-2">Account Number : </div>
            <div className="col-7">
              <input value={selectedBank?.account} type="text" 
              className="form-control" 
              />
            </div>
        </div>
        <div className="row mb-2">
            <div className="profileTitle col-5 mt-2">Amount : </div>
            <div className="col-7">
            <input type="text" 
            className="form-control " 
             />
             </div>
        </div>
        <div className="row mb-2">
            <div className="profileTitle col-5 mt-2">Receipt : </div>
            <div className="col-7">
            <input type="file" 
            className="form-control " 
             />
             </div>
        </div>
        <div className="text-end mt-3">
        <button className="btn text-black navLoginBtn">
          Submit
        </button>
        </div>
      </form>
      <Modal show={show} onHide={()=>setShow(false)} className='cursor-pointer infoBankAccModal'>
       <div className="px-1 py-2">
       <Modal.Header >
          <Modal.Title className=' text-center mx-auto'>
            <h5 className="fw-bold infoBankAccModalTitle">Choose Bank Account to Deposit</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='row'>
            {banks.map((bank,index)=>{
              return <div onClick={()=>{
                setShow(false)
                setSelectedBank(bank)
              }} className='d-flex gap-2 bg-white mb-2 p-2 rounded-3 text-black'>
                <img src={bank.img} className='bankModalImg img-fluid rounded-2' />
                <div>
                  <p>Account : {bank.account}</p>
                  <p>Account name : {bank.accName}</p>
                </div>
              </div>
            })}
        </Modal.Body>
        <Modal.Footer >
        <button onClick={()=>setShow(false)} className="navLoginBtn btn text-black fw-bold w-100">
        ပယ်ဖျက်သည်
        </button>
        </Modal.Footer>
       </div>
      </Modal>
    </div>
  )
}

export default Deposit
