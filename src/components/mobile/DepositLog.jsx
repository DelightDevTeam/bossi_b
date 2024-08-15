import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import { Table } from 'react-bootstrap';

export default function DepositLog() {
    const [selectedDate,setSelectedDate]=useState('today'); 
     return (
      <>
          <div className="container my-4 mb-5 pb-5">
            <div className="d-flex justify-content-center mb-4 gap-3">
              <button className={`btn btn-sm btn-${selectedDate === "today" ? "warning" : "outline-warning"}`} onClick={()=>setSelectedDate("today")}>
                  Today
              </button>
              <button className={`btn btn-sm btn-${selectedDate === "yesterday" ? "warning" : "outline-warning"}`} onClick={()=>setSelectedDate("yesterday")}>
                  Yesterday
              </button>
              <button className={`btn btn-sm btn-${selectedDate === "this_week" ? "warning" : "outline-warning"}`} onClick={()=>setSelectedDate("this_week")}>
                  This Week
              </button>
              <button className={`btn btn-sm btn-${selectedDate === "last_week" ? "warning" : "outline-warning"}`} onClick={()=>setSelectedDate("last_week")}>
                  Last Week
              </button>
            </div>
            <div className="table-responsive">
              <Table className='text-center'>
                  <thead>
                  <tr>
                      <th>
                      <small>နေ့စွဲ</small>
                      </th>
                       <th> 
                      <small>ပမာဏ
                      </small>
                      </th>
                      <th>
                      <small>အမျိုးအစား</small>
                      </th>
                      <th>
                      <small>လက်ခံသူ
                      </small>
                      </th>
                   </tr>
                  </thead>
                  <tbody>
                       <tr >
                      <td>{new  Date().toLocaleDateString()}</td>
                      <td>40000</td>
                      <td>
                        Kpay
                      </td>
                      <td >
                          0912345689
                      </td>
                      </tr>
                   
                  </tbody>
              </Table>
              
            </div>
  
          </div>
      </>
    )
}
