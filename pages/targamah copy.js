// pages/index.js
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
          <h1 className="text-center mb-5" style={{ color: "#006400", fontWeight: "bold" }}>
            ترجمة مختصرة لفضيلة الشيخ أ.د حمود بن محسن الدعجاني
          </h1>

          {/* نسبه */}
          <div className="card shadow-sm mb-4" >
            <div className="card-header bg-success text-white fw-bold" style={{ textAlign: 'center' }}>نسبه</div>
            {/* <div className="card-header bg-success text-white fw-bold" style={{ textAlign: 'center' }}>نسبه</div> */}

            <div className="card-body">
              هو فضيلة الشيخ حمود بن محسن بن ناصر الدعجاني، ويرجع نسبه إلى
              العضبان من الهدف من الدعاجين، وهم بطن من ذوي منصور من برقا من
              قبيلة عتيبة المشهورة في نجد والحجاز، والتي ترجع إلى هوازن – قبيلة
              عدنانية مشهورة.
            </div>
          </div>

          {/* مولده */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white fw-bold" style={{ textAlign: 'center' }}>مولده</div>
            <div className="card-body">
              ولد حفظه الله في عودة سدير، وهي بلدة من بلدان إقليم سدير التابع
              لمحافظة المجمعة في منطقة الرياض بالمملكة العربية السعودية.
            </div>
          </div>

          {/* العمل */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-warning fw-bold" style={{ textAlign: 'center' }}>العمل</div>
            <div className="card-body">
              أستاذ الفقه المقارن بكلية الشريعة والحقوق بجامعة شقراء.
            </div>
          </div>

          {/* المؤهلات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-danger text-white fw-bold" style={{ textAlign: 'center' }}>المؤهلات العلمية</div>
            <div className="card-body">
              <ul>
                <li>دكتوراه في الفقه المقارن من المعهد العالي للقضاء، جامعة الإمام محمد بن سعود الإسلامية.</li>
                <li>ماجستير في الفقه المقارن من المعهد العالي للقضاء، جامعة الإمام محمد بن سعود الإسلامية.</li>
                <li>بكالوريوس في الشريعة من كلية الشريعة، جامعة الإمام محمد بن سعود الإسلامية.</li>
              </ul>
            </div>
          </div>

          {/* أبرز مشايخه */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-info fw-bold" style={{ textAlign: 'center' }}>أبرز مشايخه</div>
            <div className="card-body">
              <ul>
                <li>سماحة الشيخ عبدالعزيز بن عبدالله بن باز (رحمه الله).</li>
                <li>سماحة الشيخ عبدالعزيز بن عبدالله آل الشيخ (حفظه الله).</li>
                <li>معالي الشيخ الدكتور يعقوب أباحسين (رحمه الله).</li>
              </ul>
            </div>
          </div>

          {/* الخبرات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-secondary text-white fw-bold" style={{ textAlign: 'center' }}>الخبرات العملية</div>
            <div className="card-body">
              <ul>
                <li>عضو هيئة التدريس بكلية الشريعة والحقوق بجامعة شقراء.</li>
                <li>مساعد المشرف على وحدة التوعية الفكرية بجامعة شقراء.</li>
                <li>وكيل عمادة كلية التربية للشؤون التعليمية بجامعة شقراء.</li>
                <li>وكيل عمادة خدمة المجتمع والتعليم المستمر بجامعة شقراء.</li>
              </ul>
            </div>
          </div>

          {/* الكتب */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-dark text-white fw-bold" style={{ textAlign: 'center' }}>أبرز الكتب والأبحاث</div>
            <div className="card-body">
              <ul>
                <li>رياض الصائمين.</li>
                <li>أربعون حديثاً في الحث على الوسطية والاعتدال.</li>
                <li>جهود المملكة العربية السعودية في نشر ثقافة التسامح والتعايش.</li>
                <li>التأصيل الشرعي لمفهوم الهوية الوطنية.</li>
                <li>الإرهاب الإلكتروني – دراسة فقهية.</li>
                <li>نشأة الاجتهاد الجماعي – دراسة فقهية.</li>
              </ul>
            </div>
          </div>

          {/* العضويات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-primary text-white fw-bold" style={{ textAlign: 'center' }}>العضويات</div>
            <div className="card-body">
              <ul>
                <li>عضو اللجنة الدائمة للتوعية الفكرية بجامعة شقراء.</li>
                <li>عضو اللجنة العليا للندوة العلمية "الهوية الوطنية".</li>
                <li>عضو الجمعية القضائية السعودية.</li>
                <li>عضو الجمعية الفقهية السعودية.</li>
              </ul>
            </div>
          </div>

          {/* المؤتمرات */}
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-success text-white fw-bold" style={{ textAlign: 'center' }}>المؤتمرات والمشاركات</div>
            <div className="card-body">
              <ul>
                <li>مؤتمر المذاهب الفقهية – الجامعة الإسلامية.</li>
                <li>المؤتمر الدولي للهوية الوطنية – رؤية 2030.</li>
                <li>المؤتمر الدولي للتعليم العالي.</li>
                <li>مؤتمر المدينة المنورة الدولي للشريعة والدراسات الإسلامية.</li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
