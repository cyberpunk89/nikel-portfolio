const SaturnIcon = ({ className, size = 32 }: { className?: string; size?: number }) => (
  <svg 
    viewBox="0 0 16 16" 
    width={size} 
    height={size} 
    className={className}
    style={{ shapeRendering: "crispEdges" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <circle cx="8" cy="9" r="4" />
      <ellipse cx="8" cy="9" rx="7" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />
    </g>
  </svg>
);

export default SaturnIcon;