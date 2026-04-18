"use client";

const pixelStyle = { shapeRendering: "crispEdges" as const };

interface BrandLogoProps {
  name: string;
  className?: string;
  size?: number;
}

const brandSVGs: Record<string, { viewBox: string; path: string }> = {
  figma: {
    viewBox: "0 0 38 57",
    path: "M19 28.5a9.5 9.5 0 119-9.5 9.5 9.5 0 01-9 9.5zM0 47.5A9.5 9.5 0 109.5 38 9.5 9.5 0 000 47.5zm28-19a9.5 9.5 0 119.5-9.5 9.5 9.5 0 01-9.5 9.5zM19 0a9.5 9.5 0 109.5 9.5A9.5 9.5 0 0019 0zm19 19a9.5 9.5 0 10-9.5 9.5 9.5 9.5 0 009.5-9.5zM19 38a9.5 9.5 0 10-9.5 9.5 9.5 9.5 0 009.5-9.5z"
  },
  sketch: {
    viewBox: "0 0 395 331",
    path: "M197.5 165.5l-98.7 55.8 98.7 55.8 98.7-55.8-98.7-55.8zm-98.7 27.9l98.7 55.8 98.7-55.8-98.7-55.8-98.7 55.8zm0 27.9l98.7-55.8 98.7 55.8-98.7 55.8-98.7-55.8zm197.4-83.7L197.5 27.9 98.8 0l98.7 27.9 98.7 55.8zm-197.4 0L98.8 0 0 27.9l98.7 55.8 98.8-27.9zM0 193.4l98.8 55.8 98.7-55.8L98.8 137.6 0 193.4zm98.8 27.9L0 277.1l98.8 27.9 98.7-55.8L98.8 221.3zm296.2-55.8L296.2 0 197.5 27.9l98.7 55.8 98.8 27.9z"
  },
  "after-effects": {
    viewBox: "0 0 48 48",
    path: "M6 8v32h36V8H6zm4 4h4v4H10v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM10 34v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zM6 16v4h4v-4H6zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4z"
  },
  miro: {
    viewBox: "0 0 48 48",
    path: "M24 4L4 14v20l20 10 20-10V14L24 4zm0 6l14 7-14 7-14-7 14-7zm-14 7l14 7v14l-14-7v-14zm28 0v14l-14 7v-14l14-7z"
  },
  zeplin: {
    viewBox: "0 0 48 48",
    path: "M24 4L4 14v20l20 10 20-10V14L24 4zm0 8l12 6-12 6-12-6 12-6zm-8 8l8 4 8-4v8l-8 4-8-4v-8z"
  },
  hotjar: {
    viewBox: "0 0 48 48",
    path: "M24 4C14 4 6 12 6 22c0 6 3 11 8 14v8l10-6c2 1 4 2 6 2 10 0 18-8 18-18S34 4 24 4zm0 8c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z"
  },
  google: {
    viewBox: "0 0 48 48",
    path: "M24 4C14 4 6 12 6 22c0 8 5 15 13 18v-8c-4 0-8-2-10-6l8-6-8 6v8c6-3 10-8 10-14 0-6-4-12-10-14v-2c6 2 10 8 10 14 0 6-4 11-10 14v2c-6-2-10-8-10-14 0-6 4-12 10-14v-2z"
  },
  "google-analytics": {
    viewBox: "0 0 48 48",
    path: "M8 40V20h4v20H8zm10 0V12h4v28h-4zm10 0V24h4v16h-4zm10 0V16h4v24h-4z"
  },
  pendo: {
    viewBox: "0 0 48 48",
    path: "M24 4C14 4 8 10 8 20s6 16 16 16 16-6 16-16S34 4 24 4zm0 8c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8z"
  },
  maze: {
    viewBox: "0 0 48 48",
    path: "M8 8h8v8H8V8zm12 0h20v8H20V8zM8 20h8v8H8v-8zm12 0h8v8h-8v-8zm8 0h12v8H28v-8zM8 32h8v8H8v-8zm12 0h8v8h-8v-8zm8 0h12v8H28v-8zM8 44h32v4H8v-4z"
  },
  datadog: {
    viewBox: "0 0 48 48",
    path: "M24 4l-8 8v16l8 8 8-8V12l-8-8zm0 8l4 4v8l-4 4-4-4v-8l4-4zm-8 8v8l4 4 4-4v-8l-4-4-4 4z"
  },
};

export function BrandLogo({ name, className, size = 24 }: BrandLogoProps) {
  const svg = brandSVGs[name.toLowerCase()];
  if (!svg) return null;

  return (
    <svg
      viewBox={svg.viewBox}
      width={size}
      height={size}
      className={className}
      style={pixelStyle}
      fill="currentColor"
    >
      <path d={svg.path} />
    </svg>
  );
}

export default BrandLogo;