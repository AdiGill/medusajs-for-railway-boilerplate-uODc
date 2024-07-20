import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import nrhead from './nrhead.png'; // Importing the image


const Hero = () => {
  return (
    <div className="h-[93vh] w-full bg-cover relative bg-stone-900 bg-[url('https://i.ibb.co/TMqH6Cy/Desktop-5.png')]">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
        <div>
          <img
            src="https://i.ibb.co/yNPFGjv/nrhead.png"
            alt="nrhead"
            className="w-full h-full py-16"
          />
        </div>
          {/* <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            No Relation
          </Heading> */}
        </span>
        <a
          href="/store"
          className=" animate-pulse  text-xl-semi leading-10 text-white font-normal hover:border-b border-radius-10 text-center justify-center" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }} >
            Shop→
          
        </a>
        
      </div>
    </div>
  )
}

export default Hero
