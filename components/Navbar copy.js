import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      {/* صف علوي يحتوي على الصورة + العبارة */}
      <div className="text-center py-3 bg-light border-bottom">
        <div className="d-flex justify-content-center align-items-center" style={{ gap: "20px" }}>
          <img
            src="/images/dajani.jpeg"
            alt="الدكتور حمود الدعجاني"
            className="rounded-circle"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              border: "3px solid #004085",
            }}
          />
          <h2 style={{ color: "#004085", margin: 0 }}>
            موقع أ.د./ حمود بن محسن الدعجاني
          </h2>

          <Link href="/" legacyBehavior>
            <a className="navbar-brand d-flex align-items-center" style={{ gap: "15px" }}>
              <img
                src="/images/2030.png"
                alt=""
                width="100px"
                height="100px"
                className="d-inline-block align-text-top"
              />
            </a>
          </Link>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#004085" }}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: "30px", display: "flex" }}>
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link custom-nav-link" onClick={closeDropdown}>
                    الرئيسية
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cv" legacyBehavior>
                  <a className="nav-link custom-nav-link" onClick={closeDropdown}>
                    السيرة الذاتية
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/BooksPage" legacyBehavior>
                  <a className="nav-link custom-nav-link" onClick={closeDropdown}>
                    المؤلفات
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/lectures" legacyBehavior>
                  <a className="nav-link custom-nav-link" onClick={closeDropdown}>
                    الدروس والمحاضرات
                  </a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  href="#"
                  role="button"
                  aria-expanded={dropdownOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  الأنشطة العلمية
                </a>

                {dropdownOpen && (
                  <ul className="dropdown-menu show text-end custom-dropdown">
                    <li>
                      <Link href="/masters" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          الماجستير والدكتوراه
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/publications" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          الإنتاج العلمي المنشور
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/supervision" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          الإشراف على الرسائل العلمية
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/SecurityActivities" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          الأنشطة في مجال الأمن الفكري والوطني
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/memberships" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          العضوية في الجمعيات العلمية
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trainings" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          الدورات التدريبية
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/conferences" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          المشاركة في المؤتمرات والندوات وورش العمل
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thanks" legacyBehavior>
                        <a className="dropdown-item custom-item" onClick={closeDropdown}>
                          شهادات الشكر
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* تنسيق الروابط والـ dropdown */}
      <style jsx>{`
        .custom-nav-link {
          font-size: 1.25rem; /* تكبير الخط */
          font-weight: bold;   /* جعله غامق */
          color: #fff !important;
          transition: color 0.3s ease;
          padding-left: 20px;
          padding-right: 20px;
        }

        .custom-nav-link:hover {
          color: #ffc107 !important;
        }

        .custom-dropdown {
          direction: rtl;
          background-color: #bde0fe;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          border-radius: 0.6rem;
          border: none;
          min-width: 320px;
          padding: 0.5rem;
          position: absolute;
          z-index: 1000;
        }

        .custom-item {
          color: #004085;
          padding: 10px 15px;
          border-radius: 0.4rem;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .custom-item:hover,
        .custom-item:focus {
          background-color: #0056b3;
          color: #fff;
        }
      `}</style>
    </>
  );
}
