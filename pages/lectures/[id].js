import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const coverStyle = {
  width: "100%",
  height: "320px",
  objectFit: "contain",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px 6px 0 0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

export default function LectureDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [lecture, setLecture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playVideo, setPlayVideo] = useState(false); // حالة تشغيل الفيديو

  useEffect(() => {
    if (!id) return;

    fetch("/data/lectures.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === String(id));
        setLecture(found || null);
        setLoading(false);
        setPlayVideo(false); // كل مرة يتغير id، الفيديو يرجع متوقف
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-5 fs-5 text-primary">
        جاري التحميل...
      </p>
    );

  if (!lecture)
    return (
      <p className="text-center mt-5 fs-5 text-danger">
        لم يتم العثور على المحاضرة
      </p>
    );

  return (
    <div
      className="container mt-5 p-4 bg-white rounded shadow-sm"
      dir="rtl"
      style={{ maxWidth: "900px" }}
    >
      <h2 className="mb-3 fw-bold text-center text-primary">{lecture.title}</h2>

      {lecture.speaker && (
        <h5 className="text-muted mb-4 text-center fst-italic">{lecture.speaker}</h5>
      )}

      {/* لو الفيديو مش شغال، نعرض صورة الغلاف مع زر تشغيل */}
      {lecture.thumbnail && !playVideo && (
        <div
          onClick={() => setPlayVideo(true)}
          style={{
            position: "relative",
            width: "100%",
            height: "320px",
            cursor: "pointer",
            borderRadius: "6px 6px 0 0",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#f8f9fa",
          }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") setPlayVideo(true);
          }}
          aria-label="تشغيل الفيديو"
        >
          <img
            src={lecture.thumbnail}
            alt={`غلاف فيديو ${lecture.title}`}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "64px",
              color: "rgba(255,255,255,0.8)",
              textShadow: "0 0 10px rgba(0,0,0,0.7)",
              pointerEvents: "none",
            }}
          >
            ►
          </div>
        </div>
      )}

      {/* لما يضغط على زر التشغيل يظهر الفيديو */}
      {playVideo && lecture.videoUrl && (
        <div
          className="mb-4"
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
          }}
        >
          <iframe
            src={lecture.videoUrl} // تأكد إن الفيديو في URL مافيش autoplay=1
            title={lecture.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </div>
      )}

      <p className="lead text-secondary" style={{ lineHeight: 1.6 }}>
        {lecture.summary}
      </p>

      <div className="text-center">
        <Link href="/lectures" className="btn btn-outline-primary btn-lg shadow-sm">
          العودة إلى قائمة الدروس والمحاضرات
        </Link>
      </div>
    </div>
  );
}
