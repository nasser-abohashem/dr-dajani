import { useState, useRef, useEffect } from "react";

// 🎵 مكون الصوت المتكامل
function AudioPlayer({ audioUrl, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // تحديث الوقت الحالي أثناء التشغيل
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
      audio.play().then(() => setIsPlaying(true)).catch(() => console.log("اضغط لتشغيل الصوت"));
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

  return (
    <div style={{ marginTop: 10, textAlign: "center" }}>
      {audioUrl.includes("youtu") ? (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            marginTop: "10px",
          }}
        >
          <iframe
            src={audioUrl.replace("youtu.be", "www.youtube.com/embed").replace("watch?v=", "embed/")}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      ) : (
        <>
          <audio ref={audioRef} src={audioUrl} preload="metadata" onEnded={() => setIsPlaying(false)} />

          <div style={{ margin: "10px 0" }}>
            <button
              onClick={togglePlay}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: isPlaying ? "#e74c3c" : "#2ecc71",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {isPlaying ? "⏸️ إيقاف" : "▶️ تشغيل"}
            </button>

            <a
              href={audioUrl}
              download
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#3498db",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              ⬇️ تنزيل
            </a>
          </div>

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

          <div>
            <label>🔊</label>
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} />
          </div>
        </>
      )}
    </div>
  );
}

// 📘 الصفحة الرئيسية لدروس الأحاديث
export default function HadithLessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("/data/hadith.json")
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch((err) => console.error("Failed to load JSON", err));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "20px auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>الحديث وعلومه</h1>

      {lessons.length === 0 && <p style={{ textAlign: "center" }}>جاري التحميل...</p>}

      {lessons.map(({ id, title, description, author, audioUrl, transcript }) => (
        <div
          key={id}
          style={{
            border: "1px solid #004085",
            borderRadius: 8,
            marginBottom: 20,
            padding: 15,
            direction: "rtl",
            backgroundColor: "#e9f2ff",
          }}
        >
          <h2 style={{ color: "blue", textAlign: "center", fontWeight: "bold" }}>{title}</h2>

          <p style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>{description}</p>

          {author && (
            <p style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>{author}</p>
          )}

          <AudioPlayer audioUrl={audioUrl} title={title} />

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
