import { HiMiniHome, HiMiniDocumentText  } from "react-icons/hi2"
import { BiSolidInfoSquare, BiSolidContact } from "react-icons/bi"
import { AiFillProduct } from "react-icons/ai"

interface BottomBarProps {
  sections: string[]
  theme: "light" | "dark"
}

const BottomBar: React.FC<BottomBarProps> = ({sections, theme}) => {

  const icons = [HiMiniHome, BiSolidInfoSquare, AiFillProduct, BiSolidContact, HiMiniDocumentText]

  return (
    <div className={`${theme === "light" ? "bg-[var(--theme-400)]" : "bg-[var(--theme-100)]"}
                    fixed lg:hidden bottom-0 w-full px-6 py-4 md:px-12`}
    >
      <ul className="flex justify-between space-x-3">
        {
          sections.map((section, index) => {
            const IconComponent = icons[index]
            return (
              <li key={section} className="flex flex-col items-center">
                <IconComponent className="text-4xl" />
                <span className="text-md font-medium mt-1">{section}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BottomBar
