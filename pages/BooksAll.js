import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BooksAll() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/data/books.json").then(res => res.json()),
      fetch("/data/booksfkry.json").then(res => res.json())
    ])
      .then(([booksData, booksFkryData]) => {
        // أضف نوع لكل مجموعة كتب
        const regularBooks = booksData.map(book => ({ ...book, type: "regular" }));
        const fkryBooks = booksFkryData.map(book => ({ ...book, type: "fkry" }));
        setBooks([...regularBooks, ...fkryBooks]);
      })
      .catch(err => console.error("خطأ في تحميل البيانات:", err));
  }, []);

  return (
    <div className="container my-5" dir="rtl">
      <h2 className="text-center mb-4">جميع المؤلفات</h2>
      <div className="row">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5>{book.title}</h5>
                  <p>{book.description}</p>
                  <p style={{ color: "red", fontWeight: "bold" }}>{book.author}</p>
                  
                  {/* الرابط حسب نوع الكتاب */}
                  <a
                    href={book.type === "fkry" ? `/bookfkry/${book.id}` : `/book/${book.id}`}
                    className="btn btn-outline-primary"
                  >
                    عرض الكتاب
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">لا توجد مؤلفات</p>
        )}
      </div>
    </div>
  );
}
