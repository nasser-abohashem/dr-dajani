// import { useState, useEffect } from "react";

// export default function LivePage() {
//   const [liveLink, setLiveLink] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/live")
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) setLiveLink(data.liveLink);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>جاري تحميل البث المباشر...</p>;

//   return (
//     <div style={{ textAlign: "center", padding: 20 }}>
//       <h2
//     className="mb-2"
//     style={{
//       fontFamily: "'Tajawal', sans-serif", // مثال على خط عربي جميل
//       fontWeight: "700",
//       fontSize: "2rem",
//       color: "#1a237e" // أزرق غامق
//     }}
//   >
//     البث المباشر لدرس فضيلة الشيخ/ أ.د. حمود بن محسن الدعجاني
//   </h2>

//       {liveLink ? (
        
//         <iframe
//           src={liveLink}
//           width="800"
//           height="450"
//           frameBorder="0"
//           allowFullScreen
//           title="Live Stream"
//         ></iframe>
//       ) : (
//         <p>لا يوجد بث مباشر حالياً</p>
//       )}
//     </div>
//   );
// }

// ==================================
import { useState, useEffect } from "react";

export default function LivePage() {
  const [liveLink, setLiveLink] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاولة جلب الرابط من ملف JSON أولًا
    fetch("/data/live.json")
      .then(res => res.json())
      .then(data => {
        if (data.liveLink && data.liveLink.trim() !== "") {
          setLiveLink(data.liveLink);
          setLoading(false);
        } else {
          // إذا لم يوجد رابط صالح في JSON، جلبه من MongoDB
          fetch("/api/live")
            .then(res => res.json())
            .then(dbData => {
              if (dbData.success) setLiveLink(dbData.liveLink);
              setLoading(false);
            })
            .catch(() => setLoading(false));
        }
      })
      .catch(() => {
        // في حالة فشل جلب JSON، نحاول MongoDB مباشرة
        fetch("/api/live")
          .then(res => res.json())
          .then(dbData => {
            if (dbData.success) setLiveLink(dbData.liveLink);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>جاري تحميل البث المباشر...</p>;

  return (
    <div className="container my-4">
      <div className="text-center my-4">
        <h2
          className="mb-2"
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "700",
            fontSize: "2rem",
            color: "#1a237e"
          }}
        >
          البث المباشر لدرس فضيلة الشيخ/ أ.د. حمود بن محسن الدعجاني
        </h2>

        <h2
          className="mb-2"
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "500",
            fontSize: "1.5rem",
            color: "#d32f2f"
          }}
        >
          {/* ضع عنوان الدرس هنا */}
        </h2>

        <h3
          className="mb-4"
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: "400",
            fontSize: "1.25rem",
            color: "#616161"
          }}
        >
          {/* في جامع (ضع اسم الجامع هنا) */}
        </h3>
      </div>

      {liveLink ? (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // نسبة 16:9
            height: 0,
            overflow: "hidden",
            maxWidth: "100%"
          }}
        >
          <iframe
            src={liveLink}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            frameBorder="0"
            allowFullScreen
            title="Live Stream"
          ></iframe>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>لا يوجد بث مباشر حالياً</p>
      )}
    </div>
  );
}
