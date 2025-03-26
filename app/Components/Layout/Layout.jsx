"use client";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] m-auto">
      {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
