import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

interface LayoutProps {
  children: React.ReactNode;
  showPadding?: boolean;
}

const Layout = ({ children, showPadding = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${showPadding ? "pt-16 lg:pt-20" : ""}`}>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
