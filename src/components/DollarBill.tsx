type Props = {
  className?: string;
};

// Stylised bank note drawn in SVG. Colour comes from `currentColor`.
export default function DollarBill({ className }: Props) {
  return (
    <svg
      viewBox="0 0 300 128"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2"
        y="2"
        width="296"
        height="124"
        rx="6"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="12"
        y="12"
        width="276"
        height="104"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <ellipse
        cx="150"
        cy="64"
        rx="40"
        ry="44"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse
        cx="150"
        cy="64"
        rx="32"
        ry="36"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <text
        x="150"
        y="82"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="52"
        fontWeight="700"
        fill="currentColor"
      >
        $
      </text>
      {[
        [30, 40],
        [270, 40],
        [30, 104],
        [270, 104],
      ].map(([x, y]) => (
        <text
          key={`${x}-${y}`}
          x={x}
          y={y}
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="700"
          fill="currentColor"
        >
          1
        </text>
      ))}
      <text
        x="150"
        y="30"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11"
        letterSpacing="3"
        fill="currentColor"
      >
        I LOVE MONEY LTD
      </text>
      <text
        x="150"
        y="118"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="9"
        letterSpacing="2"
        fill="currentColor"
      >
        SOFTWARE PUBLISHING
      </text>
      <line
        x1="60"
        y1="64"
        x2="100"
        y2="64"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="200"
        y1="64"
        x2="240"
        y2="64"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
