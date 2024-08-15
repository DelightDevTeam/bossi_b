import React, { useEffect, useState } from 'react'
import {  Table } from 'react-bootstrap'
 

export default function GameLogs() {
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
                    <small>From</small>
                    </th>
                    <th>
                    <small>To</small>
                    </th>
                    <th>
                    <small>ဂိမ်းနာမည်</small>
                    </th>
                    <th>
                    <small>အကြိမ်ရေ</small>
                    </th>
                    <th>
                    <small>လောင်းကြေး</small>
                    </th>
                    <th>
                    <small>လွှဲပြောင်းငွေ</small>
                    </th>
                </tr>
                </thead>
                <tbody>
                     <tr >
                    <td>{new  Date().toLocaleDateString()}</td>
                    <td>{new  Date().toLocaleDateString()}</td>
                    <td>
                        Slot
                    </td>
                    <td >
                        4
                    </td>
                    <td>2000</td>
                    <td  >4000</td>
                  </tr>
                 
                </tbody>
            </Table>
            
          </div>

        </div>
    </>
  )
}
