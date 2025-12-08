import { useState, useEffect } from "react";
import { X, Sparkles, Clock } from "lucide-react";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo-banner-dismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("promo-banner-dismissed", "true");
  };

  if (!isVisible) return null;

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-primary text-white py-2 px-4 relative overflow-hidden">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-75" />
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-150" />
      </div>

      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base relative">
        <Sparkles className="w-4 h-4 hidden sm:block animate-pulse" />
        
        <span className="font-semibold">
          🔥 FLASH SALE: Use code <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold">WELCOME10</span> for 10% OFF
        </span>

        <span className="hidden md:flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full text-xs font-mono">
          <Clock className="w-3 h-3" />
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </span>

        <button
          onClick={handleClose}
          className="absolute right-2 md:right-4 text-white/80 hover:text-white transition-colors p-1"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
