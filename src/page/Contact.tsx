import { FaGithub, FaLinkedin, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa"
import { IoIosMail, IoIosPin } from "react-icons/io"

interface ContactProps {
  theme: "light" | "dark"
}


const Contact:React.FC<ContactProps> = ({ theme }) => {



  return (
    <div className="w-screen h-screen flex flex-col justify-evenly px-48 py-28 space-y-10">

      <section className="w-full h-1/4 flex items-center space-x-10 text-2xl font-medium">
        <button className="h-full w-full flex flex-col items-center rounded-sm p-8 space-y-2 shadow-md bg-blue-400">
          <IoIosMail className="text-6xl" />
          <span className="text-3xl font-bold">EMAIL</span>
          <span className="underline">chanvimean09@gmail.com</span>
        </button>

        <button className="h-full w-full flex flex-col items-center rounded-sm p-8 space-y-2 shadow-md bg-sky-500">
          <FaTelegramPlane className="text-6xl" />
          <span className="text-3xl font-bold">TELEGRAM</span>
          <span className="underline">@chanvimean9</span>
        </button>

        <button className="h-full w-full flex flex-col items-center rounded-sm p-8 space-y-2 shadow-md bg-blue-300">
          <FaGithub className="text-6xl" />
          <span className="text-3xl font-bold">GITHUB</span>
          <span>ChanVimean</span>
        </button>

        <button className="h-full w-full flex flex-col items-center rounded-sm p-8 space-y-2 shadow-md bg-sky-400">
          <FaLinkedin className="text-6xl" />
          <span className="text-3xl font-bold">LINKEDIN</span>
          <span>Chan Vimean</span>
        </button>
      </section>

      <section className="w-full h-2/4 flex text-xl font-medium overflow-hidden">
        <article className="w-2/3 space-y-8">
          <h1 className="text-4xl font-bold text-center">Contact Info</h1>
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
                <a href="#">yourname@email.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin />
                <h2>LinkedIn:</h2>
                <a href="#">Chan Vimean</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaGithub />
                <span>Github:</span>
                <a href="#">ChanVimean</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>Phone:</span>
                <a href="#">090 804 644</a>
              </li>
              <li className="flex items-center space-x-2">
                <IoIosPin />
                <span>Location:</span>
                <a href="#">Phnom Penh, Cambodia</a>
              </li>
            </ul>
          </div>
        </article>

        <form className="w-1/3 space-y-4">
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
    </div>
  )
}

export default Contact