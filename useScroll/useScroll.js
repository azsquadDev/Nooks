import { useEffect, useState } from "react";

export const useScroll = (_x, _y) => {
  const [state, setState] = useState({
    x: _x,
    y: _y
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return state;
};