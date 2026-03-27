import { useState, useEffect } from "react";

export function useScrollSpy(ids, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const curPos = window.scrollY;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          if (
            curPos >= element.offsetTop - offset &&
            curPos < element.offsetTop + element.offsetHeight - offset
          ) {
            setActiveId(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
