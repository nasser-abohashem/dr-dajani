import Link from "next/link";
import { useEffect, useState } from "react";

const coverStyle = {
  width: "100%",
  height: "320px",
  objectFit: "contain",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px 6px 0 0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

export default function LecturesList() {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetch("/data/lectures.json")
      .then((res) => res.json())
      .then((data) => setLectures(data))
      .catch((err) => console.error("خطأ في تحميل البيانات:", err));
  }, []);

  return (
    <div className="container mt-5" dir="rtl" style={{ maxWidth: "1000px" }}>
      <h2 className="mb-4 text-center text-primary fw-bold">
         المحاضرات والكلمات
      </h2>
      <div className="row">
        {lectures.length === 0 ? (
          <p className="text-center fs-5 text-secondary">لا توجد دروس متاحة حالياً</p>
        ) : (
          lectures.map((lecture) => (
            <div key={lecture.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm rounded">
                <img
                  src={lecture.thumbnail}
                  alt={lecture.title}
                  className="card-img-top"
                  style={coverStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{lecture.title}</h5>
                  <p className="card-text text-secondary flex-grow-1" style={{ minHeight: "80px" }}>
                    {lecture.summary}
                  </p>
                  <Link href={`/lectures/${lecture.id}`} legacyBehavior>
                    <a className="btn btn-primary mt-auto shadow-sm">
                      إقرأ المزيد
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
