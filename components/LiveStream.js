import { useEffect, useState } from 'react';

export default function LiveStream() {
  const [liveUrl, setLiveUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/live.json')
      .then((res) => res.json())
      .then((data) => {
        setLiveUrl(data.url || '');
        setLoading(false);
      })
      .catch((err) => {
        console.error('خطأ في تحميل البث:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center my-4">جارٍ تحميل البث...</div>;
  }

  return (
    <div className="my-4">
      {liveUrl ? (
        <div className="ratio ratio-16x9">
          <iframe
            src={liveUrl}
            title="البث المباشر"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="alert text-center" style={{ backgroundColor: "#ffe5e5", color: "red" }}>
          لا يوجد بث مباشر حاليًا
        </div>
      )}
    </div>
  );
}
