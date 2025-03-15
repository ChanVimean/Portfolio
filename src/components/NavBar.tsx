import { FaStar } from "react-icons/fa"
import { PiWaveformLight } from "react-icons/pi"
import { useTheme } from "../context/AppContext"

import { GiIceCube } from "react-icons/gi"

const NavBar = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="flex items-center w-screen px-4 py-2 text-2xl overflow-hidden justify-between">

      <section>
        <h1 className="font-semibold text-4xl">Rok Rak Dev</h1>
      </section>

      <section className={`${theme === "light" ? "bg-[var(--theme-200)]"
                           : "bg-[var(--theme-100"}
                           px-4 py-2 rounded-md shadow-md`}
      >
        <ul className="flex space-x-4 font-medium items-center">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Resume</button>
          </li>
          <li className="border-2 px-1 rounded-md">
            <button>Login</button>
            <span className="mx-1">/</span>
            <button>Register</button>
          </li>
        </ul>
      </section>

      <section className="flex space-x-2">
        <button className="flex border-2 px-2 rounded-md space-x-2 items-center">
          <PiWaveformLight  />
          <span>Music</span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex border-2 px-2 rounded-md space-x-2 items-center"
        >
          { theme === "light" ? <GiIceCube className="text-blue-400" /> : <FaStar className="text-yellow-300" />}
          <span>Theme</span>
        </button>
      </section>

    </nav>
  )
}

export default NavBar
