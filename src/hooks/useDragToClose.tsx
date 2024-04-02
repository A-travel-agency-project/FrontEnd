import { useCallback, useEffect, useState } from "react";

export const useDragToClose = () => {
  const [isDraggedDown, setIsDraggedDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDragging) {
        const currentY = event.clientY;
        const diffY = currentY - startY;
        if (diffY > 50) {
          setIsDraggedDown(true);
          setIsDragging(false);
        }
      }
    },
    [isDragging, startY]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (!isDraggedDown) {
      setIsDraggedDown(false);
    }
  }, [isDraggedDown]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setStartY(event.clientY);
    setIsDragging(true);
    setIsDraggedDown(false);
  };

  return { isDraggedDown, handleMouseDown };
};
