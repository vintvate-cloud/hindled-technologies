import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark" | "full" | "symbol";
  className?: string;
  height?: number | string;
}

export function BrandLogo({
  variant = "light",
  className = "",
  height = 38,
}: BrandLogoProps) {
  const isDark = variant === "dark";

  // Using high-resolution exact assets extracted directly from the official PDF catalogue
  const imgSrc = isDark ? "/logo_horizontal_dark.png" : "/logo_horizontal.png";
  const fullImgSrc = isDark ? "/logo-dark.png" : "/logo.png";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {variant === "full" ? (
        <img
          src={fullImgSrc}
          alt="HINDLED Technologies"
          style={{ height: typeof height === "number" ? `${height}px` : height }}
          className="w-auto object-contain transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            // Fallback inline SVG if needed
            e.currentTarget.style.display = "none";
          }}
        />
      ) : variant === "symbol" ? (
        <img
          src="/logo_symbol.png"
          alt="HINDLED Symbol"
          style={{ height: typeof height === "number" ? `${height}px` : height }}
          className="w-auto object-contain"
        />
      ) : (
        <img
          src={imgSrc}
          alt="HINDLED Technologies"
          style={{ height: typeof height === "number" ? `${height}px` : height }}
          className="w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      )}
    </div>
  );
}

export default BrandLogo;
