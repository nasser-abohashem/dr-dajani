export default function Footer() {
  const footerStyle = {
    backgroundColor: '#065f46', // نفس لون النافبار
    color: 'white',
    padding: '1rem 0',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} جميع الحقوق محفوظة لموقع حضانة وسام
    </footer>
  );
}
