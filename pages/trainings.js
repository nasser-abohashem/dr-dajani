import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TrainingsPage() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch("/data/trainings.json")
      .then((res) => {
        if (!res.ok) throw new Error("فشل تحميل البيانات");
        return res.json();
      })
      .then((data) => setTrainings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5" dir="rtl">
      <h2 className="mb-4 text-center">الدورات التدريبية</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>اسم الدورة</th>
              <th>مكان الانعقاد</th>
              <th>تاريخ الانعقاد</th>
            </tr>
          </thead>
          <tbody>
            {trainings.length === 0 ? (
              <tr>
                <td colSpan="3">لا توجد بيانات للعرض</td>
              </tr>
            ) : (
              trainings.map((training, index) => (
                <tr key={index}>
                  <td>{training.courseName}</td>
                  <td>{training.location}</td>
                  <td>{training.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
