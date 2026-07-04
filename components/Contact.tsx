"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "@/content/contact";
import profile from "@/content/profile";
import {
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaGithub,
FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("✅ Message sent successfully!");
      form.current.reset();
    } catch (error: any) {
      console.log("Status:", error?.status);
      console.log("Text:", error?.text);
      console.log("Full Error:", error);
      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section  
      id="contact"  
      className="min-h-screen bg-black text-white py-24 px-8"  
    >
<div className="max-w-7xl mx-auto px-4">

<h2 className="text-5xl font-bold text-center mb-16">  
      Contact Me  
    </h2>  

    <div className="grid md:grid-cols-2 gap-16">  

      {/* Left Side */}  

      <div>  

        <h3 className="text-3xl font-bold mb-8">  
          Let's Connect  
        </h3>  

        <p className="text-gray-400 mb-10 leading-8">  
          {profile.summary}
        </p>  

        <div className="space-y-6">  

          <div className="flex items-center gap-4">  
            <FaEnvelope className="text-blue-500 text-2xl" />  
            <span>{contact.email}</span>  
          </div>  

          <div className="flex items-center gap-4">  
            <FaPhone className="text-blue-500 text-2xl" />  
            <span>{contact.phone}</span>  
          </div>  

          <div className="flex items-center gap-4">  
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />  
            <span>{contact.location}</span>  
          </div>  

        </div>  

        <div className="flex gap-6 mt-10">  

          <a  
            href={contact.github} 
            target="_blank"
            rel="noopener noreferrer"    
            className="text-4xl hover:text-blue-500 transition"  
          >  
            <FaGithub />  
          </a>  

          <a  
            href={contact.linkedin}  
            target="_blank"
            rel="noopener noreferrer"  
            className="text-4xl hover:text-blue-500 transition"  
          >  
            <FaLinkedin />  
          </a>  

        </div>  

      </div>  

      {/* Right Side */}  

      <form  
        ref={form}  
        onSubmit={sendEmail}  
        className="space-y-6"  
      >  

        <input  
          type="text"  
          name="name"  
          required  
          placeholder="Your Name"  
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"  
        />  

        <input  
          type="email"  
          name="email"  
          required  
          placeholder="Your Email"  
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"  
        />  

        <textarea  
          rows={6}  
          name="message"  
          required  
          placeholder="Your Message"  
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"  
        />  

        <button  
          type="submit"  
          disabled={loading}  
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition disabled:opacity-50"  
        >  
          {loading ? "Sending..." : "Send Message"}  
        </button>  

        {status && (  
          <p className="text-green-400 font-semibold">  
            {status}  
          </p>  
        )}  

      </form>  

    </div>  

  </div>  
</section>

);
}