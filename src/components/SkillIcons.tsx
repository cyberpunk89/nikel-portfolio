"use client";

const pixelStyle = { shapeRendering: "crispEdges" as const };

export type IconName = 
  | "pen-square" | "brush" | "grid-3x3" | "layers" | "eye" | "compass"
  | "tool-case" | "repeat" | "settings-cog" | "zap" | "globe" | "languages"
  | "ai-user-circle" | "test-tube" | "check-double" | "chart-bar-big" 
  | "smartphone" | "hand" | "cursor-minimal" | "megaphone"
  | "checkbox-on" | "clipboard-note" | "settings-2" | "analytics";

const paths: Record<IconName, string> = {
  "pen-square": "M3 3h18v18H3zM7 7v2h2v2h2v2H7v2h10l2-2V7z",
  "brush": "M4 4v2h2v2h2v2h2v2h2v2h2v2h2v2H4v-2h2v-2H4V4zm4 4v10h10V8H8z",
  "grid-3x3": "M3 3v6h6V3H3zm3 3H6V6H6V6zm9-3v6h6V6h-6zm3 3h-2V6h2v2zm0 9v3h-3v-3h3zm-3 3h-6v-3h6v3zm3-3h-2v-2h2v2zm0-3h-2v-2h2v2zM6 14v2H4v-2h2zm0-3v-2H4v2h2z",
  "layers": "M12 3L3 7l9 4 9-4-9-4zm0 5l-6 2.5L12 13l6-2.5L12 8zm-9 5l9 4 9-4-9-4-9 4zm0 2.5l6-2.5 6 2.5-6 2.5-6-2.5z",
  "eye": "M12 5C7 5 3 12 3 12s4 7 9 7 9-7 9-7-4-7-9-7zm0 10c-2 0-3-1-3-1s1-1 3-1 3 1 3 1-1 1-3 1zm5-5l-3 3 3 3 3-3-3-3z",
  "compass": "M12 3l-4 8-2 4 2 4 4 8 4-8 2-4-2-4-4-8zm0 6l2 4 1.5 3 1.5-3 2-4-2-4-1.5-3L14 5l-2 4z",
  "tool-case": "M6 4v4H4v12h16V8h-2V4h-4v2h4v2H6V4zm2 2h8v2h2v8h-4v2h6v2H4v-2h6v-2H8V6zm2 6h2v6h-2V12z",
  "repeat": "M4 8h4v2H4v4h2v-4h2l3 4 3-4-3-4h2v4h2v-6H4v2z",
  "settings-cog": "M12 4l2 2 2-2 2 2-2 2 2 2-2 2-2-2-2 2-2-2 2-2-2-2 2-2zm9 3v2h-2v4h-2v2h4v2h2v4h2v-4h2v-2h-2v-4h2V7h-6zM12 10a2 2 0 100 4 2 2 0 000-4z",
  "zap": "M13 3l-4 8h6l-2 10 8-12h-6l2-6z",
  "globe": "M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm7 4h-2l-3 7h2l1 4 1-4h2l-3-7zm-4 2H9l-1 4h8l-1-4zm-3 0H6v6l2 2 2-2v-6z",
  "languages": "M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm5 12h-2l-3 6h2l1 3 1-3h2l-3-6zm-4 2H11l-1 4h4l-1-4z",
  "ai-user-circle": "M12 4C9 4 6 6 6 9c0 2 1 3 2 4l-1 4c0 1 2 2 5 2s5-1 5-2l-1-4c1-1 2-2 2-4 0-3-3-5-6-5zM9 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
  "test-tube": "M9 3v2h6V3H9zm3 4v14h2V7h-2zm-2 2l-2 10h6l-2-10h-2z",
  "check-double": "M5 8l4 4 6-6 2 2-8 8-6-6 2-2zm10 4l6-6 2 2-8 8-6-6 2-2 4 4z",
  "chart-bar-big": "M4 4v4h4V4H4zm6 0v4h6V4h-6zm8 0v6h4V4h-4zM4 10v4h4v-4H4zm6 0v8h6v-8h-6zm8 4v6h4v-6h-4zM4 16v4h4v-4H4zm6 0v4h2v-4H10zm4 0v4h6v-4h-6z",
  "smartphone": "M8 4v16h8V4H8zm4 2h4v2h-4V6zm4 12h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2z",
  "hand": "M12 4v8l2-2V4h-2zM9 6v6l2 2V6H9zm4-2v10l2-2V4h-2zM6 9v8l2 2V9H6zm12 0v10l-2 2V9h2zm-6 2v6l2 2v-6l-2-2z",
  "cursor-minimal": "M4 4l12 8-6 2-2 6L4 4zm6 6l6-2-2 6-4-4z",
  "megaphone": "M3 9v6h4l6 4V5L7 9H3zm9-4v6l6 4V5l-6-4zm8 6l2-4h2v8h-2l-2-4z",
  "checkbox-on": "M5 3v18h14V3H5zm12 16H7V5h10v14zM9 10l2 2 4-4 2 2-6 6-4-4 2-2z",
  "clipboard-note": "M9 2v2H7v2h10V4h-2V2H9zm-4 4v14h14V6H5zm2 2h10v2H7V8zm0 4h8v2H7v-2z",
  "settings-2": "M12 4l2 2 2-2 2 2-2 2 2 2-2 2-2-2-2 2-2-2 2-2-2-2 2-2zm9 3v2h-2v4h-2v2h4v2h2v4h2v-4h2v-2h-2v-4h2V7h-6zM12 10a2 2 0 100 4 2 2 0 000-4z",
  "analytics": "M4 4v6h6V4H4zm8 0v4h6V4h-6zm-4 6v10h6v-10H8zm8 4v6h6v-6h-6z",
};

interface PixelIconProps {
  name: IconName;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export function PixelIcon({ name, className, size = 24, style }: PixelIconProps) {
  const path = paths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ ...pixelStyle, ...style }}
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
}

export default PixelIcon;