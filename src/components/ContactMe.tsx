// // require("dotenv-webpack")
import { motion } from "framer-motion";
import { GrMail } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



// import { FaPaperPlane } from "react-icons/fa";
// import { useState } from "react";
// import axios from "axios";

export const ContactMe = () => {
  return <div className="flex justify-center"> 
  <motion.section
  id="contact"
    className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{ once: true }}
  >
    <div className="text-4xl font-serif mb-16">My Contacts</div>
    <div className="justify-center flex space-x-0 sm:space-x-8 ">
      
    <a className="p-4 hover:scale-[1.15] hover:text-gray-900 transition cursor-pointer" href="mailto:Neerajgagat9999@gmail.com">
      <GrMail size={50}/>
    </a>
    <a className="p-4 hover:scale-[1.15] hover:text-gray-900 transition cursor-pointer " href="https://github.com/Neeraj-gagat">
      <GrGithub size={50}/>
    </a>
    <a href="https://in.linkedin.com/in/neeraj-gagat-6b59b8210?original_referer=https%3A%2F%2Fwww.google.com%2F" className="p-4 hover:scale-[1.15] hover:text-gray-900 transition cursor-pointer ">
      <FaLinkedin size={50}/>
    </a>
    <a href="https://x.com/Neeraj_tw" className="p-4 hover:scale-[1.15] hover:text-gray-900 transition cursor-pointer ">
      <FaSquareXTwitter size={50} /></a>
    </div>
    
  </motion.section>
  </div>
}

// export const ContactMe = () => {
//   const [from, setfrom] = useState("");
//   const [body, setbody] = useState("");

//   const sendEmail = async () => {
//     try {
//       const response = await axios.post(`https://webservice-send-email.onrender.com/send-email`, {
//         from,
//         body,
//       });
//       console.log('Email sent successfully:', response.data);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };
  

//     return <div className="flex justify-center">
//     <motion.section
//     id="contact"
//     className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
//     initial={{ opacity: 0 }}
//     whileInView={{
//       opacity: 1,
//     }}
//     transition={{
//       duration: 1,
//     }}
//     viewport={{ once: true }}
//     >
//         <div className="flex justify-center text-4xl font-serif mb-14" >Contact Me</div>
//         <p className="text-gray-700 -mt-4">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:Neerajgagat9999@gmail.com">
//           Neerajgagat9999@gmail.com
//         </a>{" "}
//         or through this form.
//       </p>
//       <form
//         className="mt-10 flex flex-col items-center"
//         onSubmit={ async() => {
//           await sendEmail();
//         }}
//       >
//         <input
//           className="h-14 w-full rounded-lg border border-black/10 px-4"
//           placeholder="Your email"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           onChange={e => {
//             setfrom(e.target.value);
//           }}
//         />
//         <textarea
//           className="h-52 w-full my-3 rounded-lg border border-black/10 p-4"
//           placeholder="Your message"
//           name="message"
//           required
//           maxLength={1000}
//           onChange={e => {
//             setbody(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           value="Send Email"
//           className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
//         >
//           Submit{" "}
//           <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
//         </button>
//       </form>
//     </motion.section>
//     </div>
// }