"use client";

import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Confetti({ trigger }: { trigger: boolean }) {
    const particlesRef = useRef<Container | null>(null);
    const [key, setKey] = useState(0);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
    }, []);

    useEffect(() => {
        if (trigger && particlesRef.current) {
            particlesRef.current.loadTheme("confetti");
            setKey(prevKey => prevKey + 1);
        }
    }, [trigger]);

    const options: ISourceOptions = {
        fullScreen: {
            enable: true,
        },
        emitters: {
          position: {
              x: 50,
              y: 50
          },
            rate: {
              quantity: 5,
              delay: 0.1
            }
        },
        particles: {
            number: {
                value: 500,
            },
            color: {
                value: [
                    "#7cccfd",
                    "#ff7fbc",
                    "#fcf780",
                    "#1E00FF",
                    "#FF0061",
                    "#E1FF00",
                    "#00FF9E"
                ]
            },
            shape: {
                type: [
                    "square",
                ]
            },
            opacity: {
                value: {
                    min: 0,
                    max: 1
                },
                animation: {
                    enable: true,
                    speed: 2,
                    startValue: "max",
                    destroy: "min"
                }
            },
            size: {
                value: {
                    min: 2,
                    max: 5
                }
            },
            life: {
                duration: {
                    sync: true,
                    value: 5
                },
                count: 1
            },
            move: {
                enable: true,
                gravity: {
                    enable: true,
                    acceleration: 20
                },
                speed: 20,
                decay: 0.05,
                direction: "top",
                straight: false,
                outModes: {
                    default: "destroy",
                    top: 'none'
                }
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360
                },
                direction: "random",
                move: true,
                animation: {
                    enable: true,
                    speed: 60
                }
            },
            tilt: {
                value: {
                    min: 0,
                    max: 360
                },
                direction: "random",
                enable: true,
                move: true,
                animation: {
                    enable: true,
                    speed: 60
                }
            },
            roll: {
                darken: {
                    enable: true,
                    value: 30
                },
                enable: true,
                speed: {
                    min: 15,
                    max: 25
                }
            },
            wobble: {
                distance: 30,
                enable: true,
                speed: {
                    min: -15,
                    max: 15
                }
            },
        }
    };

    return <Particles id="confetti" options={options} key={key} />;
}
