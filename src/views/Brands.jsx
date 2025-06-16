import React from "react";
import Company from "../components/Company";
import Archero2 from "../assets/images/Archero2.png";
import MarvelRivals from "../assets/images/MarvelRivals.png";
import RealmOfPixel from "../assets/images/RealmOfPixel.png";
import WhiteCastle from "../assets/images/WhiteCastle.png";
import ZenlessZoneZero from "../assets/images/ZenlessZoneZero.png";

function Brands() {
  let companies = [
    {
      name: "Marvel Rivals",
      link: "https://www.youtube.com/shorts/E8WtkvY0ucQ",
      description:
        "Paolo had the opportunity to participate in Marvel Rivals' launch campaign, promoting the exciting new game in collaboration with NetEase!",
        image:MarvelRivals,
    },
    {
      name: "Archero 2",
      link: "https://www.youtube.com/shorts/ZsRloVR82JQ",
      description:
        "Paolo introduced a new game to audiences worldwide in Archero 2. This collaboration showed off Paolo's ad read skills while adding his own flair and personality",
        image:Archero2,
    },
    {
      name: "White Castle",
      link: "https://www.youtube.com/shorts/6FiRItznS3c",
      description:
        "This ad took a lot of creativity as it involved a collaboration among multiple IPs and companies: White Castle, Borderlands, and Lionsgate",
        image:WhiteCastle,
    },
    {
      name: "Zenless Zone Zero",
      link: "https://www.youtube.com/shorts/x8mhKQX-ddw",
      description:
        "Paolo is a HUGE fan of the HoYoverse titles so getting the chance to collaborate with Zenless Zone Zero was a dream! This ad showcased how Paolo can create creative branded content",
        image:ZenlessZoneZero,
    },
    {
      name: "Realm of Pixel",
      link: "https://www.youtube.com/shorts/8DwtAgwdYK4",
      description:
        "Realm of Pixels collaboration was a huge success amassing over 2 million views and promoting the game in a fun way!",
        image:RealmOfPixel,
    },
  ];
  return (
    <div className="w-full min-h-screen bg-Light flex flex-col items-center px-4 py-10">
      
      

<div className="text-center mb-8 md:space-y-2">
        <h1 className="text-5xl md:text-7xl font-extrabold text-Grey">BRANDS</h1>
        <p className="text-[#505050] text-sm md:text-xl">
          Explore recent brands I collaborated with.
        </p>
        {/* <p className="text-xs text-black mt-1 md:text-xl">
          All | Entertainment | Lifestyle | Gaming | Impact
        </p> */}
      </div>

  
      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <Company
            key={index}
            image={company.image}
            name={company.name}
            description={company.description}
            link={company.link}
          />
        ))}
      </div>
    </div>
  );
  
}

export default Brands;
