interface ButtonsProps {
  theme: "light" | "dark"
  title: string
}

const classProperties: string = "cursor-pointer rounded-full px-4 py-2 border-4 duration-150 ease-in-out shadow-lg"


export const SpaceButton:React.FC<ButtonsProps> = ({ theme, title }) => {
  return (
    <div
      className={`
        text-[var(--theme-100)] border-[var(--theme-300)] hover:opacity-90 active:opacity-80
        ${classProperties}
        ${theme === "light"
          ? "bg-[var(--theme-500)]"
          : "bg-[var(--theme-300)]"
    }`}>
      {title}
  </div>
  )
}

export const SkyButton:React.FC<ButtonsProps> = ({ theme, title }) => {
  return (
    <div
      className={`
        bg-[var(--theme-400)]
        ${classProperties}
        ${theme === "light"
          ? "text-[var(--theme-100)] border-[var(--theme-200)] hover:bg-[var(--theme-300)] active:bg-[var(--theme-400)]"
          : "text-[var(--theme-500)] border-[var(--theme-500)] hover:opacity-90 active:opacity-100"
    }`}>
      {title}
    </div>
  )
}

export const GhostButton:React.FC<ButtonsProps> = ({ theme, title }) => {
  return (
    <div
      className={`
        ${classProperties}
        ${theme === "light"
          ? "bg-[var(--theme-100)] border-[var(--theme-200)] hover:opacity-80 active:opacity-100"
          : "bg-transparent border-[var(--theme-500)] hover:opacity-80 active:bg-[var(--theme-200)]"
    }`}>
      {title}
    </div>
  )
}