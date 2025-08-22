// pages/targamah.js
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Targamah() {
  return (
    <>
      <Head>
        <title>الصفحة الرئيسية | فضيلة الشيخ أ.د حمود بن محسن الدعجاني</title>
        <meta
          name="description"
          content="ترجمة مختصرة لفضيلة الشيخ أ.د حمود بن محسن الدعجاني"
        />
      </Head>

      <main style={{ direction: "rtl", fontFamily: "'Amiri', serif", backgroundColor: "#f8f9fa", padding: "30px" }}>
        <div className="container">
          <p className="text-center mb-7" style={{ color: "#006400", fontWeight: "bold", fontSize: "1.5em" }}>
            بسم الله الرحمن الرحيم<br />
          </p>
          <h1 className="text-center mb-5" style={{ color: "#006400", fontWeight: "bold" }}>
            ترجمة مختصرة لفضيلة الشيخ أ.د حمود بن محسن الدعجاني
          </h1>

          {/* نسبه */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white fw-bold text-center">نسبه</div>
            <div className="card-body">
              هو فضيلة الشيخ حمود بن محسن بن ناصر الدعجاني، ويرجع نسبه إلى العضبان من الهدف من الدعاجين، وهم بطن من ذوي منصور من برقا من قبيلة عتيبة المشهورة في نجد والحجاز، والتي ترجع إلى هوازن – قبيلة عدنانية مشهورة.
            </div>
          </div>

          {/* مولده */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white fw-bold text-center">مولده</div>
            <div className="card-body">
              ولد حفظه الله في عودة سدير عام 1388، وهي بلدة من بلدان إقليم سدير التابع لمحافظة المجمعة في منطقة الرياض بالمملكة العربية السعودية.
            </div>
          </div>

          {/* العمل */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-warning fw-bold text-center">العمل</div>
            <div className="card-body">
              أستاذ الفقه المقارن بكلية الشريعة والحقوق بجامعة شقراء.
            </div>
          </div>

          {/* المؤهلات العلمية */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-danger text-white fw-bold text-center">المؤهلات العلمية</div>
            <div className="card-body">
              <ul>
                <li>دكتوراه في الفقه المقارن من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود الإسلامية.</li>
                <li>ماجستير في الفقه المقارن من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود الإسلامية.</li>
                <li>بكالوريوس في الشريعة من كلية الشريعة بجامعة الإمام محمد بن سعود الإسلامية.</li>
              </ul>
            </div>
          </div>

          {/* أبرز مشايخه */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-info fw-bold text-center">أبرز مشايخه</div>
            <div className="card-body">
              <ul>
                <li>سماحة الشيخ عبدالعزيز بن عبدالله بن باز – رحمه الله.</li>
                <li>سماحة الشيخ عبدالعزيز بن عبدالله آل الشيخ – حفظه الله.</li>
                <li>معالي الشيخ الدكتور يعقوب أباحسين – رحمه الله.</li>
              </ul>
            </div>
          </div>

          {/* الإجازات العلمية */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-secondary text-white fw-bold text-center">الإجازات العلمية</div>
            <div className="card-body">
              حصل على العديد من الإجازات العلمية في كتب القراءات والعقيدة والحديث والفقه واللغة العربية.
            </div>
          </div>

          {/* الخبرات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-secondary text-white fw-bold text-center">أبرز الخبرات العملية</div>
            <div className="card-body">
              <ul>
                <li>عضو هيئة التدريس بكلية الشريعة والحقوق بجامعة شقراء.</li>
                <li>مساعد المشرف على وحدة التوعية الفكرية بجامعة شقراء.</li>
                <li>عضو وحدة التوعية الفكرية بجامعة شقراء.</li>
                <li>وكيل عمادة كلية التربية للشؤون التعليمية بجامعة شقراء.</li>
                <li>وكيل عمادة خدمة المجتمع والتعليم المستمر بجامعة شقراء.</li>
              </ul>
            </div>
          </div>

          {/* الكتب */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-dark text-white fw-bold text-center">أبرز الكتب والأبحاث العلمية المنشورة</div>
            <div className="card-body">
              <ul>
                <li>رياض الصائمين.</li>
                <li>أربعون حديثاً في الحث على الوسطية والاعتدال.</li>
                <li>جهود المملكة العربية السعودية في نشر ثقافة التسامح والتعايش (رؤية المملكة 2030 أنموذجًا).</li>
                <li>التأصيل الشرعي لمفهوم الهوية الوطنية.</li>
                <li>الإرهاب الإلكتروني (المفهوم والأسباب والأهداف والخصائص والأساليب).</li>
                <li>جهود المملكة العربية السعودية في خدمة كتاب الله.</li>
                <li>نشأة الاجتهاد الجماعي – دراسة فقهية.</li>
                <li>الجريمة الإلكترونية – دراسة فقهية تطبيقية.</li>
                <li>الملكية الفكرية وبيع حقوقها في مجال العلوم الشرعية.</li>
                <li>تغير قيمة النقود وأثره في الحقوق والالتزامات – دراسة فقهية.</li>
                <li>الاستفادة من الخلايا الجذعية في العلاج – دراسة فقهية.</li>
                <li>الاتفاقية العامة الإطارية – دراسة فقهية.</li>
                <li>المسؤولية الجنائية الناشئة عن العدوى بجائحة فيروس كورونا المستجد (COVID-19) – دراسة فقهية.</li>
                <li>التجارب العلمية على المصابين بفيروس كورونا المستجد (COVID-19) – دراسة فقهية.</li>
                <li>الترخيص الإجباري لإنتاج لقاح فيروس كورونا المستجد (COVID-19) – دراسة فقهية.</li>
                <li>تسعير الخدمات الصحية للمصابين بفيروس كورونا المستجد (COVID-19) – دراسة فقهية تطبيقية.</li>
                <li>عقد البيع فوب (F.O.B) – دراسة فقهية.</li>
              </ul>
            </div>
          </div>

          {/* العضويات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white fw-bold text-center">العضويات</div>
            <div className="card-body">
              <ul>
                <li>عضو اللجنة الدائمة للتوعية الفكرية بجامعة شقراء.</li>
                <li>عضو اللجنة الدائمة لمتابعة المنهج الوسطي بجامعة شقراء.</li>
                <li>عضو اللجنة العليا للندوة العلمية (الهوية الوطنية في ضوء التحديات المعاصرة).</li>
                <li>عضو الجمعية القضائية السعودية.</li>
                <li>عضو الجمعية الفقهية السعودية.</li>
                <li>عضو الهيئة الإسلامية العالمية للاقتصاد والتمويل.</li>
              </ul>
            </div>
          </div>

          {/* المؤتمرات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white fw-bold text-center">المؤتمرات والمشاركات العامة</div>
            <div className="card-body">
              <ul>
                <li>مؤتمر المذاهب الفقهية – الجامعة الإسلامية.</li>
                <li>المؤتمر الدولي للهوية الوطنية – رؤية 2030.</li>
                <li>المؤتمر الدولي للتعليم العالي.</li>
                <li>مؤتمر المدينة المنورة الدولي للشريعة والدراسات الإسلامية.</li>
                <li>رئيس تحكيم مسابقة سعادة رئيس الجامعة للقرآن والسنة.</li>
                <li>الإشراف والمناقشة للعديد من رسائل الدكتوراه والماجستير.</li>
                <li>تحكيم العديد من البحوث والدراسات الشرعية.</li>
                <li>عضو التوعية الإسلامية في الحج.</li>
                <li>إلقاء العديد من المحاضرات والندوات والدروس العلمية تحت إشراف وزارة الشؤون الإسلامية.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
