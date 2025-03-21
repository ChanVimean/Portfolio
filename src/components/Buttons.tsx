import styles from "../styles/Button.module.css"

interface ButtonsProps {
  text: string,
  icon?: React.ReactNode
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
export const NeonEdgePress:React.FC<ButtonColor> = ({ text, icon, onClick, colorVarient = "primary" }) => {
  return (
    <button
      className={`${styles.NeonEdgePress} ${styles[colorVarient]}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </div>
    </button>
  )
}