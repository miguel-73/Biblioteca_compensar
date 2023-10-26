import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import { Engine, Container } from "tsparticles-engine";
import RutasDrawer from "../Router/RutasDrawer";

const ParticlesContainer: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Puedes utilizar el contenedor aquí si lo necesitas
  }, []);

  return (
    <div className="w-screen h-screen">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // enable establecido en true y zIndex para asegurarse de que esté detrás de otros elementos si es necesario
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 300,
            },
            value: 80,
          },
          opacity: {
            value: 3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    <RutasDrawer /> 
  </div>
);
};

export default ParticlesContainer;
