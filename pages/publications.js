import { useEffect, useState } from "react";

export default function PublicationsPage() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/data/publications.json")
      .then((res) => res.json())
      .then((data) => setPublications(data))
      .catch((err) => console.error("فشل تحميل البيانات:", err));
  }, []);

  return (
    <div dir="rtl" className="container mt-5">
      <h2 className="text-center mb-4">الإنتاج العلمي</h2>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th>عنوان الإنتاج العلمي</th>
              <th>تاريخ النشر</th>
              <th>اسم المجلة</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.journal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
