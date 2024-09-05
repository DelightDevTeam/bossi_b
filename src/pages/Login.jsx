import React, { useContext, useEffect, useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { BiLock, BiPhone, BiPhoneCall, BiUser } from "react-icons/bi";
import { FaIdCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/auth.css";
import BASE_URL from "../hooks/baseURL";

const LoginPage = () => {
  const [eye, setEye] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem("token");

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [navigate, auth]);

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = {
      phone: phone,
      password: password,
    };
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then(async (response) => {
        if (!response.ok) {
          setLoading(false);
          let errorData;
          try {
            errorData = await response.json();
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }

          if (response.status === 422) {
            setErrMsg("");
            setError(errorData.errors);
          } else if (response.status === 401) {
            setError("");
            setErrMsg(errorData.message);
          } else {
          }
          throw new Error("Login Failed");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.data.token) {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("ads", "on");
          navigate("/");
          console.log("success");
        } else {
          throw new Error("Token not found in response");
        }
      })
      .catch((error) => {});
  };
  return (
    <div className="authBg py-4 mb-5">
      <h3 className="fw-bold text-center mb-4">လော့အင်</h3>
      <form onSubmit={login} className="authForm mx-auto my-4">
        <div className="mb-3">
          <InputGroup>
            <InputGroup.Text className="formIcon" id="basic-addon1">
              <BiPhoneCall size={20} />
            </InputGroup.Text>
            <Form.Control
              placeholder="ဖုန်းနံပါတ်"
              aria-describedby="basic-addon1"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </InputGroup>
          {error.phone && <span className="text-danger">*{error.phone}</span>}
        </div>
        <div className="mb-3 password">
          <InputGroup>
            <InputGroup.Text className="formIcon" id="basic-addon1">
              <BiLock size={20} />
            </InputGroup.Text>
              <Form.Control
                placeholder="စကားဝှက်"
                type={`${eye ? "text" : "password"}`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <i className={`fas view cursor-pointer fa-${eye ? "eye-slash" : "eye"}`} onClick={() => setEye(!eye)}></i>
          </InputGroup>
          {error.password && (
            <span className="text-danger">*{error.password}</span>
          )}
        </div>

        <div className="authBtns">
          <button className="loginBtn mb-3" type="submit">
            <div className="text-center py-3">
              {loading && <Spinner size="sm" animation="border" />}
              <h5 className="fw-semibold d-inline ms-2">လော့အင်</h5>
            </div>
          </button>
          <Link to={"/register"}>
            <div className="registerBtn mb-3 ">
              <div className="text-center pt-3 ">
                <h5 className="fw-semibold">စာရင်းသွင်းရန်</h5>
              </div>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
