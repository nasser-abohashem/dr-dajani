import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [publications, setPublications] = useState([]);
  const [securityActivities, setSecurityActivities] = useState([]);
  const [thanks, setThanks] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [mohadrat, setMohadrat] = useState([]);

  // لتخزين حالة تشغيل كل ملف صوتي
  const audioRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const files = [
      { url: "/data/trainings.json", setter: setTrainings },
      { url: "/data/conferences.json", setter: setConferences },
      { url: "/data/memberships.json", setter: setMemberships },
      { url: "/data/publications.json", setter: setPublications },
      { url: "/data/security_activities.json", setter: setSecurityActivities },
      { url: "/data/thanks.json", setter: setThanks },
      { url: "/data/lectures.json", setter: setLectures },
      { url: "/data/mohadrat.json", setter: setMohadrat },
    ];

    files.forEach(file => {
      fetch(file.url)
        .then(res => res.json())
        .then(json => file.setter(json))
        .catch(err => console.error(`خطأ في تحميل ${file.url}:`, err));
    });

    Promise.all([
      fetch("/data/books.json").then(res => res.json()),
      fetch("/data/booksfkry.json").then(res => res.json())
    ])
      .then(([booksData, booksFkryData]) => {
        const regularBooks = booksData.map(book => ({ ...book, type: "regular" }));
        const fkryBooks = booksFkryData.map(book => ({ ...book, type: "fkry" }));
        setBooks([...regularBooks, ...fkryBooks]);
      })
      .catch(err => console.error("خطأ في تحميل البيانات:", err));

  }, []);

  const toggleAudio = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingId && playingId !== id) {
      // إيقاف أي صوت آخر
      const currentAudio = audioRefs.current[playingId];
      if (currentAudio) currentAudio.pause();
    }

    if (audio.paused) {
      audio.play();
      setPlayingId(id);
    } else {
      audio.pause();
      setPlayingId(null);
    }
  };

  return (
    <div dir="rtl" className="bg-light text-dark">
      <header
        className="bg-primary text-white text-center py-5 shadow-lg"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        <div className="container px-4">
          <h1 className="fs-3 fw-bold mb-3" style={{ letterSpacing: "0.05em", lineHeight: 1.3 }}>
            الموقع الرسمي لفضيلة الشيخ/ أ.د. حمود بن محسن الدعجاني
          </h1>
          <p className="lead fs-5" style={{ maxWidth: "720px", margin: "0 auto", opacity: 0.85 }}>
            سيرة ذاتية، مؤلفات، دروس ومحاضرات، أنشطة علمية، عضويات، مؤتمرات، مشاركات، ندوات، .. وغيرها
          </p>
        </div>
      </header>

      <main className="container my-5">
        {/* المؤلفات */}
        <section id="books" className="mb-5">
          <h2 className="mb-4 text-center border-bottom border-3 border-primary pb-2">
            الكتب والبحوث
          </h2>
          <div className="row">
            {books.length > 0 ? (
              books.map((book, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <h5>{book.title}</h5>
                      <p>{book.description}</p>
                      <p style={{ color: "red", fontWeight: "bold" }}>{book.author}</p>
                      <a
                        href={book.type === "fkry" ? `/bookfkry/${book.id}` : `/book/${book.id}`}
                        className="btn btn-outline-primary"
                      >
                        عرض الكتاب
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">لا توجد مؤلفات</p>
            )}
          </div>
        </section>

        {/* المحاضرات */}
        <section id="lectures" className="mb-5">
          <h2 className="mb-4 text-center border-bottom border-3 border-primary pb-2">
            المحاضرات والدروس
          </h2>
          <div className="row justify-content-center">
            {mohadrat.length > 0 ? (
              mohadrat.map(({ id, title, speaker, audioUrl }) => (
                <div key={id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm text-center">
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title text-primary fw-bold">{title}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">{speaker}</h6>
                      <audio ref={(el) => (audioRefs.current[id] = el)} className="w-100 mt-auto">
                        <source src={audioUrl} />
                        المتصفح لا يدعم عنصر الصوت.
                      </audio>
                      <button
                        className="btn btn-outline-success mt-2"
                        onClick={() => toggleAudio(id)}
                      >
                        {playingId === id ? "إيقاف" : "تشغيل"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">لا توجد محاضرات للعرض</p>
            )}
          </div>
        </section>

        {/* باقي الأقسام... استخدم نفس SectionTable كما في ملفك الأصلي */}
        
        {/* الدورات التدريبية */}
        <SectionTable
          id="trainings"
          title="الدورات التدريبية"
          columns={["اسم الدورة", "الموقع", "التاريخ"]}
          data={trainings}
          rowRender={(item) => (
            <>
              <td>{item.courseName}</td>
              <td>{item.location}</td>
              <td>{item.date}</td>
            </>
          )}
        />

        {/* المؤتمرات والورش */}
        <SectionTable
          id="conferences"
          title="المؤتمرات والورش"
          columns={["اسم المؤتمر / الورشة", "الموقع", "التاريخ"]}
          data={conferences}
          rowRender={(item) => (
            <>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.date}</td>
            </>
          )}
        />

        {/* العضويات */}
        <SectionTable
          id="memberships"
          title="العضويات"
          columns={["اسم الجمعية", "مقر الجمعية", "نوع العضوية"]}
          data={memberships}
          rowRender={(item) => (
            <>
              <td>{item["اسم الجمعية"]}</td>
              <td>{item["مقر الجمعية"]}</td>
              <td>{item["نوع العضوية"]}</td>
            </>
          )}
        />

        {/* المؤلفات والبحوث */}
        <SectionTable
          id="publications"
          title="المؤلفات والبحوث"
          columns={[
            "عنوان المؤلف/ البحث",
            "تاريخ النشر",
            "المجلة / الجهة الناشرة",
          ]}
          data={publications}
          rowRender={(item) => (
            <>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.journal}</td>
            </>
          )}
        />

        {/* الأنشطة في مجال الأمن الفكري */}
        <SectionTable
          id="security-activities"
          title="الأنشطة في مجال الأمن الفكري"
          columns={["النشاط"]}
          data={securityActivities}
          rowRender={(item) => <td>{item.activity}</td>}
        />

        {/* شهادات الشكر والتقدير */}
        <SectionTable
          id="thanks-section"
          title="شهادات الشكر والتقدير"
          columns={["العنوان", "الجهة المصدرة", "التاريخ"]}
          data={thanks}
          rowRender={(item) => (
            <>
              <td>{item.title}</td>
              <td>{item.issuer}</td>
              <td>{item.date}</td>
            </>
          )}
        />
      </main>

      {/* الفوتر */}
      {/* <footer className="bg-white text-center py-3 mt-5 shadow-sm border-top">
        <p className="mb-0">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </footer> */}
    </div>
  );
}

// مكون مساعد لعرض الجداول بتنسيق موحد
function SectionTable({ id, title, columns, data, rowRender }) {
  return (
    <section id={id} className="my-5">
      <h2 className="mb-4 text-center border-bottom border-3 border-primary pb-2">
        {title}
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center align-middle shadow-sm">
          <thead className="table-dark">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>{rowRender(item)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// أنماط الصور للغلاف والمحاضرات
const coverStyle = {
  width: "100%",
  height: "320px", // رفعت ال height شوي
  objectFit: "contain", // غيرت من cover إلى contain عشان ما يقطعش
  backgroundColor: "#f8f9fa", // خلفية فاتحة
  borderRadius: "6px 6px 0 0",
};
