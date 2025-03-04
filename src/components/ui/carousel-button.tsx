import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "prev" | "next";
}

const CarouselButton = forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, direction, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10",
          direction === "prev" ? "left-4" : "right-4",
          className
        )}
        {...props}
      >
        {direction === "prev" ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    );
  }
);

CarouselButton.displayName = "CarouselButton";

export { CarouselButton };