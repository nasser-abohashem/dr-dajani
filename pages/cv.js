import { useEffect, useState } from "react";
import Head from "next/head";

export default function CVPage() {
  const [cv, setCv] = useState(null);

  useEffect(() => {
    fetch("/data/cv.json")
      .then((res) => res.json())
      .then(setCv)
      .catch((err) => console.error("فشل تحميل السيرة:", err));
  }, []);

  if (!cv) return <p className="text-center mt-5">جاري تحميل السيرة...</p>;

  return (
    <>
      <Head>
        <title>السيرة الذاتية - {cv.name}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css"
          rel="stylesheet"
        />
      </Head>

      <div style={pageStyle}>
        <div style={heroStyle}>
          <div>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
              السيرة الذاتية
            </h1>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{cv.name}</p>
          </div>
        </div>

        <Section title="العمل الحالي" rows={[{ label: "", value: cv.currentJob }]} />
        <Section title="المعلومات الشخصية" rows={cv.personalInfo} />
        <Section title="معلومات العمل" rows={cv.workInfo} />
        <Section title="معلومات التواصل" rows={cv.contact.map((c) => ({
          ...c,
          value: c.isEmail ? <a href={`mailto:${c.value}`}>{c.value}</a> : c.value
        }))} />
        <ListSection title="المؤهلات العلمية" items={cv.qualifications} />
        <ListSection title="أبرز المشايخ" items={cv.teachers} />
        <Section title="الإجازات العلمية" rows={[{ label: "", value: cv.experienceSummary }]} />
        <ListSection title="الخبرات العملية" items={cv.experiences} />
        <ListSection title="العضويات" items={cv.memberships} />
        <ListSection title="المؤتمرات والمشاركات العامة" items={cv.conferences} />
        <ListSection title="أبرز المؤلفات العلمية" items={cv.books} />
        <ListSection title="مجالات الاهتمام" items={cv.interests} />

        <div className="bg-white shadow p-4 mt-4 rounded">
          <h5 className="mb-3 text-primary">السيرة الذاتية المختصرة (PDF)</h5>
          <iframe
            src={cv.cvPdf}
            width="100%"
            height="700px"
            style={{ border: "1px solid #ccc", borderRadius: "0.5rem" }}
            title="السيرة الذاتية المختصرة"
          ></iframe>
        </div>
      </div>
    </>
  );
}

function Section({ title, rows }) {
  return (
    <div className="bg-white shadow p-4 mt-4 rounded">
      <h5 className="mb-4 text-primary">{title}</h5>
      <div className="row">
        {rows.map((row, index) => (
          <div key={index} className="col-md-6 mb-2">
            {row.label && <strong>{row.label}: </strong>}
            {row.value}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="bg-white shadow p-4 mt-4 rounded">
      <h5 className="mb-3 text-primary">{title}</h5>
      <ul className="list-unstyled mb-0">
        {items.map((item, index) => (
          <li key={index} className="mb-1">• {item}</li>
        ))}
      </ul>
    </div>
  );
}

const pageStyle = {
  backgroundColor: "#f2f4f7",
  fontFamily: "'Tajawal', 'Segoe UI', sans-serif",
};
const heroStyle = {
  height: "180px",
  background: "url('/pattern-ncnp.png') repeat",
  backgroundColor: "#d6e6f2",
  color: "#003865",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderBottom: "5px solid #003865",
};
