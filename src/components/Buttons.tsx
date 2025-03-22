import styles from "../styles/Button.module.css"

interface ButtonsProps {
  text: string,
  icon?: React.ReactNode,
  theme?: "light" | "dark"
  onClick?: () => void
}

interface ButtonColor extends ButtonsProps {
  colorVarient?: "primary" | "secondary" | "tertiary"
}


// ? Physical Press: Solid Color
export const RetroPress:React.FC<ButtonsProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className={styles.RetroPress}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </div>
    </button>
  )
}

// ? Physical Press: Solid Color Blue
export const AquaPress:React.FC<ButtonsProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className={styles.AquaPress}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </div>
    </button>
  )
}

// ? NeonEdgePress
export const JellyPress:React.FC<ButtonColor> = ({ text, icon, onClick, colorVarient = "primary" }) => {
  return (
    <button
      className={`${styles.JellyPress} ${styles[colorVarient]}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </div>
    </button>
  )
}

// ? JellyGlowPress
export const JellyGlowPress:React.FC<ButtonColor> = ({ text, icon, onClick }) => {
  return (
    /* From Uiverse.io by ParasSalunke */ 
    <div className="flex items-center justify-center h-screen">
      <div className="relative group">
        <button
          onClick={onClick}
          className={`relative inline-block p-px font-semibold leading-6 text-[var(--theme-500)]
            bg-[var(--theme-400)] shadow-2xl cursor-pointer rounded-xl shadow-zinc-900
            transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95`}
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400
            via-blue-400 to-purple-400 p-[2px] opacity-0 transition-opacity duration-500
              group-hover:opacity-100" />
          <span className="relative z-10 block px-6 py-3 rounded-xl">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">
                {text}
              </span>
              { 
                icon &&
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  {icon}
                </span>
              }
            </div>
          </span>
        </button>
      </div>
    </div>
  )
}