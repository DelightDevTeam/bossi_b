import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BASE_URL from "../../hooks/baseURL";
import useFetch from "../../hooks/useFetch";
import authCheck from "../../hooks/authCheck";

export default function GameLogs() {
  authCheck();
  const [selectedDate, setSelectedDate] = useState("today");
  const [url, setUrl] = useState(BASE_URL + "/wager-logs?type=" + selectedDate);
  const { data: logs, loading } = useFetch(url);

  useEffect(() => {
    setUrl(BASE_URL + "/wager-logs?type=" + selectedDate);
  }, [selectedDate]);

  return (
    <>
      <div className="container my-4 mb-5 pb-5">
        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            className={`btn btn-sm btn-${
              selectedDate === "today" ? "warning" : "outline-warning"
            }`}
            onClick={() => setSelectedDate("today")}
          >
            Today
          </button>
          <button
            className={`btn btn-sm btn-${
              selectedDate === "yesterday" ? "warning" : "outline-warning"
            }`}
            onClick={() => setSelectedDate("yesterday")}
          >
            Yesterday
          </button>
          <button
            className={`btn btn-sm btn-${
              selectedDate === "this_week" ? "warning" : "outline-warning"
            }`}
            onClick={() => setSelectedDate("this_week")}
          >
            This Week
          </button>
          <button
            className={`btn btn-sm btn-${
              selectedDate === "last_week" ? "warning" : "outline-warning"
            }`}
            onClick={() => setSelectedDate("last_week")}
          >
            Last Week
          </button>
        </div>
        <div className="table-responsive">
          <Table className="text-center">
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
              {!logs.length ? (
                <tr>
                  <td colSpan={6}>No Data</td>
                </tr>
              ) :
                logs.map((log, index) => (
                  <tr key={index}>
                    <td>{log.from_date}</td>
                    <td>{log.to_date}</td>
                    <td>{log.product}</td>
                    <td>{log.total_count}</td>
                    <td>{log.total_bet_amount}</td>
                    <td>{log.total_transaction_amount}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
