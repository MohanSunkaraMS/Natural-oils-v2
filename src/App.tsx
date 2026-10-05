import "./index.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import WhichOil from "./components/sections/WhichOil";
import ProductsMenu from "./components/sections/ProductsMenu";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Faq from "./components/sections/Faq";
import Contact from "./components/sections/Contact";
import QuickActions from "./components/QuickActions";
import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import CartDrawer from "./components/CartDrawer";
import { useEffect, useState } from "react";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./lib/firebase";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");

  useEffect(() => {
    const handleHashChange = () => setIsAdmin(window.location.hash === "#admin");
    window.addEventListener("hashchange", handleHashChange);
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      unsubscribe();
    };
  }, []);

  if (isAdmin) {
    return <div className="admin-root">{!user ? <AdminLogin /> : <AdminDashboard />}</div>;
  }

  return (
    <LanguageProvider>
    <CartProvider>
      <header className="sticky top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </header>
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <WhichOil />
        <ProductsMenu />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <QuickActions />
      <CartDrawer />
    </CartProvider>
    </LanguageProvider>
  );
}
