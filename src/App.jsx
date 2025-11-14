import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div className="flex-center h-screen">
    <h1 className="text-3xl text-indigo-400">Welcome to GSAP Landing Page</h1>
    </div>
  );
}
