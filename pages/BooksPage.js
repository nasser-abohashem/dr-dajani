
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/data/books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('فشل تحميل البيانات', err));
  }, []);

  const coverStyle = {
    width: '100%',
    height: '320px',
    objectFit: 'contain',
    backgroundColor: '#f8f9fa',
    borderRadius: '6px 6px 0 0',
  };

  return (
    <div className="container mt-5" dir="rtl">
      <h2 className="text-center mb-4">الكتب</h2>
      <div className="row">
        {books.map(book => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow">
              {/* الرابط للصورة والعنوان والوصف */}
              <Link href={`/book/${book.id}`} legacyBehavior>
                <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  {/* <img
                    src={book.cover}
                    alt={book.title}
                    style={coverStyle}
                  /> */}
                  <div className="card-body text-center">
                    <h5 style={{ color: "blue" }}>{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <p style={{ color: "red", fontWeight: "bold" }}> {book.author}</p>
                  </div>
                </a>
              </Link>

              {/* زر عرض الكتاب منفصل */}
              <div className="card-footer text-center">
                <Link href={`/book/${book.id}`} legacyBehavior>
                  <a className="btn btn-primary" style={{ width: '100%' }}>
                    عرض الكتاب
                  </a>
                </Link>
              </div>
              {/* زر تنزيل PDF */}
      <div className="text-center mb-3">
        <a href={book.pdf} download className="btn btn-success">
          تنزيل PDF
        </a>
      </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
