import { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const HireMe = () => {

  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
    .sendForm('service_e6exzrw', 'template_8fef9xm', formRef.current, {
      publicKey: '34TDI-WmaY04sBwIe',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setDone(true)
        document.emailForm.reset(); 
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );

  }

  return (
    <section id="contact" className='py-20 align-element' >
        <h1 className='text-clr-text-dark text-center text-6xl'>Hire Me</h1>

        <form className="mt-5 p-8 flex flex-col gap-5 items-center" ref={formRef} name="emailForm" onSubmit={handleSubmit} >
          <input className="p-2 w-full md:w-1/2 ring-1 ring-clr-pry rounded-sm" type="text" placeholder="Name" name="user_name" />
          <input className="p-2 w-full md:w-1/2 ring-1 ring-clr-pry rounded-sm" type="text" placeholder="Subject" name="user_subject" />
          <input className="p-2 w-full md:w-1/2 ring-1 ring-clr-pry rounded-sm" type="email" placeholder="Email" name="user_email" />
          <textarea name="message" rows={4} cols={40} className="p-2 h-10 ring-1 ring-clr-pry w-full md:w-1/2 rounded-sm" placeholder="Message ..."/>
          <button className="w-1/2 bg-clr-pry text-clr-white font-medium px-3 py-2 rounded-md cursor-pointer flex items-center justify-center gap-2 " > <span> <MdEmail /> </span> Email Me</button>
          {done && <h1 class="text-clr-text-pry text-center font-bold">Thank you, I will reply you as soon as possible</h1>}
        </form>
        <div className='flex justify-center gap-5 pt-5'>           
            
            <a href="https://github.com/Seye4"  className='block flex px-6 py-2 justify-center items-center gap-2  bg-clr-pry text-clr-white rounded-full hover:bg-clr-pry-400 text-clr-dark duration-300' target="_blank" >
                <FaGithub />
                <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/oluseye-ekerin-41653042/"  className='block flex px-6 py-2 justify-center items-center gap-2  bg-clr-pry text-clr-white rounded-full hover:bg-clr-pry-400 text-black duration-300' target="_blank" >
                <FaLinkedin />
                <p className="">Linkledn</p>
            </a>
        </div>
    </section>
  )
}

export default HireMe