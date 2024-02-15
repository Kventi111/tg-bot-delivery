import { useState, useEffect, useRef } from "react";

export const useSlider = () => {
  // const touchpad = document.getElementById("touchpad");
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  console.log({ scrollLeft, isDragging, startX });

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (event) => {
      setIsDragging(true);
      setStartX(event.clientX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const x = event.clientX - container.offsetLeft;
      const distance = x - startX;
      container.scrollLeft = scrollLeft - distance;
    };

    const handleTouchStart = (event) => {
      console.log({ event });

      if (event.touches.length !== 1) return; // Поддерживаем только одно касание
      setIsDragging(true);
      setStartX(event.touches[0].clientX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (event) => {
      if (!isDragging || event.touches.length !== 1) return;
      const x = event.touches[0].clientX - container.offsetLeft;
      const distance = x - startX;
      container.scrollLeft = scrollLeft - distance;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchmove", handleTouchMove);

    container.addEventListener("gesturestart", handleTouchStart);
    container.addEventListener("gesturechange", handleTouchMove);
    container.addEventListener("gestureend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);

      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchmove", handleTouchMove);

      container.removeEventListener("gesturestart", handleTouchStart);
      container.removeEventListener("gesturechange", handleTouchMove);
      container.removeEventListener("gestureend", handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    const handleDocumentWheel = (event) => {
      // Если курсор мыши находится над контейнером слайдера,
      // предотвращаем дальнейшее всплытие события
      if (containerRef.current.contains(event.target)) {
        event.preventDefault();

        containerRef.current.scrollLeft += event.deltaY;
      }
    };

    const handleDocumentTouchMove = (event) => {
      // Если курсор мыши находится над контейнером слайдера,
      // предотвращаем дальнейшее всплытие события
      if (containerRef.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleDocumentWheel, { passive: false });
    document.addEventListener("touchmove", handleDocumentTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", handleDocumentWheel);
      document.removeEventListener("touchmove", handleDocumentTouchMove);
    };
  }, []);

  return { containerRef };
};
