import React, { useContext, useEffect, useState } from 'react'
import useFetch from "../../hooks/useFetch"
import BASE_URL from "../../hooks/baseURL"
import SmallSpinner from './SmallSpinner';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import authCheck from '../../hooks/authCheck';
import { AuthContext } from '../../contexts/AuthContext';

const WithDraw = () => {
  authCheck();
  const { content } = useContext(AuthContext);
  const {data:user} = useFetch(BASE_URL + "/user");
  const {data: channels} = useFetch(BASE_URL + "/payment-type");
  const navigate = useNavigate();
  // console.log(channels);
  

  const [payment, setPayment] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const withdraw = (e) => {
    e.preventDefault();
    setLoading(true);
    // if(amount < 10000){
    //   setLoading(false)
    //   toast.error("အနည်းဆုံး ၁၀,၀၀၀ ကျပ်မှစ၍ ထုတ်ယူနိုင်ပါသည်။", {
    //       position: "top-right",
    //       autoClose: 1000,
    //       theme: 'dark',
    //       hideProgressBar: false,
    //       closeOnClick: true
    //   })
    //   return;
    // }
    const inputData = {
      "bank_id": payment,
      "account_name": accountName,
      "account_number": accountNo,
      "amount": amount,
      // "accountNo": accountNo,
      "password": password
    }
    fetch(BASE_URL + "/transaction/withdraw", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(inputData),
    })
      .then(async (response) => {
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
          if (response.status === 422) {
            setLoading(false)
            setError(errorData.errors);
            setSuccess("");
            setErrMsg("")
            console.error(`${response.status}:`, errorData);
            
          } else if (response.status === 401) {
            setLoading(false)
            setErrMsg(errorData.message);
            setSuccess("");
            setError("")
            console.error(`${response.status}:`, errorData);
          } else {
            // console.error(`Unexpected error with status ${response.status}`);
          }
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setError("");
        setAccountName("");
        setAccountNo("");
        setAmount("");
        setPayment("")
        setSuccess("ငွေထုတ်လွှာ တောင်းခံပြီးပါပြီ။.");
        setTimeout(() => {
          setSuccess("");
        }, 1000);
        navigate('/information?tab=logs')
        setErrMsg("")
        setError("")
      })
      .catch((error) => {
        // console.error(error);
      });
  }



  return (
    <div>
      <ToastContainer />
      <div className="profileForm px-3 py-4 rounded-4">
      {success && (
        <div className="alert alert-success alert-dismissible" role="alert">
          {success}
        </div>
      )}
      {errMsg && (
        <div className="alert alert-danger alert-dismissible" role="alert">
          {errMsg}
        </div>
      )}
        <form onSubmit={withdraw}>
            <div className="row mb-2">
              <div className="profileTitle col-5 mt-2">{content?.wallet?.balance} : </div>
                <div className="col-7">
                  <input type="text" 
                  className="form-control "
                  disabled  
                  value={user && Number(user.balance).toLocaleString()} />
                </div>
            </div>
            <div className="row mb-2">
                <div className="profileTitle col-5 mt-2">
                {content?.wallet?.choose_bank} : 
                </div>
                <div className="col-7">
                  <select className="form-control form-select" onChange={e => setPayment(e.target.value)} value={payment}>
                    <option value="">{content?.wallet?.select}</option>
                    {channels && channels.map((item, index) => (
                      <option key={index} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                  {error.bank_id && <small className="text-danger">*{"ငွေပေးချေမှုနည်းလမ်း ရွေးချယ်ပါ။"}</small> }
                </div>
            </div>
            <div className="row mb-2">
                <div className="profileTitle col-5 mt-2">{content?.wallet?.account_name} : </div>
                <div className="col-7">
                  <input type="text" 
                  className="form-control" 
                  placeholder={content?.wallet?.account_name} 
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  />
                  {error.account_name && <span className="text-danger">*{error.account_name}</span> }
                </div>
            </div>
            <div className="row mb-2">
                <div className="profileTitle col-5 mt-2">{content?.wallet?.account}: </div>
                <div className="col-7">
                  <input type="text" 
                  className="form-control" 
                  placeholder={content?.wallet?.account} 
                  value={accountNo}
                  onChange={(e) => setAccountNo(e.target.value)}
                  />
                  {error.account_number && <span className="text-danger">*{error.account_number}</span> }
                </div>
            </div>
            <div className="row mb-2">
                <div className="profileTitle col-5 mt-2">{content?.wallet?.amount} : </div>
                <div className="col-7">
                  <input type="number" 
                  className="form-control " 
                  placeholder={content?.wallet?.amount} 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  />
                  {error.amount && <span className="text-danger">*{error.amount}</span> }
                </div>
            </div>
            <div className="row mb-2">
                <div className="profileTitle col-5 mt-2">{content?.auth?.password}  : </div>
                <div className="col-7">
                  <input type="password" className="form-control"
                  placeholder={content?.auth?.password} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  {error.password && <span className="text-danger">*{error.password}</span> }
                </div>
            </div>
            <div className="text-end mt-3">
                {loading ? <Spinner /> : 
                <button className="btn fw-bold text-black navLoginBtn">
                  {content?.btn?.submit}
                </button>}
            </div>
        </form>
      </div>

    </div>
  )
}

export default WithDraw