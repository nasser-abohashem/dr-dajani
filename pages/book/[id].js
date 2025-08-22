// import path from 'path';
// import fs from 'fs/promises';
// import PdfViewer from '../../components/PdfViewer';

// export async function getStaticPaths() {
//   const filePath = path.join(process.cwd(), 'public', 'data', 'books.json');
//   const jsonData = await fs.readFile(filePath, 'utf8');
//   const books = JSON.parse(jsonData);

//   const paths = books.map(book => ({
//     params: { id: book.id }
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const filePath = path.join(process.cwd(), 'public', 'data', 'books.json');
//   const jsonData = await fs.readFile(filePath, 'utf8');
//   const books = JSON.parse(jsonData);

//   const book = books.find(b => b.id === params.id) || null;

//   return {
//     props: { book }
//   };
// }

// export default function BookDetail({ book }) {
//   if (!book) return <p className="text-center mt-5">الكتاب غير موجود</p>;

//   return (
//     <div className="container mt-5" dir="rtl">
//       <h2 className="text-center mb-4">{book.title}</h2>
//       <div style={{ textAlign: "center" }}>
//         {/* <img
//           src={bookfkry.cover}
//           alt={bookfkry.title}
//           style={{ maxWidth: "100px", height: "auto" }}
//         /> */}
//         <p>
//           <strong></strong> {book.author}
//         </p>
//         <p>
//           <strong></strong> {book.description}
//         </p>
//       </div>

//       <div className="mt-4 text-center">
//         <PdfViewer pdfUrl={book.pdf} />
//       </div>
//     </div>
//   );
// }
// ======================================
import path from 'path';
import fs from 'fs/promises';
import PdfViewer from '../../components/PdfViewer';

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'books.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const books = JSON.parse(jsonData);

  const paths = books.map(book => ({
    params: { id: String(book.id) }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'books.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const books = JSON.parse(jsonData);

  const book = books.find(b => String(b.id) === params.id) || null;

  return {
    props: { book }
  };
}

function BookDetail({ book }) {
  if (!book) {
    return (
      <div className="container mt-5" dir="rtl">
        <p className="text-center">الكتاب غير موجود</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" dir="rtl">
      <h2 className="text-center mb-4">{book.title}</h2>
      <div style={{ textAlign: 'center' }}>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>

      {/* زر تنزيل PDF */}
      <div className="text-center mb-3">
        <a href={book.pdf} download className="btn btn-success">
          تنزيل PDF
        </a>
      </div>

      <div className="mt-4 text-center">
        <PdfViewer pdfUrl={book.pdf} />
      </div>
    </div>
  );
}

export default BookDetail;
