import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  autoPlay: true,
  background: {
    color: { value: "#000000" },
    opacity: 1
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: { enable: false, mode: [] },
      onHover: { enable: false, mode: [] },
      resize: { enable: true, delay: 0.5 }
    },
    modes: {}
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      enable: false
    },
    move: {
      enable: true,
      direction: "none", // more natural space drift
      speed: 0.4,
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    },
    number: {
      value: 350,
      density: {
        enable: true,
        area: 800
      }
    },
    opacity: {
      value: { min: 0.1, max: 0.8 } // 🌌 varied star brightness
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 0.5, max: 2.5 } // ✨ different star sizes
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  zLayers: 100
};


const ParticlesComponent = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return <Particles id={id} options={particlesOptions} />;
};

export default ParticlesComponent;
