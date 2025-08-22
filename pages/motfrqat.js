import { useState, useRef, useEffect } from "react";

// 🎵 مكون الصوت المتكامل
function AudioPlayer({ audioUrl, title, description }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const timeUpdate = () => setCurrentTime(audio.currentTime);
    const loadedMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", timeUpdate);
    audio.addEventListener("loadedmetadata", loadedMeta);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
      audio.removeEventListener("loadedmetadata", loadedMeta);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => alert("اضغط لتشغيل الصوت"));
    }
  };

  const handleVolume = (e) => {
    const audio = audioRef.current;
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audio) audio.volume = vol;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audio) audio.currentTime = time;
  };

  const formatTime = (t) => {
    const min = Math.floor(t / 60);
    const sec = Math.floor(t % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const shareAudio = () => {
    const fullUrl = window.location.origin + audioUrl;
    const shareData = {
      title,
      text: `استمع لهذا الدرس لفضيلة الشيخ/ أ.د. حمود بن محسن الدعجاني: ${title}\n\n${description || ""}`,
      url: fullUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => console.log("خطأ بالمشاركة:", error));
    } else {
      const dummyInput = document.createElement("input");
      document.body.appendChild(dummyInput);
      dummyInput.value = fullUrl;
      dummyInput.select();
      document.execCommand("copy");
      document.body.removeChild(dummyInput);
      alert("تم نسخ رابط الصوت إلى الحافظة! يمكنك مشاركته في أي مكان.");
    }
  };

  return (
    <div style={{ marginTop: 10, textAlign: "center" }}>
      <audio ref={audioRef} src={audioUrl} preload="metadata" onEnded={() => setIsPlaying(false)} />

      {/* أزرار التشغيل والتنزيل والمشاركة */}
      <div
        style={{
          margin: "10px 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: isPlaying ? "#e74c3c" : "#2ecc71",
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {isPlaying ? "⏸️ إيقاف" : "▶️ تشغيل"}
        </button>

        <a
          href={audioUrl}
          download
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            backgroundColor: "#3498db",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ⬇️ تنزيل
        </a>

        <button
          onClick={shareAudio}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#f39c12",
            color: "#fff",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          📤 مشاركة
        </button>
      </div>

      {/* شريط التقدم */}
      <div style={{ margin: "10px 0" }}>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          style={{ width: "70%" }}
        />
        <span style={{ marginLeft: "10px" }}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      {/* التحكم في الصوت */}
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
        <label>🔊</label>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
      </div>
    </div>
  );
}

// 📘 صفحة متفرقات
export default function Motafrqaat() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("/data/motfrqat.json")
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch((err) => console.error("Failed to load JSON", err));
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", color: "green", fontWeight: "bold", marginBottom: "20px" }}>متفرقات</h1>

      {lessons.length === 0 && <p style={{ textAlign: "center" }}>جاري التحميل...</p>}

      {lessons.map(({ id, title, description, author, audioUrl, transcript }) => (
        <div
          key={id}
          style={{
            border: "1px solid #004085",
            borderRadius: 10,
            marginBottom: 20,
            padding: 15,
            direction: "rtl",
            backgroundColor: "#e9f2ff",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#007bff", textAlign: "center", fontWeight: "bold" }}>{title}</h2>
          {description && <p style={{ textAlign: "center", color: "#28a745", fontWeight: "bold" }}>{description}</p>}
          {author && <p style={{ textAlign: "center", color: "#28a745", fontWeight: "bold" }}>{author}</p>}

          <AudioPlayer audioUrl={audioUrl} title={title} description={description} />

          {transcript && (
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                marginTop: "15px",
                fontSize: "16px",
                lineHeight: "1.8",
                whiteSpace: "pre-wrap",
              }}
            >
              {transcript}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
