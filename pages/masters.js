import { useEffect, useState } from "react";

export default function MastersPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/masters.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("فشل تحميل البيانات:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">الماجستير والدكتوراه</h1>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>المرحلة</th>
            <th>عنوان الرسالة</th>
            <th>الجامعة</th>
            <th>السنة</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.type}</td>
              <td>{entry.title}</td>
              <td>{entry.university}</td>
              <td>{entry.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
