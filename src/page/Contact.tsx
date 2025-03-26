import { FaGithub, FaLinkedin, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa"
import { IoIosMail, IoIosPin } from "react-icons/io"


// ? Links Component
const LinksComponent = () => {
  return (
    <section className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center md:gap-10 text-md lg:text-lg font-medium">
      <a
        href="https://chat.google.com/"
        className="h-full w-full flex flex-col items-center p-8 space-y-2 shadow-md cursor-pointer duration-150 ease-in-out bg-blue-400 hover:bg-blue-500 active:bg-blue-300"
      >
        <IoIosMail className="text-5xl lg:text-6xl" />
        <span className="text-xl lg:text-2xl font-bold">EMAIL</span>
        <span className="underline break-all">chanvimean09@gmail.com</span>
      </a>

      <a
        href="https://t.me/chanvimean9"
        className="h-full w-full flex flex-col items-center p-8 space-y-2 shadow-md cursor-pointer duration-150 ease-in-out bg-sky-500 hover:bg-sky-600 active:bg-sky-400"
      >
        <FaTelegramPlane className="text-5xl lg:text-6xl" />
        <span className="text-xl lg:text-2xl font-bold">TELEGRAM</span>
        <span className="underline">@chanvimean9</span>
      </a>

      <a
        href="https://github.com/ChanVimean"
        className="h-full w-full flex flex-col items-center p-8 space-y-2 shadow-md cursor-pointer duration-150 ease-in-out bg-blue-300 hover:bg-blue-400 active:bg-blue-200"
      >
        <FaGithub className="text-5xl lg:text-6xl" />
        <span className="text-xl lg:text-2xl font-bold">GITHUB</span>
        <span>ChanVimean</span>
      </a>

      <a
        href="https://www.linkedin.com/in/chan-vimean-9955332a2/"
        className="h-full w-full flex flex-col items-center p-8 space-y-2 shadow-md cursor-pointer duration-150 ease-in-out bg-sky-400 hover:bg-sky-500 active:bg-sky-300"
      >
        <FaLinkedin className="text-5xl lg:text-6xl" />
        <span className="text-xl lg:text-2xl font-bold">LINKEDIN</span>
        <span>Chan Vimean</span>
      </a>
    </section>
  )
}


// ? Info Component
const InfoComponent = () => {
  return (
    <section className="w-full flex-shrink-0 flex flex-col lg:flex-row text-xl font-medium space-y-6 lg:space-y-0">
      <article className="w-full lg:w-2/3 space-y-8 text-lg md:text-xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Contact Info</h1>
        <div className="space-y-4">
          <p>
            Let's connect! Whether you have a project idea, a collaboration request, 
            or just want to say hi, feel free to reach out. I'm always open to discussing 
            new opportunities, creative ideas, or tech-related topics.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <IoIosMail />
              <span>Email:</span>
              <a
                href="https://chat.google.com/"
                className="text-blue-500 duration-150 ease-in-out hover:text-blue-600 active:text-blue-400"
              >
                yourname@email.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin />
              <h2>LinkedIn:</h2>
              <a
                href="https://www.linkedin.com/in/chan-vimean-9955332a2/"
                className="text-blue-500 duration-150 ease-in-out hover:text-blue-600 active:text-blue-400"
              >
                Chan Vimean
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaGithub />
              <span>Github:</span>
              <a
                href="https://github.com/ChanVimean"
                className="text-blue-500 duration-150 ease-in-out hover:text-blue-600 active:text-blue-400"
              >
                ChanVimean
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>Phone:</span>
              <span>
                090 804 644
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <IoIosPin />
              <span>Location:</span>
              <span>
                Phnom Penh, Cambodia
              </span>
            </li>
          </ul>
        </div>
      </article>

      <form className="w-full lg:w-1/3 space-y-4 text-center lg:text-start">
        <div>
          <h2 className="text-2xl font-semibold">Email</h2>
          <input
            type="text"
            placeholder="Enter a value emial address"
            className="w-full ms-2 p-1 border-none outline-none opacity-75 font-normal" />
          <hr className="opacity-50" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Name</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full ms-2 p-1 border-none outline-none opacity-75 font-normal" />
          <hr className="opacity-50" />
        </div>
        <div>            
          <h2 className="text-2xl font-semibold">Message</h2>
          <textarea
            placeholder="Enter your message"
            className="w-full ms-2 p-1 border-none outline-none opacity-75 font-normal resize-y min-h-[100px]" />
          <hr className="opacity-50" />
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded-sm shadow-sm duration-150 ease-in-out hover:bg-blue-500 active:bg-blue-300"
        >
          SUBMIT
        </button>
      </form>
    </section>
  )
}


const Contact = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center px-4 lg:p-20">
      <main className="w-full h-4/5 flex flex-col justify-evenly overflow-y-auto overflow-x-hidden
        border-y-2 lg:border-none border-gray-400 space-y-10 pb-4"
      >
        <LinksComponent />
        <InfoComponent />
      </main>
    </div>
  )
}

export default Contact