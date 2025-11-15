import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function Hero() {
	const videoRef = useRef();


	const isMobile = useMediaQuery({ maxWidth: 768 });

	useGSAP(() => {
		const heroSplit = new SplitText(".title", {
			type: "chars, words",
		});

		const paragraphSplit = new SplitText(".subtitle", {
			type: "lines",
		});

		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

		//animate hero
		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
		});

		//animate paragraph
		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.006,
			delay: 1,
		});

		//animate leafs
		gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		})
			.to(".right-leaf", { y: 200 }, 0)
			.to(".left-leaf", { y: -200 }, 0);


		const startValue = isMobile?'top 50%' :	'center 60%';
		const endValue = isMobile? '120% top': 'bottom top';


		const videoTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "video",
				start: startValue,
				end: endValue,
				scrub: true,
				pin:true

			},
		})


		videoRef.current.onloadedmetadata = () =>{
			videoTimeline.to(videoRef.current,{
				currentTime: videoRef.current.duration
			})
		}



	}, []);
	return (
		<>
			<section id="hero" className="noisy">
				<h1 className="title">MOJITO</h1>
				<img
					src="/images/hero-left-leaf.png"
					alt="Hero Left Leaf"
					className="left-leaf"
				></img>
				<img
					src="/images/hero-right-leaf.png"
					alt="Hero right Leaf"
					className="right-leaf"
				></img>
				<div className="body">
					<div className="content">
						<div className="space-y-5 hidden md:block">
							<p>Cool. Crisp. Classically</p>
							<p className="subtitle">
								{" "}
								Sip the spirit <br /> with friends
							</p>
						</div>
						<div className="view-cocktails">
							<p className="subtitle">
								Every cocktail on our menu is a blend of premium
								ingredients, creative flair, and timeless
								recipes — designed to delight your senses.
							</p>
							<a href="#cocktails">View Cocktails</a>
						</div>
					</div>
				</div>
			</section>
			<div className="video absolute inset-0">
			<video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto"/>
			</div>
		</>
	);
}

export default Hero;
