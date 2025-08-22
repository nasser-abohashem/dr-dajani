import React, { useEffect, useState } from "react";

export default function SecurityActivities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/security_activities.json")
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("فشل تحميل الأنشطة:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-4">جاري تحميل الأنشطة...</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">الأنشطة في مجال الأمن الفكري والوطني</h1>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>م</th>
            <th>النشاط</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
