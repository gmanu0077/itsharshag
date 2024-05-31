
import { BriefcaseBusiness, Home,Video,ShoppingCart, Rss, ProjectorIcon, MessageCircleHeart, UserIcon } from "lucide-react"
import Link from "next/link"
import { SiLinkedin,SiX, SiInstagram } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-12">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6 text-center">
        <nav className="flex items-center gap-4">
          {Links.map((link)=>{
            const Icon = link.icon;
            return(
          <Link
            className="flex items-center  text-sm font-medium tracking-wide transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={link.link}
          >
            <Icon className="h-4 w-4"/>
           <p>{link.label}</p> 
          </Link>
            )
})}
         
        
        </nav>
        <div className="grid max-w-xs items-center gap-4 sm:max-w-sm grid-flow-col justify-center lg:gap-8">
        {socials.map((social,index)=> {
            const Icon = social.icon;
          return(  <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
          )
        })}
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
            © 2024 Manu goel. All rights reserved.
          </p>
          <Link
            className="inline-flex h-6 items-center text-xs font-medium underline rounded-md hover:underline transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-900"
            href="#"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}


const Links = [
  {
    link: "#home",
    label:"Home",
    icon:Home,

},
{
  link: "#experiences",
  label:"Experience",
  icon:BriefcaseBusiness,

},

{
  link: "#products",
  label:"Products",
  icon:ShoppingCart

}


]
const socials = [
  {
      link: "https://twitter.com/gmanu0077",
      label:"X",
      icon:SiX,

  },

  {
      link: "https://www.linkedin.com/in/manu-goel-7899781a0/",
      label:"LinkedIn",
      icon:SiLinkedin,

  },
  
]