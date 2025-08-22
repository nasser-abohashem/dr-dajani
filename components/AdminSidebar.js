

import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <nav className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h3 className="text-center">لوحة الإدارة</h3>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">
          <Link href="/admin" className="nav-link text-white">
            الرئيسية
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/children" className="nav-link text-white">
            إدارة الأطفال
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/teachers" className="nav-link text-white">
            إدارة المعلمين
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/classrooms" className="nav-link text-white">
            إدرة الفصول
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/activities" className="nav-link text-white">
            إدارة الأنشطة
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/programs" className="nav-link text-white">
            إدارة البرامج
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/attendance" className="nav-link text-white">
             الحضور والانصراف
          </Link>
        </li>

        {/* <li className="nav-item mb-2">
          <Link href="/admin/payments" className="nav-link text-white">
            إدارة المدفوعات والفواتير
          </Link>
        </li> */}

        {/* <li className="nav-item mb-2">
          <Link href="/admin/reports" className="nav-link text-white">
            إدارة تقارير الأداء
          </Link>
        </li> */}

        <li className="nav-item mb-2">
          <Link href="/admin/news" className="nav-link text-white">
            إدارة الأخبار
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link href="/admin/faq" className="nav-link text-white">
            إدارة الأسئلة الشائعة
          </Link>
        </li>

        {/* <li className="nav-item mb-2">
          <Link href="/admin/users" className="nav-link text-white">
            إدارة المستخدمين
          </Link>
        </li> */}

        <li className="nav-item mt-4">
          <button className="btn btn-danger w-100">تسجيل الخروج</button>
        </li>
      </ul>
    </nav>
  );
}
