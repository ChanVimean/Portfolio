import { FaStar } from "react-icons/fa";
import { PiWaveformLight } from "react-icons/pi";
import { MdLightMode } from "react-icons/md";

interface NavBarProps {
  sections: string[]
  theme: "light" | "dark"
  toggleTheme: () => void
}


const NavBar: React.FC<NavBarProps> = ({sections, theme, toggleTheme}) => {

  return (
    <nav className="flex items-center w-screen px-4 py-2 md:px-8 md:py-4 text-2xl overflow-hidden justify-between">

      <section>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Rok Rak Dev</h1>
      </section>

      <section
        className={`${theme === "light" ? "bg-[var(--theme-100)]" : "bg-[var(--theme-200)]"}
                    hidden lg:block px-4 py-2 rounded-md shadow-md`}
      >
        <ul className="flex space-x-4 font-medium items-center">
          {
            sections.map(section => (
              <li key={section}>
                <button>{section}</button>
              </li>
            ))
          }
          <li className="border-2 px-1 rounded-md">
            <button>Login</button>
            <span className="mx-1">/</span>
            <button>Register</button>
          </li>
        </ul>
      </section>

      <section className="flex space-x-4">
        <button className={`${theme == "light"
                            ? "text-[var(--theme-500)] border-2 border-[var(--theme-500)]"
                            : "bg-[var(--theme-500)] text-[var(--theme-100)] border-2 border-[var(--theme-500)]"}
          flex px-2 rounded-md lg:space-x-2 items-center cursor-pointer`}
        >
          <PiWaveformLight />
          <span className="hidden lg:block">Music</span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex border-2 px-2 rounded-md lg:space-x-2 items-center cursor-pointer"
        >
          {theme === "light" ? (
            <FaStar className="m-1 text-yellow-300" />
          ) : (
            <MdLightMode className="m-1 text-yellow-300" />
          )}
          <span className="hidden lg:block">Theme</span>
        </button>
      </section>

    </nav>
  );
};

export default NavBar;