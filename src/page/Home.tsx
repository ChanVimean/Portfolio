import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { AquaPress, RetroPress } from "../components/Buttons"


// ? HomeSection Component
const HomeSection = () => {
  return (
    <div className="w-full h-full lg:p-28">
      <main className="flex flex-col w-full h-full justify-center items-center
        text-center lg:text-start lg:items-start font-bold p-4 md:p-8 lg:p-0 space-y-10"
      >
        <article className="space-y-1 md:space-y-2">
          <h3 className="text-md md:text-2xl">Hey I'm Chan Vimean</h3>
          <h1 className="text-2xl md:text-4xl">Full-Stack Developer &</h1>
          <h1 className="text-2xl md:text-4xl">UX/UI Designer</h1>
          <h3 className="text-md md:text-2xl">Innovating through design, refining through code.</h3>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm md:text-lg lg:text-xl">
            <span className="underline">Workflow:</span>
            Inspiration
            <span className="mx-1 md:mx-2"><FaArrowRightLong /></span>
            Design
            <span className="mx-1 md:mx-2"><FaArrowRightLong /></span>
            Build
            <span className="mx-1 md:mx-2"><FaArrowRightLong /></span>
            Deploy
          </div>
        </article>

        <section className="flex space-x-6 text-lg md:text-2xl">
          <RetroPress text="Get Start" icon={<FaArrowRight />} />
          <AquaPress text="Resume" />
        </section>

        <section className="mb-20 lg:mb-0">
          <ul className="flex h-full w-full lg:w-1/5 justify-start items-center space-x-4 text-2xl md:text-4xl lg:text-5xl">
            <li className="text-blue-600 cursor-pointer duration-150 ease-in-out hover:text-blue-500 active:text-blue-400"><FaFacebook /></li>
            <li className="text-blue-500 cursor-pointer duration-150 ease-in-out hover:text-blue-400 active:text-blue-300"><FaTelegram /></li>
            <li className="text-cyan-600 cursor-pointer duration-150 ease-in-out hover:text-cyan-500 active:text-cyan-400"><FaLinkedin /></li>
            <li className="text-cyan-700 cursor-pointer duration-150 ease-in-out hover:text-cyan-600 active:text-cyan-500"><FaGithub /></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col-reverse lg:flex-row">
      <div className="w-full h-4/5 lg:h-auto lg:w-3/5">
        <HomeSection />
      </div>
      <div className="w-full h-1/5 lg:w-2/5 lg:h-auto lg:py-36 lg:pe-16 overflow-hidden">
        <img
          src="Tony_Stark.jpg"
          alt="Home Banner"
          className="w-full h-full object-cover" />
      </div>

    </div>
  )
}

export default Home