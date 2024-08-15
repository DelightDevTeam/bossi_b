import React, { useEffect, useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import BASE_URL from '../../hooks/baseURL';
import useData from '../../hooks/useData';

export default function TransferLogs() {
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
                      <small>ဂိမ်းနာမည်</small>
                      </th>
                      <th>
                      <small>အမျိုးအစား</small>
                      </th>
                      <th>
                      <small>နိုင်/ရှုံး</small>
                      </th>
                      <th>
                      <small>လက်ကျန်</small>
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                       <tr >
                      <td>{new  Date().toLocaleDateString()}</td>
                      <td>Game name</td>
                      <td>
                          Slot
                      </td>
                      <td >
                          Win
                      </td>
                      <td>2000</td>
                     </tr>
                   
                  </tbody>
              </Table>
              
            </div>
  
          </div>
      </>
    )
   
}
