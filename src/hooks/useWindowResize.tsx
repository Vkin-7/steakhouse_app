import { useEffect, useState } from "react";

interface WindowSizeProps {
    width: number;
    height: number;
}

export const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<WindowSizeProps | null>(null);

    // Handler to call on window resize
    const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    useEffect(() => {
        if(windowSize?.width && windowSize.width > 800)
             document.body.style.overflowY = 'auto';
        else 
            document.body.style.overflowY = 'hidden';
    }, [windowSize]);
    
    return windowSize;
  }