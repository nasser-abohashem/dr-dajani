import path from "path";
import fs from "fs/promises";
import PdfViewer from "../../components/PdfViewer";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "data", "booksfkry.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const booksfkry = JSON.parse(jsonData);

  const paths = booksfkry.map((bookfkry) => ({
    params: { id: bookfkry.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "data", "booksfkry.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const booksfkry = JSON.parse(jsonData);

  const bookfkry = booksfkry.find((b) => b.id === params.id) || null;

  return {
    props: { bookfkry },
  };
}

export default function BookDetail({ bookfkry }) {
  if (!bookfkry) return <p className="text-center mt-5">الكتاب غير موجود</p>;

  return (
    <div className="container mt-5" dir="rtl">
      <h2 className="text-center mb-4">{bookfkry.title}</h2>
      <div style={{ textAlign: "center" }}>
        {/* <img
          src={bookfkry.cover}
          alt={bookfkry.title}
          style={{ maxWidth: "100px", height: "auto" }}
        /> */}
        <p>
          <strong></strong> {bookfkry.author}
        </p>
        <p>
          <strong></strong> {bookfkry.description}
        </p>
      </div>

{/* زر تنزيل PDF */}
<div className="text-center mb-3">
        <a href={bookfkry.pdf} download className="btn btn-success">
          تنزيل PDF
        </a>
      </div>
      <div className="mt-4 text-center">
        <PdfViewer pdfUrl={bookfkry.pdf} />
      </div>
    </div>
  );
}
