import { cn } from "@/lib/utils";

type BlendIllustrationProps = {
  className?: string;
};

/**
 * Abstract pop-art SVG for "Deep Unwind" — layered leaf/petal shapes in teal,
 * representing sleep & relaxation (Purple Punch terpene).
 */
export function DeepUnwindIllustration({ className }: BlendIllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
      aria-hidden="true"
    >
      {/* Background - Organic Blob */}
      <path
        d="M175,100 C175,141.42 141.42,175 100,175 C58.58,175 35,141.42 35,100 C35,58.58 58.58,25 100,25 C141.42,25 175,58.58 175,100 Z"
        fill="#c48464"
        fillOpacity="0.1"
      />
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="#535B8C"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
      {/* Layered petal - large */}
      <path
        d="M100,20 C140,20 160,80 100,140 C40,80 60,20 100,20 Z"
        fill="#6b7f6a"
        stroke="#4A5D49"
        strokeWidth="2"
        transform="rotate(-15 100 80)"
        opacity="0.9"
      />
      {/* Petal accent */}
      <path
        d="M115,50 C145,50 155,100 115,130 C75,100 85,50 115,50 Z"
        fill="#A27FE2"
        stroke="#535B8C"
        strokeWidth="1.5"
        transform="rotate(10 115 95)"
        opacity="0.8"
      />
      {/* Stem line */}
      <path
        d="M100,130 Q105,160 100,190"
        stroke="#4A5D49"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Small leaf */}
      <path
        d="M85,155 C100,155 105,170 85,175 C65,170 70,155 85,155 Z"
        fill="#c48464"
        stroke="#8B5E3C"
        strokeWidth="1.5"
        transform="rotate(-30 85 160)"
      />
    </svg>
  );
}

/**
 * Abstract pop-art SVG for "Social Spark" — starburst/flower shape in orange,
 * representing euphoria & mood (GSC terpene).
 */
export function SocialSparkIllustration({ className }: BlendIllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
      aria-hidden="true"
    >
      {/* Background circular guides */}
      <circle
        cx="100"
        cy="100"
        r="85"
        stroke="#6b7f6a"
        strokeWidth="0.5"
        strokeDasharray="2 6"
      />

      {/* Flower petals - Organic Asymmetry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <path
          key={angle}
          d="M100,30 C115,30 125,70 100,100 C75,70 85,30 100,30 Z"
          fill={i % 2 === 0 ? "#6b7f6a" : "#c48464"}
          stroke={i % 2 === 0 ? "#4A5D49" : "#8B5E3C"}
          strokeWidth="1.5"
          transform={`rotate(${angle} 100 100) scale(${0.8 + Math.random() * 0.4})`}
          opacity="0.8"
        />
      ))}

      {/* Center circle */}
      <circle
        cx="100"
        cy="100"
        r="25"
        fill="#A27FE2"
        stroke="#535B8C"
        strokeWidth="2"
      />
      {/* Inner detailing */}
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="#FBF9F4"
        fillOpacity="0.3"
        stroke="#535B8C"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * Abstract pop-art SVG for "Clear Mind" — geometric leaf/crystal in yellow,
 * representing focus & clarity (Lemon Skunk terpene).
 */
export function ClearMindIllustration({ className }: BlendIllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
      aria-hidden="true"
    >
      {/* Outer focus rings */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#A27FE2"
        strokeWidth="0.5"
        strokeDasharray="1 10"
      />

      {/* Crystal/diamond shape - softened edges */}
      <path
        d="M100,20 L150,80 L135,165 L65,165 L50,80 Z"
        fill="#A27FE2"
        fillOpacity="0.1"
        stroke="#535B8C"
        strokeWidth="1"
      />

      <path
        d="M100,30 L140,85 L125,155 L75,155 L60,85 Z"
        fill="#c48464"
        stroke="#8B5E3C"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />

      {/* Inner facets - soft lines */}
      <path
        d="M100,30 L75,155"
        stroke="#1A1F1A"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M100,30 L125,155"
        stroke="#1A1F1A"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M60,85 L140,85"
        stroke="#1A1F1A"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Botanical detail */}
      <circle
        cx="100"
        cy="80"
        r="12"
        fill="#6b7f6a"
        stroke="#4A5D49"
        strokeWidth="1.5"
      />
      <path
        d="M100,68 C105,60 115,60 110,75"
        stroke="#4A5D49"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
