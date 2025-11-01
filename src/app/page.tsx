import About from './sections/about/About';
import Hero from './sections/hero/Hero'; // 1. Import your new section

export default function Home() {
  return (
    <main>
      <Hero /> {/* 2. Add the component here */}
      <About />
      
      {/* We will add the 'About' section below this next */}
    </main>
  );
}