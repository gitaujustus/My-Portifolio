import { useEffect, useState } from "react";
import supabase from "../config/supabase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, isLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  useEffect(() => {
    const Messages = async () => {
      const { data, error } = await supabase.from("Messages").select();
      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        setMessages(data);
      }
    };
    Messages();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    isLoading(true);
    const data = { Name, Email, Message };
    try {
      const res = await fetch("https://blog-server-zeta.vercel.app/mails", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        isLoading(false);
        e.target.reset();
        toast.success("Message Sent Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      } else {
        throw new Error("Failed to add item");
      }
    } catch (error) {
      console.log(error);
      isLoading(false);
      toast.error("An Error Occured !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
    //sending to supabase
    // const { data, error } = await supabase
    //   .from("Messages")
    //   .insert({ Name, Email, Message });
    // if (error) {
    //   console.log(error);
    // } else {
    //   setSuccess(true);
    //   e.target.reset();
    //   setTimeout(() => {
    //     setSuccess(false);
    //   }, 3000);
    // }
    // isLoading(false);
  };
  return (
    <div id="contacts" className="mx-auto px-6 sm:px-10 md:px-20 about">
      <h1 className="text-2xl text-yellow-500 underline text-center">
        Contact Me
      </h1>
      {/* <div className='text-white'>
        <p>
          <span className='text-yellow-500'>Phone Number:</span> +254729144533
        </p>
        <p>
          <span className='text-yellow-500'>Email:</span> jgathiru02@gmail.com
        </p>
      </div> */}
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h2 className="text-center text-white text-xl underline">
            Say Hi to Justus!
          </h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-3">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-white"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                defaultValue={""}
              />
            </div>
            <div>
              <input
              style={{cursor:"pointer"}}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                type="submit"
                value={loading ? "Loading..." : "Submit"}
                // disabled={loading}
              />
            </div>
            {success && (
              <div className="text-green-500">Message Sent Successfully!</div>
            )}
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
