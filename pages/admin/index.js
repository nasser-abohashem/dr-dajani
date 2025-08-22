import { useState, useEffect } from "react";

export default function Home() {
  const [liveLink, setLiveLink] = useState("");
  const [message, setMessage] = useState("");

  // جلب الرابط الحالي عند التحميل
  useEffect(() => {
    fetch("/api/live")
      .then(res => res.json())
      .then(data => {
        if (data.success) setLiveLink(data.liveLink);
      });
  }, []);

  const handleSave = async () => {
    const res = await fetch("/api/live/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liveLink }),
    });
    const data = await res.json();
    setMessage(data.success ? "تم التحديث بنجاح ✅" : "حدث خطأ ❌");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h2>تعديل رابط البث المباشر</h2>
      <input
        type="text"
        value={liveLink}
        onChange={(e) => setLiveLink(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleSave} style={{ padding: "10px 20px" }}>حفظ</button>
      {message && <p>{message}</p>}
    </div>
  );
}
