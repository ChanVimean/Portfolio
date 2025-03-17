import { FaStar } from "react-icons/fa";
import { PiWaveformLight } from "react-icons/pi";
import { useTheme } from "../context/AppContext";
import { GiIceCube } from "react-icons/gi";



const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const sections = ["Home", "About", "Projects", "Contact", "Resume"];

  return (
    <>
      <nav className="hidden lg:flex items-center w-screen px-8 py-4 text-2xl overflow-hidden justify-between">

        <section>
          <h1 className="font-semibold text-4xl">Rok Rak Dev</h1>
        </section>

        <section
          className={`${theme === "light" ? "bg-[var(--theme-100)]" : "bg-[var(--theme-200)]"}
                      px-4 py-2 rounded-md shadow-md`}
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
            flex px-2 rounded-md space-x-2 items-center cursor-pointer`}
          >
            <PiWaveformLight />
            <span>Music</span>
          </button>
          <button
            onClick={toggleTheme}
            className="flex border-2 px-2 rounded-md space-x-2 items-center cursor-pointer"
          >
            {theme === "light" ? (
              <GiIceCube className="text-blue-500" />
            ) : (
              <FaStar className="text-yellow-300" />
            )}
            <span>Theme</span>
          </button>
        </section>

      </nav>

      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-5">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-full cursor-pointer transition-all 
              ${
                index === 0
                  ? `scale-125 ${theme === "light" ? "bg-[var(--theme-400)]" : "bg-[var(--theme-300)]"}`
                  : "bg-[var(--theme-500)] opacity-40 hover:opacity-60"
              }`}
          />
        ))}
      </div>
    </>
  );
};

export default NavBar;