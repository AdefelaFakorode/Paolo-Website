import { Users, Mail, Map, MessageSquare } from "lucide-react";
function Contact() {
  return (
    <div className=" bg-black w-full py-10 space-y-10 text-white drop-shadow-xl">
      <div className="md:space-y-2">
        <h1 className="text-white text-[35px] md:text-5xl font-extrabold xl:text-6xl text-center xl:text-center">
          LET'S CONNECT
        </h1>
        <p className="text-white text-[13px] text-center md:text-[16px] xl:text-center font-semibold xl:text-xl">
          I'm always intrested in working with others!
        </p>
        {/*Ways to reach*/}
      </div>
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-2 xl:justify-center xl:mx-auto px-8 lg:px-30 xl:px-120 2xl:px-250 font-semibold">
  <div className="flex items-center justify-between rounded-xl border p-4">
    <div className="flex items-center gap-4">
      <Map size={40} />
      <div>
        <span className="text-[16px]">Location</span>
        <p className="text-[14px]">New York–New Jersey Metro Area</p>
      </div>
    </div>
  </div>

  <a href="mailto:niceboybiz@gmail.com">
    <button className="flex items-center justify-between rounded-xl border p-4 w-full text-left hover:bg-neutral-900 cursor-pointer transition duration-300">
      <div className="flex items-center gap-4">
        <Mail size={40} />
        <div>
          <span className="text-[16px]">Email</span>
          <p className="text-[14px]">niceboybiz@gmail.com</p>
        </div>
      </div>
    </button>
  </a>
</div>

    </div>
  );
}

export default Contact;
