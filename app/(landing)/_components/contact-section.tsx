"use client"

import { motion } from "framer-motion"
import { Component as EtherealShadow } from "@/components/ui/ethereal-shadow"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconSend,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitterFilled,
  IconBrandInstagram
} from "@tabler/icons-react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast"

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      msg: "",
    }
  });


  // emailjs for contact form
  const [mailSending, setMailSending] = useState(false);

  const handleSendMessage = async (msgData: any) => {
    setMailSending(true);
    const fullName = `${msgData.firstName} ${msgData.lastName}`.trim();

    Swal.fire({
      title: "Sending Message...",
      text: "Please wait a moment!",
      icon: "info",
      color: "#fff",
      background: "#05030efc",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      console.log("Sending message to admin and auto-reply to user");

      // 1️⃣ Send message to Admin (your Gmail)
      await emailjs.send(
        "service_025dcpe", // Your Service ID
        "template_etaio6n", // Admin Template ID
        {
          name: fullName,
          email: msgData.email,
          msg: msgData.msg,
        },
        "F9-rnJCGVisBrLm_G" // Public Key
      );

      toast.success("Message Sent!");
      Swal.fire({
        title: "Message Sent!",
        text: `Thank you, ${fullName}! Please check your email.`,
        icon: "success",
        confirmButtonText: "Okay",
        color: "#fff",
        background: "#05030efc",
      });

      reset(); // Reset form
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Message Sending Failed!",
        text: (error as any)?.text || "Something went wrong! Please try again later.",
        icon: "error",
        confirmButtonText: "Close",
        color: "#fff",
        background: "#05030efc",
      });
    } finally {
      setMailSending(false);
    }
  };

  useEffect(() => {
    if (errors.firstName) toast.error(errors.firstName.message || "First name is required", { duration: 2000 });
    if (errors.lastName) toast.error(errors.lastName.message || "Last name is required", { duration: 2000 });
    if (errors.email) toast.error(errors.email.message || "Email is required", { duration: 2000 });
    if (errors.msg) toast.error(errors.msg.message || "Message is required", { duration: 2000 });
  }, [errors.firstName, errors.lastName, errors.email, errors.msg]);


  const contactInfo = [
    {
      icon: <IconMail className="w-6 h-6" />,
      title: "Email",
      value: "alokroy602701@gmail.com",
      link: "mailto:alokroy602701@gmail.com"
    },
    {
      icon: <IconPhone className="w-6 h-6" />,
      title: "Phone",
      value: "01719277951",
      link: "tel:+8801719277951"
    },
    {
      icon: <IconMapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <IconBrandGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/alok4d",
      color: "hover:text-gray-400"
    },
    {
      icon: <IconBrandLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alok-roy-likedin/",
      color: "hover:text-blue-400"
    },
    {
      icon: <IconBrandFacebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://www.facebook.com/alok.roy.738161",
      color: "hover:text-blue-400"
    },
    {
      icon: <IconBrandTwitterFilled className="w-6 h-6" />,
      name: "Twitter",
      url: "https://x.com/AlokRoy1880109",
      color: "hover:text-blue-400"
    },
    {
      icon: <IconBrandInstagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/alokroy602701/",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="relative py-20 px-8 md:px-16 lg:px-24 bg-black text-white overflow-hidden min-h-screen">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0">
        <EtherealShadow
          color="rgba(147, 51, 234, 0.4)"
          animation={{ scale: 80, speed: 60 }}
          noise={{ opacity: 0.6, scale: 1.2 }}
          sizing="fill"
          className="opacity-50"
        />
      </div>
      
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/60 to-purple-800/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to start your next project? Let's discuss how I can help bring your ideas to life.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Message</h3>
            <form onSubmit={handleSubmit(handleSendMessage)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-purple-500"
                    {...register("firstName", { required: "First name is required" })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
                    className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-purple-500"
                    {...register("lastName", { required: "Last name is required" })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-purple-500"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
                <Input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-purple-500"
                  {...register("subject")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={8}
                  className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-purple-500 resize-none"
                  {...register("msg", { required: "Message is required" })}
                />
              </div>
              <Button 
                type="submit"
                disabled={mailSending}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white border-none"
              >
                <IconSend className="w-4 h-4 mr-2" />
                {mailSending ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Follow Me</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-neutral-300 ${social.color}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h4 className="text-lg font-semibold mb-3 text-white">Let's Work Together</h4>
              <p className="text-neutral-300 leading-relaxed text-justify tracking-tight">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you have a specific idea in mind or need help conceptualizing your next big thing, 
                I'm here to help bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 