import { useState, useEffect } from 'react';


export function useIsHoverCapable() {
  const [canHover, setCanHover] = useState(false);
  
    useEffect(() => {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
      setCanHover(mq.matches)
    }, [])
  
    return canHover
}
