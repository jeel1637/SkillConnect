import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;