import BrightLight from "../assets/images/BrightLight.png";
import PaoloLogo from "../assets/images/PaoloLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faTwitch,
  faXTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
  faItunesNote,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import ParticlesComponent from "../components/particles";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Landing() {
const socials = [
  { icon: faSpotify, url: "https://open.spotify.com/artist/1ULQXHxii8790fXADzSAly" },
  { icon: faTwitch, url: "https://www.twitch.tv/justpaolostar" },
  { icon: faXTwitter, url: "https://x.com/justpaolostar" },
  { icon: faInstagram, url: "https://www.instagram.com/justpaolostar" },
  { icon: faEnvelope, url: "mailto:niceboybiz@gmail.com" }, // ← fix here
  { icon: faTiktok, url: "https://www.tiktok.com/@justpaolostar" },
  { icon: faYoutube, url: "https://www.youtube.com/@justpaolostar" },
  { icon: faItunesNote, url: "https://music.apple.com/us/artist/nice-boy-paolo/1503382900" },
  { icon: faSoundcloud, url: "https://soundcloud.com/niceboypaolo" },
];

  return (
<div className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden select-none">
  {/* Add this wrapper with absolute fill + z-index */}
  <div className="absolute inset-0 -z-10">
    <ParticlesComponent id="particles" />
  </div>

  {/* Bright Light background (already good) */}
  <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px]">
    <img
      src={BrightLight}
      alt="Bright Light"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 md:w-[200%] md:h-[100%] object-contain animate-pulse animate-pulse-slow"
    />
<img
  src={PaoloLogo}
  alt="Paolo Logo"
  draggable="false"
  className="relative z-10 w-full h-full object-contain select-none animate-float"
/>
  </div>

  {/* Text + Socials */}
  <div className="flex flex-col justify-center items-center space-y-2">
    <div
      className="text-white"
      style={{ fontFamily: "var(--font-book-antiqua)" }}
    >
      JUSTPAOLOSTAR
    </div>
    <div className="flex gap-3 text-[3vh] lg:gap-3 lg:text-[4vh] text-white">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:brightness-75 transition duration-300"
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  </div>
</div>

  );
}

export default Landing;
