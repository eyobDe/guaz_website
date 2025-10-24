import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-soft"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
          <Outlet key={pathname} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
