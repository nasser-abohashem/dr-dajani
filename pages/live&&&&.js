// مثال: pages/edit-live.js
import { useState } from 'react';

export default function EditLive({ id, currentLink }) {
  const [link, setLink] = useState(currentLink);
  const [msg, setMsg] = useState('');

  const updateLink = async () => {
    const res = await fetch(`/api/live/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ liveLink: link }),
    });
    const data = await res.json();
    setMsg(data.success ? 'تم التحديث' : data.message || data.error);
  };

  return (
    <div>
      <input value={link} onChange={(e) => setLink(e.target.value)} />
      <button onClick={updateLink}>تحديث الرابط</button>
      <p>{msg}</p>
    </div>
  );
}
