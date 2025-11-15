import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import Navbar from './components/Navigation';


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
  <main>
    <Navbar />
    <Hero />
    <Cocktails />
  </main>
  );
}
