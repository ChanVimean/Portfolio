import { HiMiniHome, HiMiniDocumentText  } from "react-icons/hi2"
import { BiSolidInfoSquare, BiSolidContact } from "react-icons/bi"
import { AiFillProduct } from "react-icons/ai"
import styles from "../styles/BottomBar.module.css"

interface BottomBarProps {
  sections: string[],
  handleScroll: (index: number) => void
}


const BottomBar: React.FC<BottomBarProps> = ({sections, handleScroll}) => {

  const icons = [HiMiniHome, BiSolidInfoSquare, AiFillProduct, BiSolidContact, HiMiniDocumentText]

  return (
    <div className="flex justify-center fixed lg:hidden bottom-0 w-full h-20 md:h-28 px-4 py-2 md:px-16">
      <ul className={`
        w-full h-full bg-[var(--theme-300)] text-[var(--theme-100)]
        ${styles.buttonContainer}
      `}>
        {
          sections.map((text, index) => {
            const IconComponent = icons[index]
            return (
              <li
                key={text}
                onClick={() => handleScroll(index)}
              >
                <button className={styles.button}>
                  <IconComponent className="text-4xl md:text-6xl" />
                  {/* <span className="text-md font-medium mt-1">{text}</span> */}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BottomBar
