import { useEffect, useState } from "react";

export default function ConferencesPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/conferences.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">المؤتمرات والندوات وورش العمل</h1>
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>اسم المؤتمر أو الندوة أو ورشة العمل</th>
              <th>مكان الانعقاد</th>
              <th>تاريخ الانعقاد</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
