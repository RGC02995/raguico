import { useEffect, useState } from "react";

export const renderComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const renderComponent = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", renderComponent);
    return () => {
      window.addEventListener("scroll", renderComponent);
    };
  }, []);

  return {
    isVisible,
    setIsVisible,
  };
};
