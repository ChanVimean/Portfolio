import { useEffect, useCallback, RefObject, useRef } from "react";

const useScrollHandler = (
  mainRef: RefObject<HTMLDivElement | null>,
  activeIndex: number,
  setActiveIndex: (index: number) => void,
  isMobile: boolean
) => {

  const isScrolling = useRef<boolean>(false)

  const handleScroll = useCallback((event: WheelEvent | KeyboardEvent): void => {

    if (!mainRef.current || isMobile || isScrolling.current) return

    event.preventDefault()

    let newIndex = activeIndex

    if (event instanceof WheelEvent) {
      newIndex += event.deltaY > 0 ? 1 : -1
    } else if (event instanceof KeyboardEvent) {
      if (event.key === "ArrowDown" || event.key === "PageDown") newIndex += 1
      if (event.key === "ArrowUp" || event.key === "PageUp") newIndex -= 1
      if (event.key === "ArrowRight") newIndex += 1;
      if (event.key === "ArrowLeft") newIndex -= 1;
    }

    if (newIndex >= 0 && newIndex < 5) {
      isScrolling.current = true
      setActiveIndex(newIndex)
      document.getElementById(`section-${newIndex}`)?.scrollIntoView({ behavior: "smooth" })
    }

    setTimeout(() => {
      isScrolling.current = false
    }, 800)

  }, [activeIndex, isMobile, mainRef, setActiveIndex])

  useEffect(() => {
    if (!isMobile) return

    const element = mainRef.current
    if (element) {
      element.addEventListener("wheel", handleScroll as EventListener, { passive: false })
      document.addEventListener("keydown", handleScroll as EventListener)
      document.addEventListener("keyup", handleScroll as EventListener)
    }

    return () => {
      if (element) element.removeEventListener("wheel", handleScroll as EventListener)
      document.removeEventListener("keydown", handleScroll as EventListener)
      document.removeEventListener("keyup", handleScroll as EventListener)
    }
  }, [handleScroll, isMobile, mainRef])

  return null
}

export default useScrollHandler