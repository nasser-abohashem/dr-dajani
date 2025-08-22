import { useEffect, useRef, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

export default function PdfViewer({ pdfUrl }) {
  const canvasRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputPage, setInputPage] = useState('1');

  const lastScrollTimeRef = useRef(0);
  const dragStartX = useRef(null);

  useEffect(() => {
    let isMounted = true;

    getDocument(pdfUrl)
      .promise.then((pdf) => {
        if (!isMounted) return;
        setNumPages(pdf.numPages);

        pdf.getPage(pageNumber).then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          page.render(renderContext);
        });
      })
      .catch((error) => {
        console.error('خطأ في تحميل أو عرض ملف PDF:', error);
      });

    return () => {
      isMounted = false;
    };
  }, [pdfUrl, pageNumber]);

  const handleWheel = (e) => {
    e.preventDefault();
    const now = Date.now();
    const delay = 300;
    if (now - lastScrollTimeRef.current < delay) return;

    if (e.deltaY < 0) {
      setPageNumber((p) => (p > 1 ? p - 1 : p));
      lastScrollTimeRef.current = now;
    } else if (e.deltaY > 0) {
      setPageNumber((p) => (p < numPages ? p + 1 : p));
      lastScrollTimeRef.current = now;
    }
  };

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (dragStartX.current === null) return;

    const diffX = e.clientX - dragStartX.current;
    const threshold = 50; // الحد الأدنى للسحب (بكسل) لتغيير الصفحة

    if (diffX < -threshold) {
      // سحب يسار => صفحة تالية
      setPageNumber((p) => (p < numPages ? p + 1 : p));
    } else if (diffX > threshold) {
      // سحب يمين => صفحة سابقة
      setPageNumber((p) => (p > 1 ? p - 1 : p));
    }

    dragStartX.current = null;
  };

  // تحديث قيمة الإدخال عند تغيير الصفحة برمجياً
  useEffect(() => {
    setInputPage(pageNumber.toString());
  }, [pageNumber]);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const page = parseInt(inputPage, 10);
    if (!isNaN(page) && page >= 1 && page <= numPages) {
      setPageNumber(page);
    } else {
      alert(`يرجى إدخال رقم صفحة بين 1 و ${numPages}`);
      setInputPage(pageNumber.toString());
    }
  };

  return (
    <div style={{ textAlign: 'center', direction: 'rtl' }}>
    

      {/* عرض صفحة PDF */}
      <canvas
        ref={canvasRef}
        style={{ border: '1px solid #000', maxWidth: '100%', cursor: 'pointer' }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />

      {/* أزرار التنقل */}
      <div style={{ marginTop: '10px' }}>
        {numPages && (
          <>
            <button
              onClick={() => setPageNumber(1)}
              disabled={pageNumber === 1}
              style={{ margin: '0 5px' }}
            >
              أول صفحة
            </button>
            <button
              onClick={() => setPageNumber((p) => (p > 1 ? p - 1 : p))}
              disabled={pageNumber === 1}
              style={{ margin: '0 5px' }}
            >
              السابق
            </button>
            <span style={{ margin: '0 10px' }}>
              الصفحة {pageNumber} من {numPages}
            </span>
            <button
              onClick={() => setPageNumber((p) => (p < numPages ? p + 1 : p))}
              disabled={pageNumber === numPages}
              style={{ margin: '0 5px' }}
            >
              التالي
            </button>
            <button
              onClick={() => setPageNumber(numPages)}
              disabled={pageNumber === numPages}
              style={{ margin: '0 5px' }}
            >
              آخر صفحة
            </button>


              {/* مربع البحث فوق */}
      <div
        style={{
          marginBottom: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <label htmlFor="pageInput" style={{ fontWeight: 'bold' }}>
          اذهب إلى الصفحة:
        </label>
        <input
          id="pageInput"
          type="number"
          min={1}
          max={numPages || 1}
          value={inputPage}
          onChange={handleInputChange}
          style={{ width: '60px', textAlign: 'center', fontSize: '16px' }}
        />
        <button
          onClick={handleGoToPage}
          style={{
            padding: '5px 15px',
            cursor: 'pointer',
            borderRadius: '4px',
            border: '1px solid #007bff',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          اذهب
        </button>
      </div>
          </>
        )}
      </div>
    </div>
  );
}
