import LiveStream from '../components/LiveStream';

export default function LivePage() {
  return (
    <div className="container my-4">
      <div className="text-center my-4">
  <h2
    className="mb-2"
    style={{
      fontFamily: "'Tajawal', sans-serif", // مثال على خط عربي جميل
      fontWeight: "700",
      fontSize: "2rem",
      color: "#1a237e" // أزرق غامق
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
      color: "#d32f2f" // أحمر للتأكيد
    }}
  >
    {/* بعنوان: (ضع عنوان الدرس هنا) */}
  </h2>

  <h3
    className="mb-4"
    style={{
      fontFamily: "'Tajawal', sans-serif",
      fontWeight: "400",
      fontSize: "1.25rem",
      color: "#616161" // رمادي هادئ
    }}
  >
    {/* في جامع (ضع اسم الجامع هنا) */}
  </h3>
</div>

      <LiveStream />
    </div>
  );
}



