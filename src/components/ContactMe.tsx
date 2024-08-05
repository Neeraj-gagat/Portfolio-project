import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";



export const ContactMe = () => {
  const [from, setfrom] = useState("");
  const [body, setbody] = useState("");

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-email', {
        from,
        body,
      });
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

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
        <div className="flex justify-center text-4xl font-serif mb-14" >Contact Me</div>
        <p className="text-gray-700 -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:Neerajgagat9999@gmail.com">
          Neerajgagat9999@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col items-center"
        onSubmit={ async() => {
          await sendEmail();
        }}
      >
        <input
          className="h-14 w-full rounded-lg border border-black/10 px-4"
          placeholder="Your email"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          onChange={e => {
            setfrom(e.target.value);
          }}
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          name="message"
          required
          maxLength={1000}
          onChange={e => {
            setbody(e.target.value);
          }}
        />
        <button
          type="submit"
          value="Send Email"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
    </div>
}