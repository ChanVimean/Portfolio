import { useEffect } from "react"

const useSectionObserver = (
  sections: string[],
  activeIndex: number,
  setActiveIndex: (index: number) => void,
  isMobile: boolean
) => {

  useEffect(() => {
    if (isMobile) return
  
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleSection = entries.find(entry => entry.isIntersecting)
      if(visibleSection) {
        const newIndex = sections.indexOf(visibleSection.target.id)
        if (newIndex !== -1 && newIndex !== activeIndex) setActiveIndex(newIndex)
      }
    }

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.6 })

    sections.forEach(section => {
      const el = document.getElementById(section)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isMobile, sections, activeIndex, setActiveIndex])

}

export default useSectionObserver