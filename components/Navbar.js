import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpenLessons, setDropdownOpenLessons] = useState(false);
  const [dropdownOpenActivities, setDropdownOpenActivities] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false); // false يعني القائمة مغلقة

  const toggleDropdownLessons = () => {
    setDropdownOpenLessons((prev) => {
      if (!prev) setDropdownOpenActivities(false);
      return !prev;
    });
  };

  const toggleDropdownActivities = () => {
    setDropdownOpenActivities((prev) => {
      if (!prev) setDropdownOpenLessons(false);
      return !prev;
    });
  };

  const closeDropdown = () => {
    setDropdownOpenLessons(false);
    setDropdownOpenActivities(false);
    setIsNavCollapsed(false); // نقفل القائمة عند اختيار عنصر
  };

  const handleToggleNav = () => {
    setIsNavCollapsed((prev) => !prev);
    // إذا أغلقت القائمة، نغلق جميع Dropdowns
    if (isNavCollapsed) {
      setDropdownOpenLessons(false);
      setDropdownOpenActivities(false);
    }
  };

  return (
    <>
      {/* صف علوي يحتوي على الصورة + العبارة */}
      <div className="text-center py-3 bg-light border-bottom">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ gap: "20px" }}
        >
          <img
            src="/icons/logo_dajani.jpg"
            alt="الدكتور حمود الدعجاني"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              border: "3px solid #004085",
            }}
          />
          <h2 style={{ color: "#004085", margin: 0 }}>
            الموقع الرسمي لفضيلة الشيخ/ أ.د. حمود بن محسن الدعجاني
          </h2>

          <Link href="/" legacyBehavior>
            <a
              className="navbar-brand d-flex align-items-center"
              style={{ gap: "15px" }}
            >
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

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#004085" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarContent"
            aria-expanded={isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleToggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "show" : ""
            }`}
            id="navbarContent"
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: "20px", display: "flex" }}
            >
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    الرئيسية
                  </a>
                </Link>
              </li>
              {/* ====================================================================================================== */}
              <li className="nav-item">
                <Link href="/targamah" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    ترجمة الشيخ
                  </a>
                </Link>
              </li>
              {/* ====================================================================================================== */}
              {/* الدروس العلمية */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  href="#"
                  role="button"
                  aria-expanded={dropdownOpenLessons}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdownLessons();
                  }}
                >
                  الدروس العلمية
                </a>

                {dropdownOpenLessons && (
                  <ul className="dropdown-menu show text-end custom-dropdown">
                    <li>
                      <Link href="/quran" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          القرآن وعلومه
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/hadith" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          الحديث وعلومه
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          العقيدة
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          الفقه وأصوله
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/motfrqat" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          متفرقات
                        </a>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
{/* ====================================================================================================== */}
              <li className="nav-item">
                <Link href="/mohadrat" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    المحاضرات والكلمات
                  </a>
                </Link>
              </li>

              {/* ====================================================================================================== */}
              <li className="nav-item">
                <Link href="/BooksPage" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    الكتب
                  </a>
                </Link>
              </li>
{/* ====================================================================================================== */}
              {/* الأمن الفكري */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-nav-link"
                  href="#"
                  role="button"
                  aria-expanded={dropdownOpenActivities}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdownActivities();
                  }}
                >
                  الأمن الفكري
                </a>

                {dropdownOpenActivities && (
                  <ul className="dropdown-menu show text-end custom-dropdown">
                    <li>
                      <Link href="/BooksPagefkry" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          كتب وبحوث
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/amnfkryaudio" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          صوتيات
                        </a>
                      </Link>
                    </li>
                    
                    {/* <li>
                      <Link href="/supervision" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          الإشراف على الرسائل العلمية
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/SecurityActivities" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          الأنشطة في مجال الأمن الفكري والوطني
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/memberships" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          العضوية في الجمعيات العلمية
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/trainings" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          الدورات التدريبية
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/conferences" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          المشاركة في المؤتمرات والندوات وورش العمل
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/thanks" legacyBehavior>
                        <a
                          className="dropdown-item custom-item"
                          onClick={closeDropdown}
                        >
                          شهادات الشكر
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                )}
              </li>

              {/* ====================================================================================================== */}
              <li className="nav-item">
                <Link href="" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    إعلانات المحاضرات والدروس العلمية
                  </a>
                </Link>
              </li>

              {/* ====================================================================================================== */}
              {/* <li className="nav-item">
                <Link href="/live" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    البث المباشر
                  </a>
                </Link>
              </li> */}
{/* ============================ */}

              <li className="nav-item">
                <Link href="/live_json" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    البث المباشر
                  </a>
                </Link>
              </li>

              {/* ====================================================================================================== */}
              {/* <li className="nav-item">
                <Link href="/cv" legacyBehavior>
                  <a
                    className="nav-link custom-nav-link"
                    onClick={closeDropdown}
                  >
                    السيرة الذاتية
                  </a>
                </Link>
              </li> */}
              
              {/* ====================================================================================================== */}
            
              {/* ====================================================================================================== */}
            </ul>
          </div>
        </div>
      </nav>

      {/* تنسيق الروابط والـ dropdown */}
      <style jsx>{`
        .custom-nav-link {
          font-size: 1.2rem; /* تكبير الخط */
          font-weight: bold; /* جعله غامق */
          color: #fff !important;
          transition: color 0.3s ease;
          padding-left: 5px;
          padding-right: 5px;
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
          padding: 0.3rem;
          position: absolute;
          z-index: 1000;
        }

        .custom-item {
          color: #004085;
          padding: 5px 5px;
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
