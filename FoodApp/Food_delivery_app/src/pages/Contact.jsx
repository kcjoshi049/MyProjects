import { useForm } from "react-hook-form";
import { FaHeadphones } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";

const Contact = () => {
  // using useForm hook
  let box = [
    {
      logo: <FaLocationDot size={30} />,
      title: "Our Location",
      info: "The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom",
    },
    {
      logo: <FaHeadphones size={30} />,
      title: "Our Contact",
      info: "+(91) 5478-369-874",
      info2: "+(91) 9876-543-210",
    },
    {
      logo: <IoIosMail size={30} />,
      title: "Mail Us",
      info: "abc425@gmail.com",
      info2: "abc4258@gmail.com",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://food-delivery-api-r3y6.onrender.com/contact",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message || "Message sent successfully");
      reset(); // clear form
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Try again!");
    }
  };
  // top image
  let obj = {
    url: "https://media.istockphoto.com/id/639139850/photo/kitchen-table-with-a-knife-spices-herbs.jpg?s=612x612&w=0&k=20&c=X7wfgn9fI9XCtWPAyDWmBsLo1g8XgPYD1dJnXIJ4pTg=",
    name: "Contact Us",
  };

  return (
    <div
      className="w-[80vw] m-auto flex flex-col gap-20"
      style={{ fontFamily: '"Josefin Sans", sans-serif' }}
    >
      <TopImage url={obj.url} name={obj.name} />
      {/* location, contact and mail section */}
      <div className="flex justify-between">
        {box.map((elem) => {
          return (
            <motion.div
              className="flex flex-col items-center w-[25vw] px-10 py-10 gap-3 bg-black/20"
              key={elem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center p-5 bg-red-900 text-white">
                {elem.logo}
              </div>
              <h1 className="text-3xl text-red-800">{elem.title}</h1>
              <div className="text-[18px] w-[15vw] flex flex-col justify-center items-center">
                <p>{elem.info}</p>
                <p>{elem.info2}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* final contact us form */}
      <div className="flex gap-10">
        <motion.div
          className="bg-[url(https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D)] h-[90vh] w-[60vw] bg-cover"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-10"
        >
          <div>
            <h1 className="text-[48px]">Get In Touch</h1>
            <p className="text-[18px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </p>
          </div>
          {/* from here our form starts */}
          <form
            action="post"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            <div className="flex justify-between gap-5">
              {/* this is name input */}
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  {...register(
                    "name",
                    { required: "name is required" },
                    {
                      minLength: {
                        value: 3,
                        message: "minimum 3 characters required",
                      },
                    }
                  )}
                  className="placeholder-black px-3 h-[52px] bg-black/20 outline-none border-2 border-black/50 "
                />
                {touchedFields.name && errors.name && (
                  <p className="text-red-900">{errors.name.message}</p>
                )}
              </div>
              {/* this is contact input */}
              <div className="flex flex-col gap-1 w-full">
                <input
                  type="text"
                  name="contact"
                  placeholder="Phone no"
                  {...register("contact", {
                    required: "Phoe number is required",
                    minLength: {
                      value: 10,
                      message: "Enter a valid number",
                    },
                    maxLength: {
                      value: 10,
                      message: "Enter a valid number",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid number",
                    },
                  })}
                  className="placeholder-black  px-3 h-[52px] bg-black/20 border-2 border-black/50 outline-none"
                />
                {touchedFields.contact && errors.contact && (
                  <p className="text-red-900">{errors.contact.message}</p>
                )}
              </div>
            </div>
            {/* this is email input */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="email"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 15,
                    message: "Minimum 15 characters required",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum 20 characters allowed",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="placeholder-black  px-3 h-[52px] bg-black/20 border-2 border-black/50 w-full outline-none"
              />
              {touchedFields.email && errors.email && (
                <p className="text-red-900">{errors.email.message}</p>
              )}
            </div>
            {/* this is message input */}
            <div className="flex flex-col gap-1">
              <textarea
                name="message"
                placeholder="Message"
                className="placeholder-black  px-3 bg-black/20 border-2 border-black/50 w-full h-45 outline-none pt-3 "
                maxLength={1000}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 50,
                    message: "Minimum 50 characters required",
                  },
                })}
              ></textarea>
              {touchedFields.message && errors.message && (
                <p className="text-red-900">{errors.message.message}</p>
              )}
            </div>
            {/* this is submit button */}
            <div className="flex justify-between">
              <motion.button
                type="submit"
                className="self-start min-h-[52px] w-[10vw] cursor-pointer border-2 font-medium"
                initial={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  color: "#000",
                  borderColor: "rgba(0, 0, 0, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(0,0,0)",
                  color: "#fff",
                  borderColor: "rgba(0, 0, 0, 1)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                Contact Us
              </motion.button>
              <motion.button
                type="reset"
                className="self-start min-h-[52px] w-[10vw] cursor-pointer border-2 font-medium"
                initial={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  color: "#000",
                  borderColor: "rgba(0, 0, 0, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(0,0,0)",
                  color: "#fff",
                  borderColor: "rgba(0, 0, 0, 1)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                Reset
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
