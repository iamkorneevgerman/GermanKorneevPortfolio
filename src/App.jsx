import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience"; // ИМПОРТ
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      <CustomCursor />
      <Navbar />

      <main className="container mx-auto px-6 max-w-7xl">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <div className="container mx-auto px-6 max-w-7xl">
        <Footer />
      </div>
    </div>
  );
}
