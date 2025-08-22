import { useState, useEffect } from "react";

export default function LiveEdit() {
  const [liveLink, setLiveLink] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 جلب الرابط الحالي عند تحميل الصفحة
  useEffect(() => {
    const fetchLive = async () => {
      try {
        const res = await fetch("/api/live");
        const data = await res.json();
        if (data.success) setLiveLink(data.liveLink);
      } catch (error) {
        setMessage("⚠️ فشل جلب الرابط الحالي");
      }
    };
    fetchLive();
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/live", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ liveLink }),
      });

      const data = await res.json();
      if (data.success) setMessage("✅ تم تحديث الرابط بنجاح");
      else setMessage("❌ خطأ: " + data.message);
    } catch (error) {
      setMessage("⚠️ فشل الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>تعديل رابط البث المباشر</h1>

      <input
        type="text"
        placeholder="أدخل الرابط الجديد"
        value={liveLink}
        onChange={(e) => setLiveLink(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <button
        onClick={handleUpdate}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "⏳ جاري التحديث..." : "تحديث الرابط"}
      </button>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}
