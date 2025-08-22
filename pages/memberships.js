// pages/memberships.js

import { useEffect, useState } from "react";

export default function Memberships() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/memberships.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("فشل تحميل البيانات:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">العضويات في الجمعيات العلمية</h2>

      {data.length === 0 ? (
        <p className="text-center text-muted">جاري تحميل البيانات...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary text-center">
              <tr>
                <th>اسم الجمعية</th>
                <th>مقر الجمعية</th>
                <th>نوع العضوية</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index}>
                  <td>{entry["اسم الجمعية"]}</td>
                  <td>{entry["مقر الجمعية"]}</td>
                  <td>{entry["نوع العضوية"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
