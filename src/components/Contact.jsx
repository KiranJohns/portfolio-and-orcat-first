import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion" ;
import emailjs from "@emailjs/browser";

import { styles } from "../styles"; 
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Alert from "./Alert";

// template_005nxdk
// service_sup5425
// NP7FdfWpmJH1Z5shG


const Contact = () => {
  
  const formRef=useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isloading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleFocus = () => { setCurrentAnimation('walk')}

  const handleBlur = () => { setCurrentAnimation('idle')}


 
  const handleSumbit = (e)=>{
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('hit')
 

    
      
    emailjs.send(
      "service_xu1taam",
      "template_zodn1gc",
 
      {
        from_name:form.name,
        to_name:"Kiran",
        from_email:form.email,
        to_email:'mekiranjohnson@gmail.com',
        message:form.message
      },
  
      "NP7FdfWpmJH1Z5shG",
    ).then(()=>{
      setIsLoading(false);
      showAlert({
        show:true, 
        text:'Message sent successfully!',
        type:'Success'
      })
      
      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({name: '', email: '', message:''})
      }, [3000]);
    
     
    })
    .catch((error)=>{
      setIsLoading(false)
      setCurrentAnimation('idle')
      showAlert({
        show: true, 
        text: 'Message not sent',
        type: 'danger'
      })
      console.log(error);
     
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

     <motion.div variants={slideIn('left','tween', 0.2, 1)}
     className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
         <p className={styles.sectionSubText}>
          Get in touch</p>
         <h3 className={styles.sectionHeadText
        }>Contact.</h3>

<form ref={formRef} onSubmit={handleSumbit} className="mt-12 flex flex-col gap-8">

   <label className="mt-12 flex flex-col gap-8">
     <span className="text-white font-medium mb-2">Your Name</span>  

     <input type="text"
     name='name'
     value={form.name}
     onChange={handleChange}
     placeholder="What's your name?"
     className="bg-tertiary py-4 px-6 placeholder:text-secondary
     text-white rounded-lg outline-none border-none font-medium"
     />

 </label>  
 <label className=" flex flex-col gap-8">
     <span className="text-white font-medium mb-2">Your Email</span>  

     <input type="email"
     name='email'
     value={form.email}
     onChange={handleChange}
     placeholder="What's your email?"
     className="bg-tertiary py-4 px-6 placeholder:text-secondary
     text-white rounded-lg outline-none border-none font-medium"
     />

 </label>  

 <label className=" flex mb-6 flex-col gap-8">
     <span className="text-white font-medium mb-2">Your Message</span>  

     <textarea
     rows="7"
      type="text"
     name='message'
     value={form.message}
     onChange={handleChange}
     placeholder="What do you like to say?"
     className="bg-tertiary py-4 px-6 placeholder:text-secondary
     text-white rounded-lg outline-none border-none font-medium"
     />

 </label>  
 <button 
 type="submit"
 className="bg-tertiary py-3 px-8 outline-none w-fit text-white
 font-bold shadow-md shadow-primary rounded-xl
 "
 >
  {isloading ? 'Sending' : 'Send'}
 </button>

</form>
     </motion.div>

  <motion.div 
  variants={slideIn('right','tween', 0.2, 1)}
  className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  >
  <EarthCanvas/>
  </motion.div>
          
    </div>
  )
}

export default SectionWrapper(Contact, "contact")