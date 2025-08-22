// pages/supervision.jsx
import { useEffect, useState } from "react";

export default function Supervision() {
  const [supervisions, setSupervisions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/supervision.json")
      .then((res) => res.json())
      .then((data) => {
        setSupervisions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load supervision data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">الإشراف على الرسائل العلمية</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>عنوان الرسالة</th>
            <th>الصفة</th>
            <th>المرحلة</th>
            <th>الجامعة</th>
          </tr>
        </thead>
        <tbody>
          {supervisions.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.role}</td>
              <td>{item.stage}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
