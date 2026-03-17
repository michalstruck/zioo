import { cn } from "@/lib/utils";

type BlendIllustrationProps = {
	className?: string;
};

/**
 * Abstract pop-art SVG for "Deep Unwind" — layered leaf/petal shapes in teal,
 * representing sleep & relaxation (Purple Punch terpene).
 */
export function DeepUnwindIllustration({
	className,
}: BlendIllustrationProps) {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("size-full", className)}
			aria-hidden="true"
		>
			{/* Background blob */}
			<circle
				cx="100"
				cy="100"
				r="85"
				fill="#2DD4BF"
				stroke="#000"
				strokeWidth="4"
			/>
			{/* Layered petal - large */}
			<ellipse
				cx="100"
				cy="80"
				rx="50"
				ry="65"
				fill="#FEF08A"
				stroke="#000"
				strokeWidth="3"
				transform="rotate(-15 100 80)"
			/>
			{/* Petal accent */}
			<ellipse
				cx="115"
				cy="95"
				rx="30"
				ry="45"
				fill="#F97316"
				stroke="#000"
				strokeWidth="3"
				transform="rotate(10 115 95)"
			/>
			{/* Stem line */}
			<line
				x1="100"
				y1="140"
				x2="100"
				y2="190"
				stroke="#000"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			{/* Small leaf */}
			<ellipse
				cx="85"
				cy="160"
				rx="12"
				ry="8"
				fill="#2DD4BF"
				stroke="#000"
				strokeWidth="2.5"
				transform="rotate(-30 85 160)"
			/>
		</svg>
	);
}

/**
 * Abstract pop-art SVG for "Social Spark" — starburst/flower shape in orange,
 * representing euphoria & mood (GSC terpene).
 */
export function SocialSparkIllustration({
	className,
}: BlendIllustrationProps) {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("size-full", className)}
			aria-hidden="true"
		>
			{/* Background blob */}
			<circle
				cx="100"
				cy="100"
				r="85"
				fill="#F97316"
				stroke="#000"
				strokeWidth="4"
			/>
			{/* Flower petals - starburst */}
			{[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
				<ellipse
					key={angle}
					cx="100"
					cy="55"
					rx="16"
					ry="35"
					fill="#FEF08A"
					stroke="#000"
					strokeWidth="2.5"
					transform={`rotate(${angle} 100 100)`}
				/>
			))}
			{/* Center circle */}
			<circle
				cx="100"
				cy="100"
				r="22"
				fill="#2DD4BF"
				stroke="#000"
				strokeWidth="3"
			/>
			{/* Inner dot */}
			<circle cx="100" cy="100" r="8" fill="#000" />
		</svg>
	);
}

/**
 * Abstract pop-art SVG for "Clear Mind" — geometric leaf/crystal in yellow,
 * representing focus & clarity (Lemon Skunk terpene).
 */
export function ClearMindIllustration({
	className,
}: BlendIllustrationProps) {
	return (
		<svg
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("size-full", className)}
			aria-hidden="true"
		>
			{/* Background blob */}
			<circle
				cx="100"
				cy="100"
				r="85"
				fill="#FEF08A"
				stroke="#000"
				strokeWidth="4"
			/>
			{/* Crystal/diamond shape */}
			<polygon
				points="100,25 145,85 130,160 70,160 55,85"
				fill="#2DD4BF"
				stroke="#000"
				strokeWidth="3"
				strokeLinejoin="round"
			/>
			{/* Inner facets */}
			<line
				x1="100"
				y1="25"
				x2="70"
				y2="160"
				stroke="#000"
				strokeWidth="2"
			/>
			<line
				x1="100"
				y1="25"
				x2="130"
				y2="160"
				stroke="#000"
				strokeWidth="2"
			/>
			<line
				x1="55"
				y1="85"
				x2="145"
				y2="85"
				stroke="#000"
				strokeWidth="2"
			/>
			{/* Small accent circles */}
			<circle
				cx="100"
				cy="75"
				r="10"
				fill="#F97316"
				stroke="#000"
				strokeWidth="2.5"
			/>
		</svg>
	);
}
