import PaoloPFP from "../assets/images/PaoloPFP.jpeg";

function About() {
  return (
    <div className="min-h-screen bg-Light flex flex-col xl:flex-row justify-center items-center px-5 py-12 space-y-6 xl:space-y-0 xl:space-x-12">
      {/*Image Section*/}
      <div className="drop-shadow-xl z-10 w-[256px] h-[246px] md:w-[456px] md:h-[446px] xl:w-[656px] xl:h-[646px] rounded-xl overflow-hidden transition-transform duration-800 hover:-translate-y-3">
        <img
          src={PaoloPFP}
          alt="Picture Of Paolo"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Section */}
        <div className="z-10 flex flex-col text-Grey max-w-xl space-y-2">
        <h1 className="text-5xl font-extrabold xl:text-7xl text-center xl:text-left">ABOUT ME</h1>
        <p className="text-center md:text-[16px] xl:text-left font-semibold xl:text-[24px]">
            Paolo, known online as justpaolostar, is a vibrant and engaging
            content creator who brings authentic energy to every stream and
            post. Whether he's live on               <a
                    href="https://www.twitch.tv/justpaolostar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#735946] translate-colors duration-300 hover:text-DarkBrown"
                  >
                    Twitch
                  </a>, sharing gaming moments and
            connecting with his community, or sparking conversation and sharing
            insights on other socials, Paolo consistently shows up as his real,
            passionate self. With a growing presence in the gaming and content
            space, he blends entertainment, personality, and community-building
            into everything he does.
          </p>
        </div>
    </div>
  );
}

export default About;
