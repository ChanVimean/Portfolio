interface DotNavProps {
  sections: string[]
  theme: "light" | "dark"
  activeIndex: number // ? Track Active Section
  handleScroll: (index: number) => void
}

const Dotted: React.FC<DotNavProps> = ({ sections, theme, activeIndex, handleScroll }) => {
  return (
    <>
      {/* Mobile: Vertical Dashed Navigation */}
      <section className="fixed lg:hidden right-3 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {
          sections.map((_, index) => (
            <button
              key={index}
              onClick={() => handleScroll(index)}
              className={`w-1 h-6 rounded-full transition-all
                ${
                  index === activeIndex
                    ? `scale-125 ${theme === "light" ? "bg-[var(--theme-400)]" : "bg-[var(--theme-300)]"}`
                    : "bg-[var(--theme-500)] opacity-40 hover:opacity-60"
                }`}
            />
          ))
        }
      </section>


      {/* PC: Classic Dots */}
      <section className="fixed hidden lg:flex bottom-10 left-1/2 transform -translate-x-1/2 space-x-5">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => handleScroll(index)}
            className={`w-5 h-5 rounded-full transition-all 
              ${
                index === activeIndex
                  ? `scale-125 ${theme === "light" ? "bg-[var(--theme-400)]" : "bg-[var(--theme-300)]"}`
                  : "bg-[var(--theme-500)] opacity-40 hover:opacity-60"
              }`}
          />
        ))}
      </section>
    </>
  )
}

export default Dotted
