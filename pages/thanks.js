import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ThanksPage() {
  const [thanks, setThanks] = useState([]);

  useEffect(() => {
    fetch('/data/thanks.json')
      .then((res) => {
        if (!res.ok) throw new Error('فشل تحميل البيانات');
        return res.json();
      })
      .then((data) => setThanks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5" dir="rtl">
      <h2 className="mb-4 text-center">شهادات الشكر والتقدير</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>موضوع الشهادة</th>
              <th>الجهة التي أصدرتها</th>
              <th>تاريخها</th>
            </tr>
          </thead>
          <tbody>
            {thanks.length === 0 ? (
              <tr>
                <td colSpan="3">لا توجد بيانات للعرض</td>
              </tr>
            ) : (
              thanks.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.issuer}</td>
                  <td>{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
