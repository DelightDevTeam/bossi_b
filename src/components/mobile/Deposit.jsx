import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import authCheck from "../../hooks/authCheck";

const Deposit = () => {
  authCheck();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedBank, setSelectedBank] = useState(null);
  const { data: agentData } = useFetch(BASE_URL + "/agent");
  const agent = agentData?.agent;
  const banks = agentData?.banks;

  const bank = banks?.find(
    (b) => String(b?.id) === String(agent?.payment_type_id)
  );
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCopyText = (e) => {
    e.preventDefault();
    if (selectedBank.account_number) {
      navigator.clipboard.writeText(selectedBank.account_number);
      toast.success("Copied", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  const deposit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (amount < 1000) {
      setLoading(false);
      toast.error("အနည်းဆုံး ၁၀၀၀ကျပ်မှ စဖြည့်ပေးပါရန်။", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }

    const inputData = {
      agent_payment_type_id: String(selectedBank?.id),
      amount,
    };

    try {
      const response = await fetch(BASE_URL + "/transaction/deposit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 422) {
          setErrMsg("");
          setError(errorData.errors || "Unknown error");
        } else if (response.status === 401) {
          setError("");
          setErrMsg(errorData.message || "Unauthorized");
        } else {
          throw new Error("Deposit Failed");
        }
        throw new Error("Deposit Failed");
      }

      const data = await response.json();
      setLoading(false);
      setAmount("");
      toast.success("ငွေသွင်းလွှာ ပို့ပြီးပါပြီ။", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
        hideProgressBar: false,
        closeOnClick: true,
      });
    } catch (error) {
      console.error("Error during fetch:", error);
      setLoading(false);
    }
  };


  return (
    <div>
      <ToastContainer />
      <form className="profileForm px-3 py-4 rounded-4" onSubmit={deposit}>
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold mb-3">ငွေသွင်းရန်</h5>
        </div>
        {selectedBank && (
          <div className="border border-light bg-transparent rounded-4 p-2 px-3 my-3 shadow-lg">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div>
                  <img
                    className="rounded-3 shadow"
                    src={selectedBank.image_url}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="ms-2">
                  <h6 className="fw-bold text-white">{selectedBank.account_name}</h6>
                  <h6 className="fw-bold text-white">{selectedBank.account_number}</h6>
                  {/* <h6 className="fw-bold text-white">
                    {selectedBank.account_number}
                  </h6> */}
                </div>
              </div>
              <div>
                <button className="btn btn-warning" onClick={handleCopyText}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}
        <Button className='mx-auto mb-4' onClick={()=>setShow(!show)} variant="outline-warning">Choose Bank Account</Button>
        {/* <div className="row mb-2">
          <div className="profileTitle col-5 mt-2">Bank Type : </div>
          <div className="col-7">
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="profileTitle col-5 mt-2">Account Name : </div>
          <div className="col-7">
            <input
              value={selectedBank?.accName}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="profileTitle col-5 mt-2">Account Number : </div>
          <div className="col-7">
            <input
              // value={selectedBank?.account}
              type="text"
              className="form-control"
            />
          </div>
        </div> */}
        <div className="row mb-2">
          <div className="profileTitle col-5 mt-2">Amount : </div>
          <div className="col-7">
            <input type="text" className="form-control " 
            onChange={e=> setAmount(e.target.value)}
            value={amount}
            />
            {error.amount && <span className="text-danger">{error.amount}</span>}
          </div>
        </div>
        {/* <div className="row mb-2">
          <div className="profileTitle col-5 mt-2">Receipt : </div>
          <div className="col-7">
            <input type="file" className="form-control " />
          </div>
        </div> */}
        <div className="text-end mt-3">
          <button className="btn text-black navLoginBtn" type="submit">Submit</button>
        </div>
      </form>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="cursor-pointer infoBankAccModal"
      >
        <div className="px-1 py-2">
          <Modal.Header>
            <Modal.Title className=" text-center mx-auto">
              <h5 className="fw-bold infoBankAccModalTitle">
                Choose Bank Account to Deposit
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="row">
            {banks && banks.map((bank, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setShow(false);
                    setSelectedBank(bank);
                  }}
                  className="d-flex gap-2 bg-white mb-2 p-2 rounded-3 text-black"
                >
                  <img
                    src={bank.img}
                    className="bankModalImg img-fluid rounded-2"
                  />
                  <div>
                    <p>Account : {bank.account_number}</p>
                    <p>Account name : {bank.account_name}</p>
                  </div>
                </div>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => setShow(false)}
              className="navLoginBtn btn text-black fw-bold w-100"
            >
              ပယ်ဖျက်သည်
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Deposit;
